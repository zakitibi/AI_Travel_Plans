/*
 * Service worker az AI_Travel_Plans oldalhoz.
 * Cél: iPhone-on (és máshol) az oldal a gyorsítótárból töltsön AZONNAL, offline
 * (adat nélkül) is működjön, ÉS mégis mindig a legfrissebb tervet mutassa —
 * anélkül, hogy kézzel kellene cache-verziót emelni vagy a „frissítés" gombot
 * nyomkodni.
 *
 * Stratégia (minden saját fájl: HTML, trip-data.js, CSS, ikon, JSON):
 *  - stale-while-revalidate: az oldal AZONNAL a gyorsítótárból jön (nincs
 *    hálózati várakozás, mobilneten sincs „újratöltés"-érzés, offline is megy),
 *    közben a háttérben csendben letölti a legfrissebb változatot.
 *  - ÖN-GYÓGYÍTÁS: ha a háttérfrissítés ÚJABB tartalmat talál (a tartalmi
 *    fájlok — index.html, trip-data.js, styles.css — ETag/Last-Modified
 *    fejléce megváltozott), a service worker szól az oldalnak (CONTENT_UPDATED),
 *    ami CSENDBEN, egyszer újratölt. Így magától mindig a friss terv látszik,
 *    és nem kell a CACHE verziót emelgetni ahhoz, hogy ne „romoljon el".
 *  - külső fájlok (Leaflet CDN, térkép-csempék, útvonal-API): cache-first
 *    (első használat után offline is megvannak, és nem esznek fölöslegesen adatot).
 *
 * A CACHE verziót csak strukturális váltásnál (pl. új fájllista) kell emelni —
 * a tartalmi frissülést az ETag-alapú öngyógyítás intézi.
 */
const CACHE = "ai-travel-v22";

// A tartalmi fájlok, amelyek megváltozása „új terv" — ezeknél kérünk csendes
// újratöltést, ha a háttérfrissítés újabb verziót hoz. (Az ikonok, JSON-ok
// frissülnek, de nem indítanak újratöltést.)
function isContentDoc(url) {
  const p = url.pathname;
  return (
    p.endsWith("/") ||
    p.endsWith("index.html") ||
    p.endsWith("trip-data.js") ||
    p.endsWith("styles.css")
  );
}

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

// A válasz „ujjlenyomata" a friss/régi összevetéshez: ETag, majd Last-Modified.
// (GitHub Pages mindkettőt küldi.) Ha egyik sincs, null — akkor nem döntünk.
function responseSig(res) {
  if (!res || !res.headers) return null;
  return res.headers.get("ETag") || res.headers.get("Last-Modified") || null;
}

async function notifyContentUpdated(path) {
  const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  clients.forEach((c) => c.postMessage({ type: "CONTENT_UPDATED", path }));
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    // Minden saját fájl (HTML, trip-data.js, CSS, ikon, JSON): stale-while-revalidate.
    // A cache-ből AZONNAL válaszolunk (nincs hálózati várakozás / „újratöltés"),
    // közben a háttérben frissítünk. Ha a tartalmi fájl ténylegesen változott,
    // csendes újratöltésre szólunk (öngyógyítás).
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        const cached = await cache.match(req);
        const network = fetch(req)
          .then(async (res) => {
            if (res && res.ok) {
              const oldSig = responseSig(cached);
              const newSig = responseSig(res);
              await cache.put(req, res.clone());
              // Csak akkor jelzünk, ha VOLT régi verzió, tartalmi fájl, és a
              // fejléc-ujjlenyomat ténylegesen eltér — így nincs fölös újratöltés.
              if (cached && isContentDoc(url) && oldSig && newSig && oldSig !== newSig) {
                notifyContentUpdated(url.pathname);
              }
            }
            return res;
          })
          .catch(() => null);

        if (cached) {
          event.waitUntil(network); // háttérfrissítés + esetleges öngyógyító jelzés
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

// A „kézi frissítés" gomb ezt küldheti, ha várakozó SW-t kell azonnal aktiválni.
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
