/*
 * Service worker az AI_Travel_Plans oldalhoz.
 * Cél: iPhone-on (és máshol) az oldal a gyorsítótárból töltsön AZONNAL, és
 * offline (adat nélkül) is működjön — így nem tölti újra állandóan a hálózatról.
 *
 * Stratégia:
 *  - fő tartalom (HTML navigáció + trip-data.js): network-first
 *    (ha van net, MINDIG a friss verzió jön azonnal; csak offline esik vissza a
 *     cache-re — így deploy után nem kell kétszer újratölteni)
 *  - többi saját fájl (CSS/egyéb JS/JSON/ikon): stale-while-revalidate
 *    (a cache-ből azonnal megjelenik, közben a háttérben frissül)
 *  - külső fájlok (Leaflet CDN, térkép-csempék, útvonal-API): cache-first
 *    (első használat után offline is megvannak, és nem esznek fölöslegesen adatot)
 *
 * A cache verzióját (CACHE) érdemes emelni, amikor nagy változás van és biztosan
 * friss tartalmat akarunk kényszeríteni.
 */
const CACHE = "ai-travel-v10";

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
    // A fő tartalom mindig friss legyen, ha van net: HTML-navigáció és a trip-data.js.
    const isMainContent = req.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith("/trip-data.js");

    if (isMainContent) {
      // Network-first: friss verzió azonnal, offline esetén a cache-ből.
      event.respondWith(
        (async () => {
          const cache = await caches.open(CACHE);
          try {
            const net = await fetch(req);
            if (net && net.ok) cache.put(req, net.clone());
            return net;
          } catch (e) {
            const cached = await cache.match(req);
            if (cached) return cached;
            if (req.mode === "navigate") {
              const fallback = await cache.match("trips/Izland%20es%20eszak%20Europa/index.html");
              if (fallback) return fallback;
            }
            return new Response("Offline", { status: 503, statusText: "Offline" });
          }
        })()
      );
      return;
    }

    // Egyéb saját fájlok (CSS, ikon, egyéb JS/JSON): stale-while-revalidate
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
