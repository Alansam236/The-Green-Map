
/* Template: colors + optional geo cache
   GitHub Actions will append:  const DATA_ROWS = [ ... ];
*/

const statusColors = {
  "Completed": "#1fa83b",
  "Documentation": "#007bff",
  "Registered": "#8e44ad",
  "Site audit done": "#f39c12",
  "Inactive": "#a0a0a0",
  "Hold": "#e67e22",
  "To be updated": "#d35400",
  "Certification Payment Pending": "#c0392b",
  "Data Received": "#16a085"
};

const defaultStatusColor = "#607d8b";   // fallback

// Optional: cached coordinates
const geo_lookup = {
  // "hyderabad, telangana": { lat: 17.3850, lng: 78.4867 },
  // "mumbai, maharashtra":  { lat: 19.0760, lng: 72.8777 }
};
