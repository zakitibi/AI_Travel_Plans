/**
 * TripLoader.js — Travel Map Engine v2
 *
 * Loads static JSON data files served directly from GitHub Pages CDN.
 * The browser NEVER calls Google Apps Script at runtime — all data is
 * pre-generated and committed to /data/trips/{tripId}/.
 *
 * File layout per trip:
 *   /data/trips/{tripId}/trip.json   — metadata, stages, days
 *   /data/trips/{tripId}/pois.json   — optimised marker data (lat/lng, type, popup)
 *   /data/trips/{tripId}/route.json  — GeoJSON FeatureCollection (one LineString per stage)
 *
 * All three files are fetched in parallel (Promise.all).
 */

const DEFAULT_DATA_ROOT = "/data/trips";

/** Fetch a JSON file; throws a descriptive error on non-2xx. */
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${url}`);
  return res.json();
}

/**
 * Load all static data for a trip.
 *
 * @param {string} tripId      e.g. "izland-es-eszak-europa"
 * @param {string} [dataRoot]  URL prefix, defaults to "/data/trips"
 * @returns {Promise<{ trip: object, pois: object[], route: object }>}
 */
export async function loadTrip(tripId, dataRoot = DEFAULT_DATA_ROOT) {
  const base = `${dataRoot}/${tripId}`;
  const [trip, pois, route] = await Promise.all([
    fetchJson(`${base}/trip.json`),
    fetchJson(`${base}/pois.json`),
    fetchJson(`${base}/route.json`),
  ]);
  return { trip, pois, route };
}
