/**
 * overview-map-init.js — Áttekintés oldal interaktív térképe
 *
 * Shared overview-style Leaflet map:
 *   - overview tab: default "Áttekintés" map
 *   - dedicated "Térkép" tab: same renderer, same filters, same data logic
 *
 * Data source: same pre-generated static JSON files as the other maps
 *   /data/trips/izland-es-eszak-europa/pois.json   — 39 POI
 *   /data/trips/izland-es-eszak-europa/route.json  — 8 features (OSRM + kompok + repülők)
 *   /data/trips/izland-es-eszak-europa/trip.json   — metadata
 *
 * Init strategy: ES modules are deferred → DOM is ready on execution.
 * A single requestAnimationFrame() ensures the map container has layout
 * dimensions before Leaflet initialises.  No tab-hook needed because the
 * overview tab is always active on first load.
 *
 * Filter panel (⚙ Szűrők — topright):
 *   ◆ Fázisok  — Baltikum · Izland · Hazaút  (mirrors timeline phase groups)
 *   ◆ Típusok  — szállás · látnivaló · áthajtó · komp · repülő
 *   ◆ Napok    — per-day checkboxes, scrollable, stage-coloured dot
 */

import { loadTrip } from "../../engine/TripLoader.js";

const TRIP_ID  = "izland-es-eszak-europa";
const DATA_ROOT = new URL("../../data/trips", import.meta.url).href;

// ── Fázisok (matches the three timeline phaseGroup sections) ─────────────────
const PHASES = [
  { id: "baltikum", label: "Baltikum",  sub: "júl. 10–18.",  dotColor: "#8a4f24" },
  { id: "izland",   label: "Izland",    sub: "júl. 18–26.",  dotColor: "#1f5a3e" },
  { id: "hazaut",   label: "Hazaút",    sub: "júl. 26 – aug. 6.", dotColor: "#6a4ca3" },
];

// ── Típusok ───────────────────────────────────────────────────────────────────
const TYPES = [
  { id: "hotel",  label: "Szállás",    dotColor: "#1f5a3e" },
  { id: "sight",  label: "Látnivaló",  dotColor: "#dc2626" },
  { id: "drive",  label: "Áthajtó",    dotColor: "#d97706" },
  { id: "ferry",  label: "Komp",       dotColor: "#1d4ed8" },
  { id: "flight", label: "Repülő",     dotColor: "#7c3aed" },
];

// ── Type → icon (mirrors MarkerRenderer.js) ───────────────────────────────────
const TYPE_CONF = {
  hotel:   { emoji: "🏨", cls: "tm-marker-hotel"   },
  drive:   { emoji: "🚗", cls: "tm-marker-drive"   },
  ferry:   { emoji: "🚢", cls: "tm-marker-ferry"   },
  flight:  { emoji: "✈",  cls: "tm-marker-flight"  },
  sight:   { emoji: "📍", cls: "tm-marker-sight"   },
};

function typeConf(type) {
  return TYPE_CONF[(type || "").toLowerCase()] || { emoji: "📌", cls: "tm-marker-default" };
}

function formatMmDd(dateStr) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr || "");
  return match ? `${match[2]}.${match[3]}` : "";
}

function displayDayLabel({ day, date }) {
  const mmdd = formatMmDd(date);
  if (mmdd) return mmdd;
  return day != null ? `${day}. nap` : "";
}

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

function buildPopupHtml(poi) {
  const { emoji } = typeConf(poi.type);
  const subtitle = [
    poi.date  ? poi.date.replace(/-/g, ".") : "",
    poi.country || "",
  ].filter(Boolean).join(" · ");
  const phase = PHASES.find(p => p.id === poi.stage);
  const stageBadge = phase
    ? `<span class="tm-popup-szakasz">${phase.label}</span>`
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

// ── Routes (inline mirror of RouteRenderer.js) ────────────────────────────────
function renderRoutes(L, map, route) {
  L.geoJSON(route, {
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
function buildDayItems(pois) {
  const map = {};
  for (const poi of pois) {
    if (poi.day == null) continue;
    if (!map[poi.day]) {
      map[poi.day] = { day: poi.day, stage: poi.stage, hotel: null, sight: null, any: null };
    }
    const e = map[poi.day];
    if (!e.date && poi.date) e.date = poi.date;
    if (poi.type === "hotel" && !e.hotel) e.hotel = poi.name;
    if (poi.type === "sight" && !e.sight) e.sight = poi.name;
    if (!e.any) e.any = poi.name;
  }
  return Object.values(map)
    .sort((a, b) => a.day - b.day)
    .map(e => {
      const phase = PHASES.find(p => p.id === e.stage);
      return {
        id:       e.day,
        label:    `${displayDayLabel(e)} — ${e.hotel || e.sight || e.any || "–"}`,
        dotColor: phase?.dotColor || "#64748b",
      };
    });
}

// ── Filter sidebar ────────────────────────────────────────────────────────────
/**
 * Render the filter panel into a regular DOM sidebar element.
 * No Leaflet control — sits outside the map so iOS touch-scroll works.
 *
 * @returns {{ showPhase(id), showAll() }}  public API for ontoggle hook
 */
function buildFilterSidebar(sidebarEl, pois, markerList, leafMap) {
  const dayItems = buildDayItems(pois);

  const state = {
    phases: new Set(PHASES.map(p => p.id)),
    types:  new Set(TYPES.map(t => t.id)),
    days:   new Set(dayItems.map(d => d.id)),
  };

  // Track all phase checkboxes so showPhase() can sync them
  const phaseCbs = [];

  function applyFilter() {
    for (const { marker, poi } of markerList) {
      const dayOk   = poi.day == null || state.days.has(poi.day);
      const visible = state.phases.has(poi.stage)
                   && state.types.has(poi.type)
                   && dayOk;
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
      if (stateKey === "phases") phaseCbs.push({ cb, id: item.id });

      const span = document.createElement("span");
      span.className = "dm-filter-label";

      if (item.dotColor) {
        const dot = document.createElement("span");
        dot.className = "dm-dot";
        dot.style.background = item.dotColor;
        span.appendChild(dot);
      }

      span.appendChild(document.createTextNode(item.label));

      if (item.sub) {
        const sub = document.createElement("span");
        sub.className = "dm-filter-sub";
        sub.textContent = item.sub;
        span.appendChild(sub);
      }

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

  sidebarEl.appendChild(makeSection("Fázisok", PHASES.map(p => ({ ...p })), "phases"));

  const hr1 = document.createElement("hr");
  hr1.className = "dm-filter-divider";
  sidebarEl.appendChild(hr1);

  sidebarEl.appendChild(makeSection("Típusok", TYPES.map(t => ({ ...t })), "types"));

  const hr2 = document.createElement("hr");
  hr2.className = "dm-filter-divider";
  sidebarEl.appendChild(hr2);

  sidebarEl.appendChild(makeSection("Napok", dayItems, "days"));

  // Public API
  return {
    showPhase(id) {
      state.phases.clear();
      state.phases.add(id);
      phaseCbs.forEach(({ cb, id: cbId }) => { cb.checked = (cbId === id); });
      applyFilter();
    },
    showAll() {
      PHASES.forEach(p => state.phases.add(p.id));
      TYPES.forEach(t => state.types.add(t.id));
      dayItems.forEach(d => state.days.add(d.id));
      phaseCbs.forEach(({ cb }) => { cb.checked = true; });
      applyFilter();
    },
  };
}

// ── Main init ─────────────────────────────────────────────────────────────────
const MAP_TARGETS = [
  {
    key: "overview-map",
    containerId: "overview-map",
    sidebarId: "overview-map-filter",
    autoInit: true,
    tabId: "overview",
  },
  {
    key: "trip-map",
    containerId: "trip-map",
    sidebarId: "trip-map-filter",
    autoInit: false,
    tabId: "terkep",
  },
];

const initialized = {};
const mapApis = {};

async function initOverviewStyleMap(target) {
  if (initialized[target.key]) return;
  initialized[target.key] = true;

  const L = window.L;
  if (!L) { console.error("[OverviewMap] Leaflet not found"); return; }

  const container = document.getElementById(target.containerId);
  if (!container) return;

  const overlay = container.closest(".travel-map-wrap")?.querySelector(".tm-overlay");
  if (overlay) overlay.classList.remove("tm-hidden");

  try {
    const { pois, route } = await loadTrip(TRIP_ID, DATA_ROOT);

    const map = L.map(target.containerId, {
      zoomControl:        true,
      attributionControl: true,
      preferCanvas:       true,
    }).setView([60, 5], 4);
    window._leafletMaps = window._leafletMaps || {};
    window._leafletMaps[target.key] = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    renderRoutes(L, map, route);

    const markerList = [];
    for (const poi of pois) {
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

    // Filter sidebar (outside map — touch-scroll friendly on iOS)
    const sidebar = document.getElementById(target.sidebarId);
    if (sidebar) mapApis[target.key] = buildFilterSidebar(sidebar, pois, markerList, map);

    const coords = pois.filter(p => p.lat != null).map(p => [p.lat, p.lng]);
    if (coords.length) {
      map.fitBounds(L.latLngBounds(coords), { padding: [40, 40] });
    }

    if (overlay) overlay.classList.add("tm-hidden");
  } catch (err) {
    console.error(`[OverviewMap:${target.key}] Failed:`, err);
    if (overlay) {
      overlay.innerHTML = `<div class="tm-error-msg">Nem sikerült betölteni az adatokat.<br><small>${err.message}</small></div>`;
      overlay.classList.remove("tm-hidden");
    }
  }
}

// ── Public API ────────────────────────────────────────────────────────────────
window.overviewMapAPI = {
  focusPhase: (id) => mapApis["overview-map"]?.showPhase(id),
  showAll:    ()   => mapApis["overview-map"]?.showAll(),
};

function hookTabSystem() {
  const original = window.activateTab;
  window.activateTab = function (tabId) {
    if (typeof original === "function") original.call(this, tabId);
    const target = MAP_TARGETS.find((item) => item.tabId === tabId && !item.autoInit);
    if (target) {
      requestAnimationFrame(() => initOverviewStyleMap(target));
    }
  };
}

hookTabSystem();

for (const target of MAP_TARGETS) {
  if (target.autoInit || document.querySelector(`.view.is-active[data-view="${target.tabId}"]`)) {
    requestAnimationFrame(() => initOverviewStyleMap(target));
  }
}
