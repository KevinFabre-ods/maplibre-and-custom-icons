import GeoPoints from "../../../data/accidentologie-paris.geojson";

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
      },
      paint: {
        "icon-color": "black",
      },
    });
  });
}
