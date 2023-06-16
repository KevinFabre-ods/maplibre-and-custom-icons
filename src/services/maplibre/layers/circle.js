import { click } from "@testing-library/user-event/dist/click";
import GeoPoints from "../../../data/daily-weather-data.geojson";

export function loadCircles(map) {
  let activeId = null;
  map.addSource("arbres-remarquables", {
    type: "geojson",
    data: GeoPoints,
    generateId: true,
  });

  map.addLayer({
    id: "circle",
    type: "circle",
    source: "arbres-remarquables",
    paint: {
      "circle-radius": [
        "case",
        ["boolean", ["feature-state", "isActive"], false],
        50,
        5,
      ],
    },
  });

  map.on("click", () => {
    if (activeId) {
      map.setFeatureState(
        {
          source: "arbres-remarquables",
          id: activeId,
        },
        { isActive: false }
      );
      activeId = null;
    }
  });

  map.on("click", "circle", (e) => {
    if (e.features.length) {
      const id = e.features[0].id;
      map.setFeatureState(
        {
          source: "arbres-remarquables",
          id,
        },
        { isActive: true }
      );
      activeId = id;
    }
  });
}
