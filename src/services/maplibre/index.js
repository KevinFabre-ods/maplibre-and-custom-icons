import maplibregl from "maplibre-gl";

export const toggleMapVisibility = (map) => {
  map.setLayoutProperty("circle", "visibility", "none");
};

export const initializeMap = (containerId) => {
  let map = new maplibregl.Map({
    container: containerId,
    style:
      "https://api.maptiler.com/maps/positron/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
    center: [0, 0],
    zoom: 1,
    bounds: [2.1492, 48.775198, 2.529602, 48.928815],
  });
  return map;
};
