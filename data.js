// data.js - put this in the same folder as index.html and dataset.xlsx

// Defaults
const defaultCategoryColor = "#ff9900";
const defaultStatusColor = "#000000";

// Status border colors (common statuses from your sheet)
const statusColors = {
  "Completed": "#1fa83b",
  "Working on Documentation": "#007bff",
  "Inactive": "#a0a0a0",
  "Hold": "#ff8c00",
  "To be updated": "#d35400",
  "Certification Payment Pending": "#e74c3c",
  "Data Received": "#16a085",
  "Waiting for CTO, on-hold": "#b03a2e",
  "Intro Session Pending": "#f39c12",
  "Waiting for CTO, on-hold": "#b03a2e",
  "Certification Payment Pending": "#e74c3c",
  // you can add custom statuses here
};

// If you want to pre-fill geo_lookup for some cities you already know,
// add them like: "City, State": { lat: 12.34, lng: 56.78 }
// We'll normally geocode at runtime, so leave empty if you prefer.
const geo_lookup = {
  // "Mumbai, Maharashtra": { lat: 19.0760, lng: 72.8777 },
};

// Helper to generate distinct colours for categories at runtime.
// Input: array of category strings. Returns object { category: colorHex, ... }
function generateCategoryColors(categories) {
  // unique sorted
  const uniq = Array.from(new Set(categories.filter(Boolean))).sort();
  const n = uniq.length || 1;
  const result = {};
  for (let i = 0; i < uniq.length; i++) {
    const h = Math.round((i / n) * 360);
    const s = 65;
    const l = 50;
    // hsl to hex
    function hslToHex(h,s,l){
      s /= 100; l /= 100;
      const k = n => (n + h/30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = n => l - a * Math.max(Math.min(k(n) - 3, 9 - k(n), 1), -1);
      return "#" + [f(0), f(8), f(4)].map(x => Math.round(x*255).toString(16).padStart(2, '0')).join('');
    }
    result[uniq[i]] = hslToHex(h,s,l);
  }
  return result;
}
