/**
 * map-init.js — Izland és Észak-Európa
 * Wires up the TravelMap engine for this trip.
 *
 * Lazy-initialised: map only loads when the "terkep" tab is first activated,
 * so Leaflet never tries to render into a hidden container.
 */

import { TravelMap } from "../../engine/TravelMap.js";

/** Google Apps Script web-app URL (published as "Anyone, even anonymous"). */
const API_URL =
  "https://script.google.com/macros/s/AKfycbx9FuIYukiZr-HZaHTWZgP7JLyqd6mvJcY_44cv3VBxH1DdxFHvozyUmygOSjVsmBaA/exec?trip=EszakEuropa";

/** Local JSON fallback for offline / CORS-blocked development. */
const FALLBACK_URL = "./map-data.json";

/** @type {TravelMap|null} */
let travelMap = null;
let initialized = false;

/**
 * Create a TravelMap instance and load data.
 * Safe to call multiple times — only runs on the first call.
 */
async function initMapOnce() {
  if (initialized) return;
  initialized = true;

  travelMap = new TravelMap("trip-map", {
    groupBy:       "szakasz",
    fallbackUrl:   FALLBACK_URL,
    defaultZoom:   5,
    defaultCenter: [62, 18],   // centred on Scandinavia / Iceland region
  });

  await travelMap.load(API_URL);
}

/**
 * Hook the global tab-switcher so initMapOnce() runs on first "terkep" click.
 * The main index.html exposes `window.activateTab(id)` before this module runs
 * (non-module scripts execute first), so the hook is always available.
 */
function hookTabSystem() {
  const originalActivate = window.activateTab;

  window.activateTab = function (tabId) {
    // Call the real tab switcher first so the map container becomes visible.
    if (typeof originalActivate === "function") {
      originalActivate.call(this, tabId);
    }

    if (tabId === "terkep") {
      // Small rAF delay so the container is rendered and has non-zero size.
      requestAnimationFrame(() => initMapOnce());
    }
  };
}

// Expose a minimal public API on window for optional use from the page.
window.travelMapAPI = {
  /** @returns {TravelMap|null} */
  getInstance: () => travelMap,

  /**
   * Pan to and open the popup for a specific stop.
   * @param {string|number} nap
   * @param {string} cel
   */
  focus: (nap, cel) => travelMap && travelMap.focusStop(nap, cel),

  /** Zoom to fit all markers. */
  fitAll: () => travelMap && travelMap.fitAll(),
};

// Initialise the hook immediately (this module is deferred via type="module").
hookTabSystem();
