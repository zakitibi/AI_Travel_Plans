/**
 * detail-map-init.js — Részletes napiterv-térkép
 *
 * Second Leaflet map on the "🗺 Térkép" tab.
 * Shows all 39 POIs from pois.json with a floating multi-dimension filter panel:
 *   ◆ Szakaszok  — baltikum / izland / hazaut
 *   ◆ Típusok    — hotel · sight · drive · ferry · flight
 *   ◆ Napok      — per-day toggles (only days with POIs shown)
 *
 * Lazy-initialised on first "terkep" tab click, same as map-init.js.
 * Hooks window.activateTab in the same chain pattern — works independently
 * of map-init.js execution order.
 */

import { loadTrip } from "../../engine/TripLoader.js";

const TRIP_ID  = "izland-es-eszak-europa";
const DATA_ROOT = new URL("../../data/trips", import.meta.url).href;

// ── Stage metadata ────────────────────────────────────────────────────────────
const STAGES = [
  { id: "baltikum", label: "Baltikum",  dotColor: "#8a4f24" },
  { id: "izland",   label: "Izland",    dotColor: "#1f5a3e" },
  { id: "hazaut",   label: "Hazaút",    dotColor: "#6a4ca3" },
];

// ── Type metadata ─────────────────────────────────────────────────────────────
const TYPES = [
  { id: "hotel",  label: "Szállás",    dotColor: "#1f5a3e" },
  { id: "sight",  label: "Látnivaló",  dotColor: "#dc2626" },
  { id: "drive",  label: "Áthajtó",    dotColor: "#d97706" },
  { id: "ferry",  label: "Komp",       dotColor: "#1d4ed8" },
  { id: "flight", label: "Repülő",     dotColor: "#7c3aed" },
];

// ── Type → icon config (mirrors MarkerRenderer.js) ───────────────────────────
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

// ── Popup builder (mirrors MarkerRenderer.js) ─────────────────────────────────
function buildPopupHtml(poi) {
  const { emoji } = typeConf(poi.type);
  const subtitle = [
    poi.day   ? `${poi.day}. nap` : "",
    poi.date  ? poi.date.replace(/-/g, ".") : "",
    poi.country || "",
  ].filter(Boolean).join(" · ");
  const stageBadge = poi.stage ? `<span class="tm-popup-szakasz">${poi.stage}</span>` : "";
  const noteHtml   = poi.popup?.note
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

// ── Route renderer (inline — mirrors RouteRenderer.js) ───────────────────────
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

// ── Filter control ────────────────────────────────────────────────────────────

/**
 * Build day items from pois: one entry per unique day, labelled with the
 * most prominent location of that day (hotel > sight > any).
 *
 * @param {object[]} pois
 * @returns {{ id: number, label: string, dotColor: string }[]}
 */
function buildDayItems(pois) {
  const map = {};
  for (const poi of pois) {
    if (poi.day == null) continue;
    if (!map[poi.day]) {
      map[poi.day] = { day: poi.day, stage: poi.stage, hotel: null, sight: null, any: null };
    }
    const e = map[poi.day];
    if (poi.type === "hotel"  && !e.hotel) e.hotel = poi.name;
    if (poi.type === "sight"  && !e.sight) e.sight = poi.name;
    if (!e.any) e.any = poi.name;
  }
  return Object.values(map)
    .sort((a, b) => a.day - b.day)
    .map(e => {
      const stageConf = STAGES.find(s => s.id === e.stage);
      const loc = e.hotel || e.sight || e.any || "–";
      return {
        id:       e.day,
        label:    `${e.day}. nap — ${loc}`,
        dotColor: stageConf?.dotColor || "#64748b",
      };
    });
}

/**
 * Render the filter panel into a regular DOM sidebar element.
 * No Leaflet control — the sidebar is outside the map container so
 * iOS touch-scroll works natively on the Napok list.
 *
 * @param {HTMLElement}                          sidebarEl  Pre-existing DOM container
 * @param {object[]}                             pois
 * @param {{ marker: L.Marker, poi: object }[]}  markerList
 * @param {object}                               leafMap    Leaflet map instance
 */
function buildFilterSidebar(sidebarEl, pois, markerList, leafMap) {
  const dayItems = buildDayItems(pois);

  const state = {
    stages: new Set(STAGES.map(s => s.id)),
    types:  new Set(TYPES.map(t => t.id)),
    days:   new Set(dayItems.map(d => d.id)),
  };

  function applyFilter() {
    for (const { marker, poi } of markerList) {
      const dayOk   = poi.day == null || state.days.has(poi.day);
      const visible = state.stages.has(poi.stage)
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

  sidebarEl.appendChild(makeSection("Szakaszok", STAGES.map(s => ({ ...s })), "stages"));

  const hr1 = document.createElement("hr");
  hr1.className = "dm-filter-divider";
  sidebarEl.appendChild(hr1);

  sidebarEl.appendChild(makeSection("Típusok", TYPES.map(t => ({ ...t })), "types"));

  const hr2 = document.createElement("hr");
  hr2.className = "dm-filter-divider";
  sidebarEl.appendChild(hr2);

  sidebarEl.appendChild(makeSection("Napok", dayItems, "days"));
}

// ── Main initialisation ───────────────────────────────────────────────────────
let initialized = false;

async function initDetailMapOnce() {
  if (initialized) return;
  initialized = true;

  const L = window.L;
  if (!L) { console.error("[DetailMap] Leaflet not found — add CDN before detail-map-init.js"); return; }

  const container = document.getElementById("detail-map");
  if (!container) return;

  const overlay = container.closest(".travel-map-wrap")?.querySelector(".tm-overlay");
  if (overlay) overlay.classList.remove("tm-hidden");

  try {
    const { pois, route } = await loadTrip(TRIP_ID, DATA_ROOT);

    // Create Leaflet map
    const map = L.map("detail-map", {
      zoomControl:        true,
      attributionControl: true,
      preferCanvas:       true,
    }).setView([60, 5], 4);
    window._leafletMaps = window._leafletMaps || {};
    window._leafletMaps["detail-map"] = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Routes (rendered first — behind markers)
    renderRoutes(L, map, route);

    // Create all markers and add directly to map
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
    const sidebar = document.getElementById("detail-map-filter");
    if (sidebar) buildFilterSidebar(sidebar, pois, markerList, map);

    // Fit to all markers
    const coords = pois.filter(p => p.lat != null).map(p => [p.lat, p.lng]);
    if (coords.length) {
      map.fitBounds(L.latLngBounds(coords), { padding: [40, 40] });
    }

    if (overlay) overlay.classList.add("tm-hidden");
  } catch (err) {
    console.error("[DetailMap] Failed to load trip data:", err);
    if (overlay) {
      overlay.innerHTML = `<div class="tm-error-msg">Nem sikerült betölteni az adatokat.<br><small>${err.message}</small></div>`;
      overlay.classList.remove("tm-hidden");
    }
  }
}

// ── Tab hook (same chain pattern as map-init.js) ──────────────────────────────
function hookTabSystem() {
  const original = window.activateTab;
  window.activateTab = function (tabId) {
    if (typeof original === "function") original.call(this, tabId);
    if (tabId === "terkep") {
      requestAnimationFrame(() => initDetailMapOnce());
    }
  };
}

hookTabSystem();
