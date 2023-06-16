import maplibregl from "maplibre-gl";

import geoJson from "../../../data/arbres-remarquables.geojson";
// import geoJson from "../../../data/accidentologie-paris.geojson";
// import geoJson from "../../../data/daily-weather-data.geojson";

import { fetchGeoJson } from "../../../utils";

function createMarker(LngLat, map, options = {}) {
  let marker = new maplibregl.Marker({
    scale: options.scale || 0,
    color: options.color || "black",
  });
  marker.setLngLat(LngLat).addTo(map);
  return marker;
}

export async function loadMarkers(map, options) {
  const collection = await fetchGeoJson(geoJson);
  return collection.features.map((feature) => {
    return createMarker(feature.geometry.coordinates, map, options);
  });
}
