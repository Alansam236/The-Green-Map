
// TEMP ONLY — will be overwritten by deploy.yml once it runs
const statusColors = { "Completed": "#1fa83b", "Inactive": "#a0a0a0" };
const defaultStatusColor = "#607d8b";
const geo_lookup = {
  "hyderabad, telangana": { lat: 17.3850, lng: 78.4867 },
  "mumbai, maharashtra":  { lat: 19.0760, lng: 72.8777 }
};
const DATA_ROWS = [
  {
    "City": "Hyderabad",
    "State": "Telangana",
    "Company Name": "Sugna Metals Ltd",
    "Category": "TMT Rebars",
    "Status": "Completed",
    "Year of Certification": "2023",
    "PoC": "Alan",
    "GP Team2": "Metals"
  },
  {
    "City": "Mumbai",
    "State": "Maharashtra",
    "Company Name": "Godrej Security Solutions",
    "Category": "Ready Mix Concrete",
    "Status": "Inactive",
    "Year of Certification": "2022",
    "PoC": "PKS",
    "GP Team2": "Concrete"
  }
];
