/**
 * LayerManager.js — Travel Map Engine
 * Builds Leaflet layer groups from trip rows and manages L.control.layers.
 *
 * Grouping modes:
 *   "szakasz"  — row.Szakasz   e.g. "Baltikum", "Izland", "Hazaút"
 *   "tipus"    — row.Típus     e.g. "drive", "hotel", "ferry"
 *   "nap"      — row.Nap       e.g. "1", "2", …
 */

/** Polyline colours per Szakasz. */
const SZAKASZ_COLORS = {
  baltikum: "#8a4f24",
  izland:   "#1f5a3e",
  hazaut:   "#6a4ca3",
  hazaút:   "#6a4ca3",
  default:  "#64748b",
};

/** Normalise a Szakasz label to a stable ASCII key (strips Hungarian accents). */
function szakaszKey(label) {
  return (label || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "_")
    .trim() || "egyeb";
}

/**
 * Return the polyline colour for a row based on its Szakasz field.
 * @param {Object} row
 * @returns {string} CSS colour
 */
export function colorForSzakasz(row) {
  const key = szakaszKey(row.Szakasz || "");
  return SZAKASZ_COLORS[key] || SZAKASZ_COLORS.default;
}

export class LayerManager {
  /**
   * @param {object} L   — Leaflet global (window.L)
   * @param {object} map — Leaflet map instance
   */
  constructor(L, map) {
    this._L   = L;
    this._map = map;
    /** @type {L.Control.Layers|null} */
    this._control = null;
    /** @type {Map<string, L.LayerGroup>} */
    this._overlays = new Map();
  }

  /**
   * Build or rebuild layer groups from rows.
   * Safe to call multiple times — tears down existing control first.
   *
   * @param {Object[]}           rows        Normalised trip rows.
   * @param {Map<Object,L.Marker>} markerIndex Row → Marker mapping.
   * @param {"szakasz"|"tipus"|"nap"} groupBy
   */
  build(rows, markerIndex, groupBy = "szakasz") {
    // Remove existing control and layer groups
    if (this._control) { this._control.remove(); this._control = null; }
    for (const lg of this._overlays.values()) this._map.removeLayer(lg);
    this._overlays.clear();

    // Group markers
    for (const row of rows) {
      const marker = markerIndex.get(row);
      if (!marker) continue;
      const label = this._groupLabel(row, groupBy);
      if (!this._overlays.has(label)) {
        this._overlays.set(label, this._L.layerGroup());
      }
      this._overlays.get(label).addLayer(marker);
    }

    // Add all groups to map (all visible by default)
    for (const lg of this._overlays.values()) lg.addTo(this._map);

    // Add layers control only when there is more than one group
    if (this._overlays.size > 1) {
      const overlaysObj = Object.fromEntries(this._overlays);
      this._control = this._L.control.layers(null, overlaysObj, {
        position:  "topright",
        collapsed: true,
      }).addTo(this._map);
    }
  }

  /** Remove all layers and the control from the map. */
  destroy() {
    if (this._control) { this._control.remove(); this._control = null; }
    for (const lg of this._overlays.values()) this._map.removeLayer(lg);
    this._overlays.clear();
  }

  _groupLabel(row, groupBy) {
    switch (groupBy) {
      case "nap":    return row.Nap   ? `Nap ${row.Nap}`  : "—";
      case "tipus":  return row.Típus || "—";
      case "szakasz":
      default:       return row.Szakasz || "—";
    }
  }
}
