/**
 * overview-map-init.js — Áttekintés oldal interaktív térképe
 *
 * Third Leaflet map: placed on the default "Áttekintés" tab,
 * directly below the 📅 Napi idővonal section.
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
    poi.day   ? `${poi.day}. nap` : "",
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
        label:    `${e.day}. nap — ${e.hotel || e.sight || e.any || "–"}`,
        dotColor: phase?.dotColor || "#64748b",
      };
    });
}

// ── Filter control ────────────────────────────────────────────────────────────
function buildFilterControl(L, leafMap, pois, markerList) {
  const dayItems = buildDayItems(pois);

  const state = {
    phases: new Set(PHASES.map(p => p.id)),
    types:  new Set(TYPES.map(t => t.id)),
    days:   new Set(dayItems.map(d => d.id)),
  };

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

      const span = document.createElement("span");
      span.className = "dm-filter-label";

      if (item.dotColor) {
        const dot = document.createElement("span");
        dot.className = "dm-dot";
        dot.style.background = item.dotColor;
        span.appendChild(dot);
      }

      // For phases, show sub-label (date range) in muted text
      const textNode = document.createTextNode(item.label);
      span.appendChild(textNode);
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

  const FilterControl = L.Control.extend({
    options: { position: "topright" },

    onAdd(_map) {
      const wrapper = L.DomUtil.create("div", "dm-filter-wrapper");
      L.DomEvent.disableClickPropagation(wrapper);
      L.DomEvent.disableScrollPropagation(wrapper);

      const toggle = L.DomUtil.create("button", "dm-filter-toggle", wrapper);
      toggle.type = "button";
      toggle.innerHTML = "⚙ Szűrők";
      toggle.title = "Szűrőpanel megnyitása / bezárása";

      const panel = L.DomUtil.create("div", "dm-filter-panel", wrapper);
      panel.style.display = "none";

      // Fázisok section — items include sub label (date range)
      const phaseItems = PHASES.map(p => ({ ...p }));
      panel.appendChild(makeSection("Fázisok", phaseItems, "phases"));

      const hr1 = document.createElement("hr");
      hr1.className = "dm-filter-divider";
      panel.appendChild(hr1);

      panel.appendChild(makeSection("Típusok", TYPES.map(t => ({ ...t })), "types"));

      const hr2 = document.createElement("hr");
      hr2.className = "dm-filter-divider";
      panel.appendChild(hr2);

      panel.appendChild(makeSection("Napok", dayItems, "days"));

      toggle.addEventListener("click", () => {
        const open = panel.style.display !== "block";
        panel.style.display = open ? "block" : "none";
        toggle.classList.toggle("dm-filter-toggle-active", open);
      });

      return wrapper;
    },
  });

  new FilterControl().addTo(leafMap);

  // Return public API for programmatic control
  return {
    showPhase(id) {
      state.phases.clear();
      state.phases.add(id);
      applyFilter();
    },
    showAll() {
      PHASES.forEach(p => state.phases.add(p.id));
      TYPES.forEach(t => state.types.add(t.id));
      dayItems.forEach(d => state.days.add(d.id));
      applyFilter();
    },
  };
}

// ── Main init ─────────────────────────────────────────────────────────────────
let initialized = false;
let _mapApi = null;

async function initOverviewMap() {
  if (initialized) return;
  initialized = true;

  const L = window.L;
  if (!L) { console.error("[OverviewMap] Leaflet not found"); return; }

  const container = document.getElementById("overview-map");
  if (!container) return;

  const overlay = container.closest(".travel-map-wrap")?.querySelector(".tm-overlay");
  if (overlay) overlay.classList.remove("tm-hidden");

  try {
    const { pois, route } = await loadTrip(TRIP_ID, DATA_ROOT);

    const map = L.map("overview-map", {
      zoomControl:        true,
      attributionControl: true,
      preferCanvas:       true,
    }).setView([60, 5], 4);

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

    _mapApi = buildFilterControl(L, map, pois, markerList);

    const coords = pois.filter(p => p.lat != null).map(p => [p.lat, p.lng]);
    if (coords.length) {
      map.fitBounds(L.latLngBounds(coords), { padding: [40, 40] });
    }

    if (overlay) overlay.classList.add("tm-hidden");
  } catch (err) {
    console.error("[OverviewMap] Failed:", err);
    if (overlay) {
      overlay.innerHTML = `<div class="tm-error-msg">Nem sikerült betölteni az adatokat.<br><small>${err.message}</small></div>`;
      overlay.classList.remove("tm-hidden");
    }
  }
}

// ── Public API ────────────────────────────────────────────────────────────────
window.overviewMapAPI = {
  focusPhase: (id) => _mapApi?.showPhase(id),
  showAll:    ()   => _mapApi?.showAll(),
};

// ── Bootstrap: fire on first rAF after module load ────────────────────────────
// Overview is the default tab → always visible on load.
// rAF ensures the container has a layout before Leaflet initialises.
requestAnimationFrame(() => initOverviewMap());
