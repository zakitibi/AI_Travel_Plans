/**
 * RouteRenderer.js — Travel Map Engine v2
 *
 * Renders a GeoJSON FeatureCollection of LineStrings (one per stage/szakasz).
 * Uses L.geoJSON with per-feature styling derived from feature.properties.color.
 *
 * Expected GeoJSON format:
 * {
 *   "type": "FeatureCollection",
 *   "features": [{
 *     "type": "Feature",
 *     "properties": { "stage": "baltikum", "color": "#8a4f24", "name": "Baltikum" },
 *     "geometry": { "type": "LineString", "coordinates": [[lng, lat], ...] }
 *   }]
 * }
 */

const DEFAULT_COLOR   = "#64748b";
const DEFAULT_WEIGHT  = 3;
const DEFAULT_OPACITY = 0.75;

export class RouteRenderer {
  /**
   * @param {object} L   Leaflet global (window.L)
   * @param {object} map Leaflet map instance
   */
  constructor(L, map) {
    this._L    = L;
    this._map  = map;
    /** @type {L.GeoJSON|null} */
    this._layer = null;
  }

  /**
   * Render a GeoJSON FeatureCollection.  Safe to call again — replaces existing.
   * @param {object} geojson  GeoJSON FeatureCollection
   * @returns {L.GeoJSON}
   */
  render(geojson) {
    this._destroy();

    this._layer = this._L.geoJSON(geojson, {
      style: (feature) => {
        const p = feature.properties || {};
        const type = p.type || "drive";
        return {
          color:     p.color   || DEFAULT_COLOR,
          weight:    p.weight  || DEFAULT_WEIGHT,
          opacity:   p.opacity || DEFAULT_OPACITY,
          lineJoin:  "round",
          lineCap:   "round",
          dashArray: type === "flight" ? "4 10"
                   : type === "ferry"  ? "7 9"
                   : null,
        };
      },
    }).addTo(this._map);

    return this._layer;
  }

  /** Return the underlying L.GeoJSON layer (null before first render). */
  getLayer() { return this._layer; }

  /** Remove the route from the map. */
  destroy() { this._destroy(); }

  // ── Private ─────────────────────────────────────────────────────────────
  _destroy() {
    if (this._layer) {
      this._map.removeLayer(this._layer);
      this._layer = null;
    }
  }
}
