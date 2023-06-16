import GeoPoints from "../../../data/daily-weather-data.geojson";

export function loadCircles(map) {
  map.addSource("arbres-remarquables", {
    type: "geojson",
    data: GeoPoints,
  });
  map.addLayer({
    id: "circle",
    type: "circle",
    source: "arbres-remarquables",
  });
}
