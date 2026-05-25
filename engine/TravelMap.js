/**
 * TravelMap.js — Travel Map Engine
 * Core Leaflet map class for static travel sites.
 *
 * Features:
 *   - Auto-injects map.css via import.meta.url (zero config for consumers)
 *   - Custom div-icon markers based on Típus column
 *   - Route polylines per Szakasz with distinct colours
 *   - Rich popup from all available columns
 *   - Layer control (group by Szakasz / Típus / Nap)
 *   - Loading overlay with spinner
 *   - fitBounds after data load
 *   - Mobile-friendly (touch pan/zoom via Leaflet defaults)
 *
 * Usage (from any trip's map-init.js):
 *   import { TravelMap } from "../../engine/TravelMap.js";
 *   const map = new TravelMap("map-container-id", { groupBy: "szakasz" });
 *   await map.load("https://script.google.com/.../exec?trip=MyTrip");
 */

import { loadTripData }              from "./TripLoader.js";
import { LayerManager, colorForSzakasz } from "./LayerManager.js";

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

// ── Típus → icon config ───────────────────────────────────────────────────────
const TIPO = {
  drive:      { emoji: "🚗", cls: "tm-marker-drive"   },
  autó:       { emoji: "🚗", cls: "tm-marker-drive"   },
  auto:       { emoji: "🚗", cls: "tm-marker-drive"   },
  hotel:      { emoji: "🏨", cls: "tm-marker-hotel"   },
  szállás:    { emoji: "🏨", cls: "tm-marker-hotel"   },
  szallas:    { emoji: "🏨", cls: "tm-marker-hotel"   },
  ferry:      { emoji: "🚢", cls: "tm-marker-ferry"   },
  komp:       { emoji: "🚢", cls: "tm-marker-ferry"   },
  flight:     { emoji: "✈",  cls: "tm-marker-flight"  },
  repülő:     { emoji: "✈",  cls: "tm-marker-flight"  },
  repulo:     { emoji: "✈",  cls: "tm-marker-flight"  },
  sight:      { emoji: "📍", cls: "tm-marker-sight"   },
  látnivaló:  { emoji: "📍", cls: "tm-marker-sight"   },
  latnivalo:  { emoji: "📍", cls: "tm-marker-sight"   },
};

function tipoConf(tipus) {
  const key = (tipus || "").toLowerCase().trim()
    .normalize("NFD").replace(/[̀-ͯ]/g, "");
  return TIPO[key] || { emoji: "📌", cls: "tm-marker-default" };
}

// ── Div-icon factory ──────────────────────────────────────────────────────────
function createIcon(L, row) {
  const { emoji, cls } = tipoConf(row.Típus);
  return L.divIcon({
    className: "",
    html: `<div class="tm-marker ${cls}"><span class="tm-marker-inner">${emoji}</span></div>`,
    iconSize:    [30, 30],
    iconAnchor:  [15, 30],
    popupAnchor: [0, -33],
  });
}

// ── Popup HTML builder ────────────────────────────────────────────────────────
function buildPopup(row) {
  const { emoji } = tipoConf(row.Típus);
  const title   = row.Cél || row.Start || row.Szállás || "—";
  const dayStr  = row.Nap   ? `${row.Nap}. nap` : "";
  const dateStr = row.Dátum ? row.Dátum          : "";
  const meta    = [dayStr, dateStr].filter(Boolean).join(" · ");

  function tr(label, value) {
    if (!value || value === "—") return "";
    return `<div class="tm-popup-row">
      <span class="tm-popup-label">${label}</span>
      <span class="tm-popup-value">${value}</span>
    </div>`;
  }

  const routeParts = [
    row.Start && row.Cél && row.Start !== row.Cél
      ? tr("Útvonal", `${row.Start} → ${row.Cél}`)
      : tr("Helyszín", row.Start || row.Cél),
    tr("Ország",       row.Ország),
    tr("Szállás",      row.Szállás
       ? `${row.Szállás}${row["Szállás típus"] ? ` (${row["Szállás típus"]})` : ""}`
       : ""),
    tr("Közlekedés",   row.Közlekedés),
    tr("Indulás / érk",
       row.Indulás && row.Érkezés
         ? `${row.Indulás} → ${row.Érkezés}`
         : row.Indulás || row.Érkezés),
    tr("Távolság",     row.Km        ? `${row.Km} km` : ""),
    tr("Vezetési idő", row["Vezetési idő"]),
    tr("Parkolás",     row.Parkolás),
    tr("Státusz",      row.Státusz),
  ].join("");

  const program = row["Látnivalók / Program"]
    ? `<div class="tm-popup-row">
         <span class="tm-popup-label">Program</span>
         <span class="tm-popup-value">${row["Látnivalók / Program"]}</span>
       </div>`
    : "";

  const note = row.Megjegyzés
    ? `<div class="tm-popup-note">${row.Megjegyzés}</div>`
    : "";

  const szakasz = row.Szakasz
    ? `<span class="tm-popup-szakasz">${row.Szakasz}</span>`
    : "";

  const mapsHref = row["My Maps hely"] && row["My Maps hely"].startsWith("http")
    ? `<div style="margin-top:8px">
         <a href="${row["My Maps hely"]}" target="_blank" rel="noreferrer"
            style="font-size:11px;color:#1f5a3e;font-weight:700;text-decoration:none">
           Google Maps ↗
         </a>
       </div>`
    : "";

  return `<div class="tm-popup">
    <div class="tm-popup-head">
      <span class="tm-popup-icon">${emoji}</span>
      <div>
        <div class="tm-popup-title">${title}</div>
        ${meta ? `<div class="tm-popup-date">${meta}</div>` : ""}
      </div>
    </div>
    <div class="tm-popup-divider"></div>
    ${routeParts}${program}${note}
    <div style="margin-top:6px">${szakasz}${mapsHref}</div>
  </div>`;
}

// ── TravelMap ─────────────────────────────────────────────────────────────────
export class TravelMap {
  /**
   * @param {string} containerId  ID of the DOM element for the Leaflet map.
   * @param {object} [opts]
   * @param {"szakasz"|"tipus"|"nap"} [opts.groupBy="szakasz"]
   * @param {string}  [opts.fallbackUrl]      Local JSON fallback path.
   * @param {number}  [opts.defaultZoom=5]
   * @param {number[]} [opts.defaultCenter=[58,14]]  [lat, lng]
   */
  constructor(containerId, opts = {}) {
    this._id = containerId;
    this._opts = {
      groupBy:       "szakasz",
      fallbackUrl:   null,
      defaultZoom:   5,
      defaultCenter: [58, 14],
      ...opts,
    };
    /** @type {L.Map|null} */         this._map     = null;
    /** @type {LayerManager|null} */  this._layers  = null;
    /** @type {Map<Object,L.Marker>} */ this._idx   = new Map();
    /** @type {L.Polyline[]} */       this._lines   = [];
    /** @type {HTMLElement|null} */   this._overlay = null;
    /** @type {"idle"|"loading"|"ready"|"error"} */ this._state = "idle";
  }

  // ── Public API ───────────────────────────────────────────────────────────

  /**
   * Initialise Leaflet and fetch data from the API.
   * Idempotent — safe to call multiple times (subsequent calls are no-ops).
   * @param {string} apiUrl
   */
  async load(apiUrl) {
    if (this._state !== "idle") return;
    this._state = "loading";

    this._initLeaflet();
    this._setOverlay("loading");

    try {
      const rows = await loadTripData(apiUrl, this._opts.fallbackUrl);
      this._render(rows);
      this._state = "ready";
      this._hideOverlay();
    } catch (err) {
      this._state = "error";
      this._setOverlay("error", err.message);
      console.error("[TravelMap] Failed to load data:", err);
    }
  }

  /**
   * Switch layer grouping on a loaded map.
   * @param {"szakasz"|"tipus"|"nap"} mode
   */
  setGroupBy(mode) {
    if (this._map && this._idx.size) {
      this._layers.build([...this._idx.keys()], this._idx, mode);
    }
  }

  /** Zoom/pan to fit all markers. */
  fitAll() {
    if (!this._map || !this._idx.size) return;
    this._map.fitBounds(
      window.L.latLngBounds([...this._idx.values()].map((m) => m.getLatLng())),
      { padding: [40, 40] }
    );
  }

  /**
   * Open the popup for a specific stop.
   * @param {string|number} nap   Nap column value
   * @param {string}        cel   Cél column value
   * @returns {boolean} true if found
   */
  focusStop(nap, cel) {
    for (const [row, marker] of this._idx) {
      if (String(row.Nap) === String(nap) && row.Cél === cel) {
        this._map.panTo(marker.getLatLng());
        marker.openPopup();
        return true;
      }
    }
    return false;
  }

  /** Tear down the map instance and reset to idle state. */
  destroy() {
    if (this._layers) this._layers.destroy();
    if (this._map)    { this._map.remove(); this._map = null; }
    this._idx.clear();
    this._lines = [];
    this._state = "idle";
  }

  // ── Private ──────────────────────────────────────────────────────────────

  _initLeaflet() {
    const L = window.L;
    if (!L) throw new Error("Leaflet not found. Add the Leaflet CDN script before map-init.js.");

    const container = document.getElementById(this._id);
    if (!container) throw new Error(`Map container #${this._id} not found in DOM.`);

    // Resolve overlay element (sibling inside the same .travel-map-wrap)
    const wrap = container.parentElement;
    this._overlay = wrap ? wrap.querySelector(".tm-overlay") : null;

    this._map = L.map(this._id, {
      zoomControl: true,
      attributionControl: true,
    }).setView(this._opts.defaultCenter, this._opts.defaultZoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(this._map);

    this._layers = new LayerManager(L, this._map);
  }

  _render(rows) {
    const L = window.L;
    this._idx.clear();
    for (const pl of this._lines) this._map.removeLayer(pl);
    this._lines = [];

    const geoRows = rows.filter((r) => r.Lat != null && r.Lng != null);

    // ── Markers ──
    for (const row of geoRows) {
      const marker = L.marker([row.Lat, row.Lng], { icon: createIcon(L, row) })
        .bindPopup(buildPopup(row), { maxWidth: 320 });
      this._idx.set(row, marker);
    }

    // ── Polylines per Szakasz (preserving row order) ──
    const groups = new Map();
    for (const row of geoRows) {
      const key = row.Szakasz || "_all";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push([row.Lat, row.Lng]);
    }
    for (const [key, coords] of groups) {
      if (coords.length < 2) continue;
      const sample = geoRows.find((r) => (r.Szakasz || "_all") === key);
      const pl = L.polyline(coords, {
        color:    colorForSzakasz(sample || {}),
        weight:   3,
        opacity:  0.75,
        lineJoin: "round",
      }).addTo(this._map);
      this._lines.push(pl);
    }

    // ── Layer control ──
    this._layers.build(geoRows, this._idx, this._opts.groupBy);

    // ── fitBounds ──
    if (this._idx.size) {
      this._map.fitBounds(
        L.latLngBounds([...this._idx.values()].map((m) => m.getLatLng())),
        { padding: [40, 40] }
      );
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
