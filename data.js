// data.js

// Fill colors by STATUS
const statusColors = {
  "Completed": "#1fa83b",
  "Documentation": "#007bff",
  "Registered": "#8e44ad",
  "Site audit done": "#f39c12",
  "Inactive": "#a0a0a0",
  "Hold": "#e67e22",
  "To be updated": "#d35400",
  "Certification Payment Pending": "#c0392b",
  "Data Received": "#16a085",
  // add new statuses freely — they will auto-appear in legend
};

const defaultStatusColor = "#607d8b";   // fallback
const defaultCategoryBorder = "#000000"; // if category undefined

// (optional) category → border color (so that category info is still visible)
// generates distinct colors automatically
function generateCategoryColors(categories) {
  const uniq = Array.from(new Set(categories.filter(Boolean))).sort();
  const n = uniq.length || 1;
  const result = {};
  for (let i = 0; i < uniq.length; i++) {
    const hue = Math.round((i / n) * 360);
    const sat = 65, light = 45;
    result[uniq[i]] = `hsl(${hue}, ${sat}%, ${light}%)`;
  }
  return result;
}

// optional cached coordinates for performance
const geo_lookup = {
  // "Mumbai, Maharashtra": { lat: 19.0760, lng: 72.8777 },
};
