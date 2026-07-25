/*
 * Service worker az AI_Travel_Plans oldalhoz.
 * Cél: iPhone-on (és máshol) az oldal a gyorsítótárból töltsön AZONNAL, és
 * offline (adat nélkül) is működjön — így nem tölti újra állandóan a hálózatról.
 *
 * Stratégia (minden saját fájl: HTML, trip-data.js, CSS, ikon, JSON):
 *  - stale-while-revalidate: az oldal AZONNAL a gyorsítótárból jön (nincs
 *    hálózati várakozás, mobilneten sincs „újratöltés"-érzés, és offline is
 *    működik), közben a háttérben csendben frissül a KÖVETKEZŐ megnyitásra.
 *  - külső fájlok (Leaflet CDN, térkép-csempék, útvonal-API): cache-first
 *    (első használat után offline is megvannak, és nem esznek fölöslegesen adatot)
 *
 * Ha AZONNAL friss tartalom kell (deploy után), az oldal alján a „🔄 Tartalom
 * frissítése a netről" gomb kitörli a cache-t és letölti a legfrissebb tervet.
 *
 * A cache verzióját (CACHE) minden érdemi tartalmi változásnál emeljük — így a
 * régi cache aktiváláskor törlődik, és a háttérfrissítés az új verziót hozza.
 */
const CACHE = "ai-travel-v17";

// A gyökérhez (a service worker helyéhez) képest relatív útvonalak,
// így a GitHub Pages `/AI_Travel_Plans/` alútvonalon és localhoston is jó.
const CORE_ASSETS = [
  "trips/Izland%20es%20eszak%20Europa/index.html",
  "trips/Izland%20es%20eszak%20Europa/styles.css",
  "trips/Izland%20es%20eszak%20Europa/trip-data.js",
  "trips/Izland%20es%20eszak%20Europa/map-init.js",
  "trips/Izland%20es%20eszak%20Europa/detail-map-init.js",
  "trips/Izland%20es%20eszak%20Europa/section-map-init.js",
  "trips/Izland%20es%20eszak%20Europa/map-data.json",
  "trips/Izland%20es%20eszak%20Europa/manifest.webmanifest",
  "trips/Izland%20es%20eszak%20Europa/apple-touch-icon.png",
  "trips/Izland%20es%20eszak%20Europa/icons/icon-192.png",
  "trips/Izland%20es%20eszak%20Europa/icons/icon-512.png",
  "engine/map.css",
  "data/trips/izland-es-eszak-europa/route.json",
  "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css",
  "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js",
  "https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.5.3/dist/MarkerCluster.css",
  "https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css",
  "https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // allSettled: ha egy-egy fájl nem tölthető le, az install akkor se bukjon el
      Promise.allSettled(CORE_ASSETS.map((url) => cache.add(url)))
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    // Minden saját fájl (HTML, trip-data.js, CSS, ikon, JSON): stale-while-revalidate.
    // A cache-ből AZONNAL válaszolunk (nincs hálózati várakozás / „újratöltés"),
    // közben a háttérben frissítjük a következő megnyitáshoz.
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        const cached = await cache.match(req);
        const network = fetch(req)
          .then((res) => {
            if (res && res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => null);

        if (cached) {
          event.waitUntil(network); // háttérfrissítés a következő megnyitáshoz
          return cached;
        }
        const net = await network;
        if (net) return net;
        // Első betöltés offline, nincs cache: navigációnál a fő oldalt adjuk vissza.
        if (req.mode === "navigate") {
          const fallback = await cache.match("trips/Izland%20es%20eszak%20Europa/index.html");
          if (fallback) return fallback;
        }
        return new Response("Offline", { status: 503, statusText: "Offline" });
      })()
    );
    return;
  }

  // Külső fájlok (CDN, térkép-csempék, útvonal-API): cache-first
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      if (cached) return cached;
      try {
        const res = await fetch(req);
        // ok VAGY opaque (no-cors csempék) választ is elteszünk offline-ra
        if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
        return res;
      } catch (e) {
        return cached || new Response("", { status: 504, statusText: "Offline" });
      }
    })()
  );
});
