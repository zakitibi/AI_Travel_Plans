/**
 * section-map-init.js — Per-szakasz interaktív térkép
 *
 * Minden részletes szakasz-oldal (Baltikum, Izland, Hazaút) aljára
 * kerül egy-egy Leaflet-térkép a szakasz összes POI-jával.
 *
 * Funkciók:
 *   ◆ csak az adott szakasz POI-jait és útvonal-szegmenseit mutatja
 *   ◆ Látnivalók saját ikonnal (poi.icon emoji, ha definiált)
 *   ◆ Napok — per-nap szín az útvonalakon és jelölőkön
 *   ◆ Szűrők — Típusok + Napok (napszűrő az útvonalakat is toggleli)
 *   ◆ Útvonal tooltip — távolság km-ben
 *   ◆ Napjelvény — szállás-markereken nap-számbadge
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

// ── Nap → szín paletta ────────────────────────────────────────────────────────
const DAY_PALETTE = [
  "#e63946","#f4831f","#e9c46a","#2a9d8f","#1d6fa4",
  "#7b5ea7","#c77dff","#e07a5f","#06d6a0","#118ab2",
  "#ffd166","#ef476f","#457b9d","#a8dadc","#6a994e",
  "#bc4749","#386641","#6c757d","#d62828","#023e8a",
  "#f48c06","#e85d04","#9d0208","#48cae4","#023047",
  "#8ecae6","#219ebc","#126782",
];

function dayColor(day) {
  return day != null ? DAY_PALETTE[(day - 1) % DAY_PALETTE.length] : "#64748b";
}

function formatMmDd(dateStr) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr || "");
  return match ? `${match[2]}.${match[3]}` : "";
}

function displayDayLabel({ day, date, stage }) {
  const mmdd = formatMmDd(date);
  if (mmdd) return mmdd;
  return day != null ? `${day}. nap` : "";
}

// ── Type metadata ─────────────────────────────────────────────────────────────
const ALL_TYPES = [
  { id: "hotel",  label: "Szállás",   dotColor: "#1f5a3e" },
  { id: "sight",  label: "Látnivaló", dotColor: "#dc2626" },
  { id: "drive",  label: "Áthajtó",   dotColor: "#d97706" },
  { id: "ferry",  label: "Komp",      dotColor: "#1d4ed8" },
  { id: "flight", label: "Repülő",    dotColor: "#7c3aed" },
];

// ── Type → fallback icon ──────────────────────────────────────────────────────
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

/** Emoji to render: poi.icon overrides the type default for sight markers */
function poiEmoji(poi) {
  return poi.icon || typeConf(poi.type).emoji;
}

// ── Icon factory ──────────────────────────────────────────────────────────────
function createIcon(L, poi) {
  const emoji = poiEmoji(poi);
  const { cls } = typeConf(poi.type);
  const color   = dayColor(poi.day);

  // Hotel: show day-number badge and day-accent border
  if (poi.type === "hotel" && poi.day != null) {
    const badgeLabel = displayDayLabel(poi);
    return L.divIcon({
      className: "",
      html: `<div class="tm-marker ${cls} tm-marker-hotel-day" style="--day-color:${color}">
               <span class="tm-marker-inner">${emoji}</span>
               <span class="tm-day-badge">${badgeLabel}</span>
             </div>`,
      iconSize:    [34, 34],
      iconAnchor:  [17, 34],
      popupAnchor: [0, -36],
    });
  }

  // Non-hotel sight: tinted border by day
  const borderStyle = poi.day != null
    ? `style="border-color:${color};box-shadow:0 0 0 2px ${color}33"`
    : "";

  return L.divIcon({
    className: "",
    html: `<div class="tm-marker ${cls}" ${borderStyle}><span class="tm-marker-inner">${emoji}</span></div>`,
    iconSize:    [30, 30],
    iconAnchor:  [15, 30],
    popupAnchor: [0, -33],
  });
}

// ── Popup builder ─────────────────────────────────────────────────────────────
function buildPopupHtml(poi) {
  const emoji    = poiEmoji(poi);
  const dayText  = displayDayLabel(poi);
  const dayLabel = dayText ? `<span class="tm-popup-day-chip" style="background:${dayColor(poi.day)}">${dayText}</span>` : "";
  const subtitle = [
    poi.date    ? poi.date.replace(/-/g, ".")  : "",
    poi.country || "",
  ].filter(Boolean).join(" · ");
  const sc = SECTION_CONF[poi.stage];
  const stageBadge = sc ? `<span class="tm-popup-szakasz">${sc.label}</span>` : "";
  const noteHtml   = poi.popup?.note ? `<div class="tm-popup-note">${poi.popup.note}</div>` : "";
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
      <div class="tm-popup-foot">${dayLabel}${stageBadge}</div>
    </div>
  `;
}

// ── Route renderer — day-coloured with distance tooltip ───────────────────────
/**
 * @param {L}        L         Leaflet
 * @param {object}   map       Leaflet map instance
 * @param {object}   route     GeoJSON FeatureCollection
 * @param {string}   stageId
 * @param {Map}      routesByDay  day → L.Layer[]  (filled in-place)
 */
function renderRoutes(L, map, route, stageId, routesByDay, dayDateMap) {
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
      // Per-day colour for detour routes (have p.day); stage colour for main routes
      const color = p.day != null ? dayColor(p.day) : (p.color || "#64748b");
      return {
        color,
        weight:    p.weight  || 3,
        opacity:   p.opacity || 0.80,
        lineJoin:  "round",
        lineCap:   "round",
        dashArray: t === "flight" ? "5 12" : t === "ferry" ? "8 10" : null,
      };
    },
    onEachFeature(feature, layer) {
      const p = feature.properties || {};
      const routeDayLabel = p.day != null
        ? displayDayLabel({ day: p.day, date: dayDateMap?.get(p.day), stage: stageId })
        : "";
      const dayPart  = routeDayLabel ? `<b>${routeDayLabel}</b> · ` : "";
      const distPart = p.distance_km      ? ` · <b>${p.distance_km} km</b>` : "";
      layer.bindTooltip(
        `${dayPart}${p.name || ""}${distPart}`,
        { sticky: true, className: "tm-route-tooltip" }
      );
      // Register into routesByDay for filter sync
      if (p.day != null && routesByDay) {
        if (!routesByDay.has(p.day)) routesByDay.set(p.day, []);
        routesByDay.get(p.day).push(layer);
      }
    },
  }).addTo(map);
}

// ── Day items ─────────────────────────────────────────────────────────────────
function buildDayItems(pois, stageId, dayNames) {
  const byDay = {};
  for (const poi of pois) {
    if (poi.day == null) continue;
    if (!byDay[poi.day]) {
      byDay[poi.day] = { day: poi.day, date: poi.date || "", hotel: null, sight: null, any: null };
    }
    const e = byDay[poi.day];
    if (!e.date && poi.date) e.date = poi.date;
    if (poi.type === "hotel" && !e.hotel) e.hotel = poi.name;
    if (poi.type === "sight" && !e.sight) e.sight = poi.name;
    if (!e.any) e.any = poi.name;
  }
  return Object.values(byDay)
    .sort((a, b) => a.day - b.day)
    .map(e => ({
      id:       e.day,
      label:    `${displayDayLabel({ day: e.day, date: e.date, stage: stageId })} — ${dayNames?.get(e.day) || e.hotel || e.sight || e.any || "–"}`,
      dotColor: dayColor(e.day),
    }));
}

// ── Filter sidebar ────────────────────────────────────────────────────────────
function buildFilterSidebar(sidebarEl, pois, markerList, leafMap, stageId, routesByDay, dayNames) {
  const dayItems = buildDayItems(pois, stageId, dayNames);

  // Only show types that have at least one POI in this stage
  const presentTypes = new Set(pois.map(p => p.type));
  const types = ALL_TYPES.filter(t => presentTypes.has(t.id));

  const state = {
    types: new Set(types.map(t => t.id)),
    days:  new Set(dayItems.map(d => d.id)),
  };

  function applyFilter() {
    // Markers
    for (const { marker, poi } of markerList) {
      const dayOk   = poi.day == null || state.days.has(poi.day);
      const visible = state.types.has(poi.type) && dayOk;
      if (visible) { if (!leafMap.hasLayer(marker)) leafMap.addLayer(marker); }
      else         { if (leafMap.hasLayer(marker))  leafMap.removeLayer(marker); }
    }
    // Route layers (only per-day detour routes)
    if (routesByDay) {
      for (const [day, layers] of routesByDay) {
        const show = state.days.has(day);
        for (const layer of layers) {
          if (show) { if (!leafMap.hasLayer(layer)) leafMap.addLayer(layer); }
          else      { if (leafMap.hasLayer(layer))  leafMap.removeLayer(layer); }
        }
      }
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
    const { trip, pois: allPois, route: allRoute } = await getTripData();

    // Day display names from trip.json (only days belonging to this stage)
    const dayNames = new Map();
    for (const d of trip?.days || []) {
      if (d.stage === stageId && d.name) dayNames.set(d.day, d.name);
    }

    // Filter to this stage only
    const stagePois = allPois.filter(p => p.stage === stageId && p.lat != null && p.lng != null);
    const dayDateMap = new Map();
    for (const poi of stagePois) {
      if (poi.day != null && poi.date && !dayDateMap.has(poi.day)) {
        dayDateMap.set(poi.day, poi.date);
      }
    }

    const map = L.map(containerId, {
      zoomControl:        true,
      attributionControl: true,
      preferCanvas:       false,   // vector needed for route tooltips
    }).setView([60, 15], 4);
    window._leafletMaps = window._leafletMaps || {};
    window._leafletMaps[containerId] = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    // Routes — pass in routesByDay map so day-filter can toggle them
    const routesByDay = new Map();
    renderRoutes(L, map, allRoute, stageId, routesByDay, dayDateMap);

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

    // Filter sidebar (outside map — touch-scroll friendly)
    const sidebar = document.getElementById(`${stageId}-map-filter`);
    if (sidebar) {
      buildFilterSidebar(
        sidebar,
        allPois.filter(p => p.stage === stageId),
        markerList, map, stageId, routesByDay, dayNames
      );
    }

    // Fit to stage bounds
    if (stagePois.length) {
      map.fitBounds(
        L.latLngBounds(stagePois.map(p => [p.lat, p.lng])),
        { padding: [40, 40] }
      );
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

const activeSectionView = document.querySelector('.view.is-active[data-view="baltikum"], .view.is-active[data-view="izland"], .view.is-active[data-view="hazaut"]');
if (activeSectionView?.dataset?.view) {
  requestAnimationFrame(() => initSectionMap(activeSectionView.dataset.view));
}
