/**
 * LayerManager.js — Travel Map Engine v2
 *
 * Builds Leaflet layer groups from POIs and manages L.control.layers.
 *
 * Grouping modes (groupBy):
 *   "stage"  — poi.stage   e.g. "baltikum", "izland", "hazaut"
 *   "type"   — poi.type    e.g. "hotel", "sight", "ferry"
 *   "day"    — poi.day     e.g. 1, 2, …
 */

export class LayerManager {
  /**
   * @param {object} L   Leaflet global (window.L)
   * @param {object} map Leaflet map instance
   */
  constructor(L, map) {
    this._L   = L;
    this._map = map;
    /** @type {L.Control.Layers|null} */
    this._control  = null;
    /** @type {Map<string, L.LayerGroup>} */
    this._overlays = new Map();
  }

  /**
   * Build (or rebuild) layer groups from POIs and a marker index.
   * Safe to call multiple times — tears down the existing control first.
   *
   * @param {object[]}          pois         POI array from pois.json
   * @param {Map<string, L.Marker>} markerIndex  id → Marker map
   * @param {"stage"|"type"|"day"} groupBy
   */
  build(pois, markerIndex, groupBy = "stage") {
    if (this._control) { this._control.remove(); this._control = null; }
    for (const lg of this._overlays.values()) this._map.removeLayer(lg);
    this._overlays.clear();

    for (const poi of pois) {
      const marker = markerIndex.get(poi.id);
      if (!marker) continue;
      const label = this._label(poi, groupBy);
      if (!this._overlays.has(label)) {
        this._overlays.set(label, this._L.layerGroup());
      }
      this._overlays.get(label).addLayer(marker);
    }

    // All groups visible by default
    for (const lg of this._overlays.values()) lg.addTo(this._map);

    // Layer control only when there is more than one group
    if (this._overlays.size > 1) {
      const overlaysObj = Object.fromEntries(this._overlays);
      this._control = this._L.control.layers(null, overlaysObj, {
        position:  "topright",
        collapsed: true,
      }).addTo(this._map);
    }
  }

  /** Remove all layers and the control widget from the map. */
  destroy() {
    if (this._control) { this._control.remove(); this._control = null; }
    for (const lg of this._overlays.values()) this._map.removeLayer(lg);
    this._overlays.clear();
  }

  // ── Private ────────────────────────────────────────────────────────────
  _label(poi, groupBy) {
    switch (groupBy) {
      case "day":   return poi.day   ? `Nap ${poi.day}`  : "—";
      case "type":  return poi.type  || "—";
      case "stage":
      default:      return poi.stage || "—";
    }
  }
}
