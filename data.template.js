// data.template.js
// Reusable configuration for index.html

// 1) Status color palette
const STATUS_COLORS = {
  'Completed': '#2e7d32',
  'Working on Documentation': '#1e88e5',
  'Inactive': '#757575',
  'Hold': '#ef6c00',
  'To be updated': '#8e24aa',
  'Certification Payment Pending': '#c62828',
  'Intro Session Pending': '#6d4c41',
  'Data Received': '#3949ab',
  'Waiting for CTO, on-hold': '#bdbdbd',
  'Unknown': '#9e9e9e'
};

// 2) GeoJSON source for India states (used for choropleth)
const GEO_SOURCES = {
  INDIA_STATES_GEOJSON_URL: 'https://raw.githubusercontent.com/india-in-data/india_maps/master/india_state_ut_administered.geojson'
  // Alternative: Data{Meet} projects also host India boundaries.
  // https://projects.datameet.org/maps/
};

// 3) Fallback city coordinates (used only if ./assets/in-cities.json is not present)
// Format: "City Name": [lat, lon, optional_state]
const CITY_COORDS = {
  "Hyderabad": [17.3850, 78.4867, "Telangana"],
  "Bengaluru": [12.9716, 77.5946, "Karnataka"],
  "Chennai": [13.0827, 80.2707, "Tamil Nadu"],
  "Mumbai": [19.0760, 72.8777, "Maharashtra"],
  "Pune": [18.5204, 73.8567, "Maharashtra"],
  "Ahmedabad": [23.0225, 72.5714, "Gujarat"],
  "Surat": [21.1702, 72.8311, "Gujarat"],
  "Jaipur": [26.9124, 75.7873, "Rajasthan"],
  "Kolkata": [22.5726, 88.3639, "West Bengal"],
  "Nashik": [20.0113, 73.7908, "Maharashtra"],
  "Coimbatore": [11.0168, 76.9558, "Tamil Nadu"]
  // Add rare cities as needed
};
