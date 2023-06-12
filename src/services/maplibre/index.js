import maplibregl from "maplibre-gl";

export const toggleMapVisibility = (map) => {
  map.setLayoutProperty("circle", "visibility", "none");
};

export const initializeMap = (containerId) => {
  let map = new maplibregl.Map({
    container: containerId,
    style:
      "https://api.jawg.io/styles/jawg-light.json?access-token=uzBjDNBrhgiwTooLOrfyyORKcbMe6MYpuE1a9co4heQ2dG17hzlbHeqiASa9cjZN",
    center: [0, 0],
    zoom: 1,
    bounds: [2.1492, 48.775198, 2.529602, 48.928815],
  });
  return map;
};
