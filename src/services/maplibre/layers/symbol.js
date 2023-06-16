import GeoPoints from "../../../data/daily-weather-data--small.geojson";

export function loadSymbols(map) {
  map.addSource("geo-source", {
    type: "geojson",
    data: GeoPoints,
  });
  map.loadImage("static/marker.png", (error, image) => {
    map.addImage("marker", image, { sdf: true });
    map.addLayer({
      id: "icon-symbol",
      type: "symbol",
      source: "geo-source",
      layout: {
        "icon-image": "marker",
        "icon-allow-overlap": true,
        "text-field": "Some text",
        "text-optional": true,
      },
      paint: {
        "icon-color": "black",
      },
    });
  });
}
