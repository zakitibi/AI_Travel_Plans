# Static Data Generation Workflow

## Architecture

```
Google Sheet  (source of truth)
     │
     │  Apps Script Web App  (manual trigger)
     │  → exports trip data as JSON
     ↓
/data/trips/{trip-id}/
    trip.json    — metadata, stages, days
    pois.json    — markers (lat, lng, type, popup)
    route.json   — GeoJSON LineStrings per stage
     │
     │  git commit + push
     ↓
GitHub Pages CDN  (served as static files)
     │
     ↓
Browser  (fetches local JSON only — NO runtime API calls)
```

## When to regenerate JSON

Regenerate and commit the JSON files whenever:
- A new stop is added or coordinates change in the Sheet
- A hotel, date, or stage changes
- New POIs are added for a new trip

## How to export from Google Sheets

### Option A — Apps Script web app (URL param trigger)

1. Open the Google Sheet for the trip
2. Open **Extensions → Apps Script**
3. Use the script at `scripts/appsscript-exporter.gs` (see below)
4. Deploy as Web App → Anyone can access
5. Call: `https://script.google.com/.../exec?trip=EszakEuropa&export=static`
6. The script returns JSON — copy/paste into the appropriate file

### Option B — Manual (current approach)

Edit `/data/trips/{trip-id}/pois.json` and `route.json` directly.
The files are plain JSON — coordinates can be looked up on Google Maps
(right-click → "What's here?" gives lat, lng).

## Apps Script exporter (reference)

Below is the reference structure for an Apps Script that reads the sheet
and outputs the three JSON files.  Paste this into your Apps Script project.

```javascript
// appsscript-exporter.gs
function doGet(e) {
  const tripName = e.parameter.trip || "EszakEuropa";
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(tripName);
  if (!sheet) return ContentService.createTextOutput(
    JSON.stringify({ error: `Sheet '${tripName}' not found` })
  ).setMimeType(ContentService.MimeType.JSON);

  const rows = sheet.getDataRange().getValues();
  const headers = rows[0].map(h => String(h).trim());

  const pois = [];
  for (let i = 1; i < rows.length; i++) {
    const row = {};
    headers.forEach((h, j) => row[h] = rows[i][j]);
    const lat = parseFloat(String(row["Lat"] || "").replace(",", "."));
    const lng = parseFloat(String(row["Lng"] || "").replace(",", "."));
    if (isNaN(lat) || isNaN(lng)) continue;

    // Map Hungarian column names → pois.json schema
    pois.push({
      id:      slugify(`${row["Nap"]}-${row["Cél"] || row["Start"]}`),
      name:    row["Cél"] || row["Start"] || "",
      lat, lng,
      type:    (row["Típus"] || "sight").toLowerCase(),
      stage:   slugify(row["Szakasz"] || ""),
      day:     parseInt(row["Nap"]) || null,
      date:    row["Dátum"] || "",
      country: row["Ország"] || "",
      priority: row["Státusz"] === "Foglalt" ? "high" : "medium",
      popup: {
        title:       row["Cél"] || row["Start"] || "",
        description: row["Látnivalók / Program"] || "",
        note:        row["Megjegyzés"] || "",
      }
    });
  }

  return ContentService.createTextOutput(JSON.stringify(pois, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}

function slugify(str) {
  return (str || "").toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").trim();
}
```

## Adding a new trip

1. Create `/data/trips/{new-trip-id}/` directory
2. Add `trip.json`, `pois.json`, `route.json` following the schema
3. Create `/trips/{New Trip Name}/map-init.js`:
   ```javascript
   import { TravelMap } from "../../engine/TravelMap.js";
   const TRIP_ID = "new-trip-id";
   let travelMap = null, initialized = false;
   async function initMapOnce() {
     if (initialized) return;
     initialized = true;
     travelMap = new TravelMap("trip-map", { groupBy: "stage" });
     await travelMap.load(TRIP_ID);
   }
   // ... hookTabSystem() same as izland es eszak europa
   ```
4. Add Leaflet CDN and `<script type="module" src="./map-init.js">` to the trip's `index.html`

## JSON schema reference

### trip.json

```json
{
  "tripId": "string",
  "title": "string",
  "subtitle": "string",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "stages": [{ "id", "name", "color", "startDate", "endDate", "persons", "summary" }],
  "days": [{ "day", "date", "stage", "country", "start", "end",
             "distanceKm", "drivingTime", "hotel", "summary" }]
}
```

### pois.json

```json
[{
  "id": "slug-string",
  "name": "Display name",
  "lat": 64.1355,
  "lng": -21.8954,
  "type": "hotel|drive|ferry|flight|sight|waterfall|geothermal|waypoint",
  "stage": "baltikum|izland|hazaut",
  "day": 1,
  "date": "2026-07-10",
  "country": "IS",
  "priority": "high|medium|low",
  "popup": { "title": "...", "description": "...", "note": "..." }
}]
```

### route.json

```json
{
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": { "stage": "baltikum", "color": "#8a4f24", "name": "Baltikum" },
    "geometry": { "type": "LineString", "coordinates": [[lng, lat], ...] }
  }]
}
```

> **Note:** GeoJSON uses `[longitude, latitude]` order — the opposite of Leaflet's `[lat, lng]`.
