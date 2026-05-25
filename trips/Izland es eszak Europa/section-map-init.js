/**
 * section-map-init.js — Per-szakasz interaktív térkép
 *
 * Minden részletes szakasz-oldal (Baltikum, Izland, Hazaút) aljára
 * kerül egy-egy Leaflet-térkép a szakasz összes POI-jával.
 *
 * Data source: ugyanaz a statikus JSON, mint a többi térkép
 *   /data/trips/izland-es-eszak-europa/pois.json
 *   /data/trips/izland-es-eszak-europa/route.json
 *
 * Minden térkép:
 *   ◆ csak az adott szakasz POI-jait és útvonal-szegmenseit mutatja
 *   ◆ Típusok   — szállás · látvaló · áthajtó · komp · repülő  (csak a ténylegesen jelen lévők)
 *   ◆ Napok     — per-nap jelölők, görgethetők, fázis-színű pont
 *   ◆ lusta inicializálás: csak az első lapkattintásra töltődik be
 *
 * Container ID-k: baltikum-map  / izland-map  / hazaut-map
 * Sidebar  ID-k:  baltikum-map-filter / izland-map-filter / hazaut-map-filter
 */

import { loadTrip } from "../../engine/TripLoader.js";

const TRIP_ID   = "izland-es-eszak-europa";
const DATA_ROOT = new URL("../../data/trips", import.meta.url).href;

// ── Trip data cache ───────────────────────────────────────────────────────────
let _tripPromise = null;
function getTripData() {
  if (!_tripPromise) _tripPromise = loadTrip(TRIP_ID, DATA_ROOT);
  return _tripPromise;
}

// ── Szakasz config ────────────────────────────────────────────────────────────
const SECTION_CONF = {
  baltikum: { dotColor: "#8a4f24", label: "Baltikum" },
  izland:   { dotColor: "#1f5a3e", label: "Izland"   },
  hazaut:   { dotColor: "#6a4ca3", label: "Hazaút"   },
};

// ── Type metadata ─────────────────────────────────────────────────────────────
const ALL_TYPES = [
  { id: "hotel",  label: "Szállás",   dotColor: "#1f5a3e" },
  { id: "sight",  label: "Látnivaló", dotColor: "#dc2626" },
  { id: "drive",  label: "Áthajtó",   dotColor: "#d97706" },
  { id: "ferry",  label: "Komp",      dotColor: "#1d4ed8" },
  { id: "flight", label: "Repülő",    dotColor: "#7c3aed" },
];

// ── Type → icon ───────────────────────────────────────────────────────────────
const TYPE_CONF = {
  hotel:  { emoji: "🏨", cls: "tm-marker-hotel"  },
  drive:  { emoji: "🚗", cls: "tm-marker-drive"  },
  ferry:  { emoji: "🚢", cls: "tm-marker-ferry"  },
  flight: { emoji: "✈",  cls: "tm-marker-flight" },
  sight:  { emoji: "📍", cls: "tm-marker-sight"  },
};

function typeConf(type) {
  return TYPE_CONF[(type || "").toLowerCase()] || { emoji: "📌", cls: "tm-marker-default" };
}

// ── Icon factory ──────────────────────────────────────────────────────────────
function createIcon(L, poi) {
  const { emoji, cls } = typeConf(poi.type);
  return L.divIcon({
    className:   "",
    html:        `<div class="tm-marker ${cls}"><span class="tm-marker-inner">${emoji}</span></div>`,
    iconSize:    [30, 30],
    iconAnchor:  [15, 30],
    popupAnchor: [0, -33],
  });
}

// ── Popup builder ─────────────────────────────────────────────────────────────
function buildPopupHtml(poi) {
  const { emoji } = typeConf(poi.type);
  const subtitle = [
    poi.day   ? `${poi.day}. nap` : "",
    poi.date  ? poi.date.replace(/-/g, ".") : "",
    poi.country || "",
  ].filter(Boolean).join(" · ");
  const sc = SECTION_CONF[poi.stage];
  const stageBadge = sc
    ? `<span class="tm-popup-szakasz">${sc.label}</span>`
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
      ${poi.popup?.description ? `<div class="tm-popup-desc">${poi.popup.description}</div>` : ""}
      ${noteHtml}
      <div class="tm-popup-foot">${stageBadge}</div>
    </div>
  `;
}

// ── Route renderer ────────────────────────────────────────────────────────────
function renderRoutes(L, map, route, stageId) {
  const filtered = {
    type: "FeatureCollection",
    features: (route.features || []).filter(
      f => (f.properties?.stage || "") === stageId
    ),
  };
  L.geoJSON(filtered, {
    style(feature) {
      const p = feature.properties || {};
      const t = p.type || "drive";
      return {
        color:     p.color   || "#64748b",
        weight:    p.weight  || 3,
        opacity:   p.opacity || 0.75,
        lineJoin:  "round",
        lineCap:   "round",
        dashArray: t === "flight" ? "4 10" : t === "ferry" ? "7 9" : null,
      };
    },
  }).addTo(map);
}

// ── Day items ─────────────────────────────────────────────────────────────────
function buildDayItems(pois, stageId) {
  const byDay = {};
  for (const poi of pois) {
    if (poi.day == null) continue;
    if (!byDay[poi.day]) {
      byDay[poi.day] = { day: poi.day, hotel: null, sight: null, any: null };
    }
    const e = byDay[poi.day];
    if (poi.type === "hotel" && !e.hotel) e.hotel = poi.name;
    if (poi.type === "sight" && !e.sight) e.sight = poi.name;
    if (!e.any) e.any = poi.name;
  }
  const sc = SECTION_CONF[stageId];
  return Object.values(byDay)
    .sort((a, b) => a.day - b.day)
    .map(e => ({
      id:       e.day,
      label:    `${e.day}. nap — ${e.hotel || e.sight || e.any || "–"}`,
      dotColor: sc?.dotColor || "#64748b",
    }));
}

// ── Filter sidebar ────────────────────────────────────────────────────────────
function buildFilterSidebar(sidebarEl, pois, markerList, leafMap, stageId) {
  const dayItems = buildDayItems(pois, stageId);

  // Only show types that have at least one POI in this stage
  const presentTypes = new Set(pois.map(p => p.type));
  const types = ALL_TYPES.filter(t => presentTypes.has(t.id));

  const state = {
    types: new Set(types.map(t => t.id)),
    days:  new Set(dayItems.map(d => d.id)),
  };

  function applyFilter() {
    for (const { marker, poi } of markerList) {
      const dayOk   = poi.day == null || state.days.has(poi.day);
      const visible = state.types.has(poi.type) && dayOk;
      if (visible) { if (!leafMap.hasLayer(marker)) leafMap.addLayer(marker); }
      else         { if (leafMap.hasLayer(marker))  leafMap.removeLayer(marker); }
    }
  }

  function makeSection(title, items, stateKey) {
    const sec = document.createElement("div");
    sec.className = "dm-filter-section";

    const head = document.createElement("div");
    head.className = "dm-filter-section-head";

    const titleEl = document.createElement("strong");
    titleEl.textContent = title;

    const acts = document.createElement("span");
    acts.className = "dm-filter-actions";

    const allBtn  = document.createElement("button");
    allBtn.className = "dm-btn-all";
    allBtn.type = "button";
    allBtn.textContent = "Mind";

    const noneBtn = document.createElement("button");
    noneBtn.className = "dm-btn-none";
    noneBtn.type = "button";
    noneBtn.textContent = "Egyik sem";

    acts.append(allBtn, noneBtn);
    head.append(titleEl, acts);
    sec.appendChild(head);

    const body = document.createElement("div");
    body.className = "dm-filter-section-body";
    if (stateKey === "days") body.classList.add("dm-filter-scrollable");

    const cbs = [];

    for (const item of items) {
      const lbl = document.createElement("label");
      lbl.className = "dm-filter-row";

      const cb = document.createElement("input");
      cb.type    = "checkbox";
      cb.checked = state[stateKey].has(item.id);

      cb.addEventListener("change", () => {
        if (cb.checked) state[stateKey].add(item.id);
        else            state[stateKey].delete(item.id);
        applyFilter();
      });

      cbs.push({ cb, id: item.id });

      const span = document.createElement("span");
      span.className = "dm-filter-label";

      if (item.dotColor) {
        const dot = document.createElement("span");
        dot.className = "dm-dot";
        dot.style.background = item.dotColor;
        span.appendChild(dot);
      }

      span.appendChild(document.createTextNode(item.label));

      lbl.append(cb, span);
      body.appendChild(lbl);
    }

    allBtn.addEventListener("click", () => {
      items.forEach(item => state[stateKey].add(item.id));
      cbs.forEach(({ cb }) => { cb.checked = true; });
      applyFilter();
    });
    noneBtn.addEventListener("click", () => {
      state[stateKey].clear();
      cbs.forEach(({ cb }) => { cb.checked = false; });
      applyFilter();
    });

    sec.appendChild(body);
    return sec;
  }

  // Sticky header
  const header = document.createElement("div");
  header.className = "dm-sidebar-header";
  header.textContent = "Szűrők";
  sidebarEl.appendChild(header);

  sidebarEl.appendChild(makeSection("Típusok", types, "types"));

  const hr = document.createElement("hr");
  hr.className = "dm-filter-divider";
  sidebarEl.appendChild(hr);

  sidebarEl.appendChild(makeSection("Napok", dayItems, "days"));
}

// ── Per-section map init ──────────────────────────────────────────────────────
const initialized = {};

async function initSectionMap(stageId) {
  if (initialized[stageId]) return;
  initialized[stageId] = true;

  const L = window.L;
  if (!L) { console.error(`[SectionMap:${stageId}] Leaflet not found`); return; }

  const containerId = `${stageId}-map`;
  const container   = document.getElementById(containerId);
  if (!container) return;

  const overlay = container.closest(".travel-map-wrap")?.querySelector(".tm-overlay");
  if (overlay) overlay.classList.remove("tm-hidden");

  try {
    const { pois: allPois, route: allRoute } = await getTripData();

    // Filter to this stage only
    const pois = allPois.filter(p => p.stage === stageId && p.lat != null && p.lng != null);

    const map = L.map(containerId, {
      zoomControl:        true,
      attributionControl: true,
      preferCanvas:       true,
    }).setView([60, 15], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Routes for this stage
    renderRoutes(L, map, allRoute, stageId);

    // Markers
    const markerList = [];
    for (const poi of allPois.filter(p => p.stage === stageId)) {
      if (poi.lat == null || poi.lng == null) continue;
      const marker = L.marker([poi.lat, poi.lng], {
        icon: createIcon(L, poi),
        riseOnHover: true,
      });
      marker.bindPopup(() => buildPopupHtml(poi), {
        maxWidth:       320,
        autoPanPadding: [20, 20],
      });
      marker.addTo(map);
      markerList.push({ marker, poi });
    }

    // Filter sidebar (outside map)
    const sidebar = document.getElementById(`${stageId}-map-filter`);
    if (sidebar) buildFilterSidebar(sidebar, allPois.filter(p => p.stage === stageId), markerList, map, stageId);

    // Fit to stage bounds
    const coords = pois.map(p => [p.lat, p.lng]);
    if (coords.length) {
      map.fitBounds(L.latLngBounds(coords), { padding: [40, 40] });
    }

    if (overlay) overlay.classList.add("tm-hidden");
  } catch (err) {
    console.error(`[SectionMap:${stageId}] Failed:`, err);
    if (overlay) {
      overlay.innerHTML = `<div class="tm-error-msg">Nem sikerült betölteni az adatokat.<br><small>${err.message}</small></div>`;
      overlay.classList.remove("tm-hidden");
    }
  }
}

// ── Tab hook ──────────────────────────────────────────────────────────────────
(function hookTabSystem() {
  const original = window.activateTab;
  window.activateTab = function (tabId) {
    if (typeof original === "function") original.call(this, tabId);
    if (tabId === "baltikum" || tabId === "izland" || tabId === "hazaut") {
      requestAnimationFrame(() => initSectionMap(tabId));
    }
  };
})();
