/**
 * TripLoader.js — Travel Map Engine
 * Fetches trip rows from a Google Apps Script JSON API.
 *
 * Expected Google Sheet column headers (Hungarian):
 *   Nap, Dátum, Ország, Start, Cél, Szállás, Szállás típus, Közlekedés,
 *   Indulás, Érkezés, Megjegyzés, Lat, Lng, Típus, Km, Vezetési idő,
 *   Látnivalók / Program, Parkolás, Státusz, My Maps hely, Szakasz
 *
 * API response can be any of:
 *   { rows: [{...}, ...] }          ← preferred
 *   [{...}, ...]                    ← plain array
 *   { values: [[header,...],[...]]  ← Sheets v4 rawValues matrix
 */

/** Normalise a raw row: trim keys, coerce Lat/Lng/Km to numbers. */
function normaliseRow(raw) {
  const row = {};
  for (const [k, v] of Object.entries(raw)) {
    const key = k.trim();
    if (key === "Lat" || key === "Lng" || key === "Km") {
      const n = parseFloat(String(v ?? "").replace(",", "."));
      row[key] = isNaN(n) ? null : n;
    } else {
      row[key] = v == null ? "" : String(v).trim();
    }
  }
  return row;
}

/** Convert a values matrix (first row = headers) into row objects. */
function matrixToRows(values) {
  if (!values || values.length < 2) return [];
  const headers = values[0].map((h) => String(h).trim());
  return values.slice(1).map((cells) => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = cells[i] ?? ""; });
    return obj;
  });
}

/**
 * Load trip rows from the API, with optional local fallback.
 *
 * @param {string} apiUrl       Full URL incl. ?trip=XXX query param.
 * @param {string} [fallbackUrl] Path to a local JSON file for offline dev.
 * @returns {Promise<Object[]>} Normalised row array (Lat/Lng as numbers).
 */
export async function loadTripData(apiUrl, fallbackUrl = null) {
  let raw;

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    raw = await res.json();
  } catch (primaryErr) {
    if (fallbackUrl) {
      try {
        const res2 = await fetch(fallbackUrl);
        if (!res2.ok) throw new Error(`Fallback HTTP ${res2.status}`);
        raw = await res2.json();
        console.info("[TripLoader] Using fallback data from", fallbackUrl);
      } catch (fbErr) {
        throw new Error(
          `Primary (${primaryErr.message}) and fallback (${fbErr.message}) both failed`
        );
      }
    } else {
      throw primaryErr;
    }
  }

  // Normalise response shape
  let rows;
  if (Array.isArray(raw)) {
    rows = raw;
  } else if (raw && Array.isArray(raw.rows)) {
    rows = raw.rows;
  } else if (raw && Array.isArray(raw.values)) {
    rows = matrixToRows(raw.values);
  } else {
    throw new Error("Unexpected API response shape — expected array, {rows:[...]}, or {values:[...]}");
  }

  return rows
    .map(normaliseRow)
    .filter((r) => r.Nap || r.Start || r.Cél || r.Lat != null || r.Lng != null);
}
