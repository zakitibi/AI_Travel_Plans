/**
 * TravelMap.js — Travel Map Engine v2
 *
 * Orchestrator class for the static travel map.
 * Loads pre-generated JSON from /data/trips/{tripId}/ — NO runtime API calls.
 *
 * Architecture:
 *   TravelMap
 *   ├── TripLoader      — fetches trip.json, pois.json, route.json in parallel
 *   ├── MarkerRenderer  — div-icon markers, lazy popups, optional clustering
 *   ├── RouteRenderer   — GeoJSON LineStrings per stage
 *   └── LayerManager    — L.control.layers grouped by stage/type/day
 *
 * Performance:
 *   - preferCanvas: true   → canvas renderer for vectors (faster than SVG)
 *   - 3 parallel fetches   → Promise.all, no sequential waterfall
 *   - Lazy popup HTML      → built only when a popup opens
 *   - Optional clustering  → L.markerClusterGroup (if plugin loaded)
 *   - Auto CSS injection   → zero config for trip pages
 *
 * Usage (from any trip's map-init.js):
 *   import { TravelMap } from "../../engine/TravelMap.js";
 *   const map = new TravelMap("map-container-id", { cluster: true });
 *   await map.load("izland-es-eszak-europa");
 */

import { loadTrip }           from "./TripLoader.js";
import { LayerManager }       from "./LayerManager.js";
import { MarkerRenderer }     from "./MarkerRenderer.js";
import { RouteRenderer }      from "./RouteRenderer.js";

// ── Auto-inject map.css once ──────────────────────────────────────────────────
(function injectMapCss() {
  const cssHref = new URL("./map.css", import.meta.url).href;
  if (!document.querySelector(`link[href="${cssHref}"]`)) {
    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = cssHref;
    document.head.appendChild(link);
  }
})();

// ── TravelMap ─────────────────────────────────────────────────────────────────
export class TravelMap {
  /**
   * @param {string} containerId  ID of the DOM element for the Leaflet map.
   * @param {object} [opts]
   * @param {"stage"|"type"|"day"} [opts.groupBy="stage"]   Layer control grouping.
   * @param {string}  [opts.dataRoot]  Base URL for JSON files — pass from map-init.js via import.meta.url.
   * @param {number}  [opts.defaultZoom=4]
   * @param {number[]} [opts.defaultCenter=[60, 5]]          [lat, lng]
   * @param {boolean} [opts.cluster=false]                   Enable marker clustering.
   * @param {number}  [opts.maxClusterRadius=60]
   */
  constructor(containerId, opts = {}) {
    this._id   = containerId;
    this._opts = {
      groupBy:          "stage",
      dataRoot:         null,   // must be supplied by map-init.js via import.meta.url
      defaultZoom:      4,
      defaultCenter:    [60, 5],
      cluster:          false,
      maxClusterRadius: 60,
      ...opts,
    };
    /** @type {L.Map|null} */             this._map      = null;
    /** @type {LayerManager|null} */      this._layers   = null;
    /** @type {MarkerRenderer|null} */    this._markers  = null;
    /** @type {RouteRenderer|null} */     this._routes   = null;
    /** @type {Map<string,L.Marker>} */   this._idx      = new Map();
    /** @type {object[]|null} */          this._pois     = null;
    /** @type {HTMLElement|null} */       this._overlay  = null;
    /** @type {"idle"|"loading"|"ready"|"error"} */ this._state = "idle";
  }

  // ── Public API ───────────────────────────────────────────────────────────

  /**
   * Initialise Leaflet and load static JSON data.
   * Idempotent — subsequent calls are no-ops.
   *
   * @param {string} tripId  e.g. "izland-es-eszak-europa"
   */
  async load(tripId) {
    if (this._state !== "idle") return;
    this._state = "loading";

    this._initLeaflet();
    this._setOverlay("loading");

    try {
      if (!this._opts.dataRoot) {
        throw new Error("dataRoot not set — pass it from map-init.js via import.meta.url");
      }
      const { trip, pois, route } = await loadTrip(tripId, this._opts.dataRoot);
      this._render(trip, pois, route);
      this._state = "ready";
      this._hideOverlay();
    } catch (err) {
      this._state = "error";
      this._setOverlay("error", err.message);
      console.error("[TravelMap] Failed to load trip data:", err);
    }
  }

  /**
   * Switch layer grouping on a loaded map (no reload needed).
   * @param {"stage"|"type"|"day"} mode
   */
  setGroupBy(mode) {
    if (this._map && this._pois) {
      this._layers.build(this._pois, this._idx, mode);
    }
  }

  /** Zoom/pan to fit all markers. */
  fitAll() {
    if (!this._map || !this._markers) return;
    const bounds = this._markers.getBounds();
    if (bounds) this._map.fitBounds(bounds, { padding: [40, 40] });
  }

  /**
   * Pan to and open the popup for a specific POI by id.
   * @param {string} id  poi.id from pois.json
   * @returns {boolean}  true if found
   */
  focusById(id) {
    const marker = this._idx.get(id);
    if (!marker) return false;
    this._map.panTo(marker.getLatLng());
    marker.openPopup();
    return true;
  }

  /**
   * Pan to and open the popup for a POI by day + name match.
   * @param {number|string} day
   * @param {string}        name  Partial match against poi.name
   * @returns {boolean}
   */
  focusByDay(day, name) {
    for (const [id, marker] of this._idx) {
      const poi = this._pois?.find((p) => p.id === id);
      if (
        poi &&
        String(poi.day) === String(day) &&
        poi.name.toLowerCase().includes(name.toLowerCase())
      ) {
        this._map.panTo(marker.getLatLng());
        marker.openPopup();
        return true;
      }
    }
    return false;
  }

  /** Remove all layers and reset to idle. */
  destroy() {
    if (this._layers)  this._layers.destroy();
    if (this._markers) this._markers.destroy();
    if (this._routes)  this._routes.destroy();
    if (this._map)     { this._map.remove(); this._map = null; }
    this._idx.clear();
    this._pois  = null;
    this._state = "idle";
  }

  // ── Private ──────────────────────────────────────────────────────────────

  _initLeaflet() {
    const L = window.L;
    if (!L) throw new Error("Leaflet not found. Add the Leaflet CDN script before map-init.js.");

    const container = document.getElementById(this._id);
    if (!container) throw new Error(`Map container #${this._id} not found in DOM.`);

    const wrap = container.parentElement;
    this._overlay = wrap ? wrap.querySelector(".tm-overlay") : null;

    this._map = L.map(this._id, {
      zoomControl:       true,
      attributionControl: true,
      preferCanvas:      true,   // canvas renderer — faster than SVG for many layers
    }).setView(this._opts.defaultCenter, this._opts.defaultZoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(this._map);

    this._layers  = new LayerManager(L, this._map);
    this._markers = new MarkerRenderer(L, this._map, {
      cluster:          this._opts.cluster,
      maxClusterRadius: this._opts.maxClusterRadius,
    });
    this._routes = new RouteRenderer(L, this._map);
  }

  _render(trip, pois, route) {
    this._pois = pois;

    // 1. Route polylines (rendered first — sits behind markers)
    this._routes.render(route);

    // 2. Markers with lazy popups
    this._idx = this._markers.render(pois);

    // 3. Layer control
    this._layers.build(pois, this._idx, this._opts.groupBy);

    // 4. Fit map to all markers
    const bounds = this._markers.getBounds();
    if (bounds) {
      this._map.fitBounds(bounds, { padding: [40, 40] });
    }
  }

  _setOverlay(type, msg = "") {
    if (!this._overlay) return;
    this._overlay.classList.remove("tm-hidden");
    this._overlay.innerHTML =
      type === "loading"
        ? `<div class="tm-spinner"></div><span>Térkép betöltése…</span>`
        : `<div class="tm-error-msg">Nem sikerült betölteni az adatokat.<br><small>${msg}</small></div>`;
  }

  _hideOverlay() {
    if (this._overlay) this._overlay.classList.add("tm-hidden");
  }
}
