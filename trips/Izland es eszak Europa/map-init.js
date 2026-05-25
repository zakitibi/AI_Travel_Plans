/**
 * map-init.js — Izland és Észak-Európa
 *
 * Lazy-initialises the Leaflet map on first "🗺 Térkép" tab activation.
 * Data is loaded exclusively from static JSON files:
 *   /data/trips/izland-es-eszak-europa/trip.json
 *   /data/trips/izland-es-eszak-europa/pois.json
 *   /data/trips/izland-es-eszak-europa/route.json
 *
 * NO runtime calls to Google Apps Script.
 * To update map data: regenerate JSON files and commit → push → CDN serves them.
 */

import { TravelMap } from "../../engine/TravelMap.js";

const TRIP_ID = "izland-es-eszak-europa";

// Resolve data root relative to THIS module file so the path is correct
// on any host — localhost, GitHub Pages (/AI_Travel_Plans/), Netlify, etc.
// import.meta.url = ".../trips/Izland es eszak Europa/map-init.js"
// ../../data/trips  → ".../data/trips"  ✓
const DATA_ROOT = new URL("../../data/trips", import.meta.url).href;

/** @type {TravelMap|null} */
let travelMap   = null;
let initialized = false;

/**
 * Create and load the TravelMap (runs only once).
 */
async function initMapOnce() {
  if (initialized) return;
  initialized = true;

  travelMap = new TravelMap("trip-map", {
    groupBy:          "stage",
    dataRoot:         DATA_ROOT,
    defaultZoom:      4,
    defaultCenter:    [60, 5],    // centred on Scandinavia + Iceland
    cluster:          false,      // set true for trips with 100+ POIs
    maxClusterRadius: 60,
  });

  await travelMap.load(TRIP_ID);
  // Store Leaflet instance so the global toggle listener can invalidateSize
  window._leafletMaps = window._leafletMaps || {};
  window._leafletMaps["trip-map"] = travelMap._map;
}

/**
 * Intercept window.activateTab so we can init the map on first
 * "terkep" tab click. The main index.html exposes this function
 * synchronously (non-module script), so it's always available here.
 */
function hookTabSystem() {
  const original = window.activateTab;

  window.activateTab = function (tabId) {
    if (typeof original === "function") original.call(this, tabId);

    if (tabId === "terkep") {
      // rAF ensures the container has non-zero dimensions before Leaflet init
      requestAnimationFrame(() => initMapOnce());
    }
  };
}

// Minimal public API for optional programmatic control from the page
window.travelMapAPI = {
  getInstance: () => travelMap,
  focusById:  (id)        => travelMap?.focusById(id),
  focusByDay: (day, name) => travelMap?.focusByDay(day, name),
  fitAll:     ()          => travelMap?.fitAll(),
};

hookTabSystem();
