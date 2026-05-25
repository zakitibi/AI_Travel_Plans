/**
 * MarkerRenderer.js — Travel Map Engine v2
 *
 * Features:
 *   - Div-icon markers based on POI type (hotel, drive, ferry, flight, sight)
 *   - Lazy popup rendering (HTML built only when popup opens)
 *   - Optional marker clustering via Leaflet.markercluster (if loaded)
 *   - Returns a Map<id, L.Marker> for programmatic access
 */

// ── Type → icon config ────────────────────────────────────────────────────────
const TYPE_CONF = {
  hotel:      { emoji: "🏨", cls: "tm-marker-hotel"   },
  drive:      { emoji: "🚗", cls: "tm-marker-drive"   },
  waypoint:   { emoji: "📌", cls: "tm-marker-default" },
  ferry:      { emoji: "🚢", cls: "tm-marker-ferry"   },
  flight:     { emoji: "✈",  cls: "tm-marker-flight"  },
  sight:      { emoji: "📍", cls: "tm-marker-sight"   },
  waterfall:  { emoji: "💧", cls: "tm-marker-sight"   },
  geothermal: { emoji: "♨",  cls: "tm-marker-sight"   },
};

function typeConf(type) {
  return TYPE_CONF[(type || "").toLowerCase()] || { emoji: "📌", cls: "tm-marker-default" };
}

// ── Icon factory ──────────────────────────────────────────────────────────────
function createIcon(L, poi) {
  const { emoji, cls } = typeConf(poi.type);
  return L.divIcon({
    className: "",
    html: `<div class="tm-marker ${cls}"><span class="tm-marker-inner">${emoji}</span></div>`,
    iconSize:    [30, 30],
    iconAnchor:  [15, 30],
    popupAnchor: [0, -33],
  });
}

// ── Popup HTML builder (called lazily on first open) ──────────────────────────
function buildPopupHtml(poi) {
  const { emoji } = typeConf(poi.type);
  const subtitle = [
    poi.day   ? `${poi.day}. nap` : "",
    poi.date  ? poi.date.replace(/-/g, ".") : "",
    poi.country || "",
  ].filter(Boolean).join(" · ");

  const stageBadge = poi.stage
    ? `<span class="tm-popup-szakasz">${poi.stage}</span>`
    : "";

  const noteHtml = poi.popup?.note
    ? `<div class="tm-popup-note">${poi.popup.note}</div>`
    : "";

  return `
    <div class="tm-popup">
      <div class="tm-popup-head">
        <span class="tm-popup-icon">${emoji}</span>
        <div>
          <div class="tm-popup-title">${poi.popup?.title || poi.name}</div>
          ${subtitle ? `<div class="tm-popup-date">${subtitle}</div>` : ""}
        </div>
      </div>
      <div class="tm-popup-divider"></div>
      ${poi.popup?.description
        ? `<div class="tm-popup-desc">${poi.popup.description}</div>`
        : ""}
      ${noteHtml}
      <div class="tm-popup-foot">${stageBadge}</div>
    </div>
  `;
}

// ── MarkerRenderer ────────────────────────────────────────────────────────────
export class MarkerRenderer {
  /**
   * @param {object} L   Leaflet global (window.L)
   * @param {object} map Leaflet map instance
   * @param {object} [opts]
   * @param {boolean} [opts.cluster=false]  Use L.markerClusterGroup if available
   * @param {number}  [opts.maxClusterRadius=60]
   */
  constructor(L, map, opts = {}) {
    this._L    = L;
    this._map  = map;
    this._opts = { cluster: false, maxClusterRadius: 60, ...opts };
    /** @type {Map<string, L.Marker>} */
    this._markers = new Map();
    /** @type {L.LayerGroup|L.MarkerClusterGroup|null} */
    this._container = null;
  }

  /**
   * Render all POIs.  Safe to call again — tears down and rebuilds.
   * @param {object[]} pois
   * @returns {Map<string, L.Marker>}
   */
  render(pois) {
    this._destroy();

    const L = this._L;
    const useCluster =
      this._opts.cluster && typeof L.markerClusterGroup === "function";

    this._container = useCluster
      ? L.markerClusterGroup({
          maxClusterRadius: this._opts.maxClusterRadius,
          showCoverageOnHover: false,
          spiderfyOnMaxZoom: true,
          animate: true,
        })
      : L.layerGroup();

    for (const poi of pois) {
      if (poi.lat == null || poi.lng == null) continue;

      const marker = L.marker([poi.lat, poi.lng], {
        icon: createIcon(L, poi),
        // riseOnHover for better UX on dense maps
        riseOnHover: true,
      });

      // Lazy popup: the function is called only when the popup opens
      marker.bindPopup(() => buildPopupHtml(poi), {
        maxWidth:    320,
        autoPanPadding: [20, 20],
      });

      this._markers.set(poi.id, marker);
      this._container.addLayer(marker);
    }

    this._map.addLayer(this._container);
    return this._markers;
  }

  /**
   * Get a specific marker by POI id.
   * @param {string} id
   * @returns {L.Marker|undefined}
   */
  getMarker(id) { return this._markers.get(id); }

  /**
   * L.LatLngBounds covering all rendered markers (null if empty).
   * @returns {L.LatLngBounds|null}
   */
  getBounds() {
    if (!this._markers.size) return null;
    return this._L.latLngBounds(
      [...this._markers.values()].map((m) => m.getLatLng())
    );
  }

  /** Remove all markers from the map. */
  destroy() { this._destroy(); }

  // ── Private ─────────────────────────────────────────────────────────────
  _destroy() {
    if (this._container) {
      this._map.removeLayer(this._container);
      this._container = null;
    }
    this._markers.clear();
  }
}
