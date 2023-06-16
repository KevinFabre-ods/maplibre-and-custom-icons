import { useState } from "react";

import LayerCircleForm from "./components/LayerCircleForm";
import DomMarkerForm from "./components/DOMMarkerForm";
import LayerIconForm from "./components/LayerIconForm";
import LayerMarkerForm from "./components/LayerMarkerForm";
import {
  LayerCircleMap,
  DOMMarkerMap,
  LayerIconMap,
  LayerMarkerMap,
} from "./components/Map";

function App() {
  const [markerType, setMarkerType] = useState("dots");
  const [layerCircleProperties, setLayerCircleProperties] = useState({
    color: "",
    radius: 5,
    blur: 0,
    opacity: 1,
    strokeColor: "",
    strokeWidth: 0,
    strokeOpacity: 1,
    pitchAlignment: "viewport",
    pitchScale: "map",
    adaptOnZoom: false,
    minZoomRadius: 0.5,
    maxZoomRadius: 24,
  });
  const [domMarkerProperties, setDomMarkerProperties] = useState({
    color: "black",
    scale: 1,
  });

  const [layerIconProperties, setLayerIconProperties] = useState({
    color: "black",
    icon: "marker",
    opacity: 1,
    haloBlur: 0,
    haloColor: "white",
    haloWidth: 0,
    overlap: "always",
    rotate: 0,
    pitchAlignment: "auto",
    textColor: "black",
    textOverlap: "never",
    textRotate: 0,
    textSize: 16,
    textOffsetX: 0,
    textOffsetY: 0,
    textAnchor: "center",
    textOptional: true,
    textTransform: "none",
    textOpacity: 1,
  });

  const [layerMarkerProperties, setLayerMarkerProperties] = useState({
    color: "",
    icon: "",
    iconColor: "",
  });

  const handleCircleChange = (key, value) => {
    setLayerCircleProperties({ ...layerCircleProperties, [key]: value });
  };

  const handleMarkerChange = (key, value) => {
    setDomMarkerProperties({ ...domMarkerProperties, [key]: value });
  };

  const handleSymbolIconChange = (key, value) => {
    setLayerIconProperties({ ...layerIconProperties, [key]: value });
  };

  const handleLayerMarkerChange = (key, value) => {
    setLayerMarkerProperties({ ...layerMarkerProperties, [key]: value });
  };

  return (
    <>
      <header>
        <label htmlFor="map-type">Type of marker</label>
        <select
          name="map-type"
          id="map-type"
          value={markerType}
          onChange={(e) => setMarkerType(e.target.value)}
        >
          <option value="dots">Dots</option>
          <option value="icons">Icons directly on map</option>
          <option value="markers">Plain markers</option>
        </select>
        <div>
          <a
            href="https://data.opendatasoft.com/explore/dataset/noaa-daily-weather-data%40public/information/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Historical NOAA Daily Weather (data after 2020-07-26)
          </a>
        </div>
      </header>
      {/* DOM Markers */}
      {/* <aside>
        <DomMarkerForm
          {...domMarkerProperties}
          handleChange={handleMarkerChange}
        />
      </aside>
      <main>
        <DOMMarkerMap {...domMarkerProperties} />{" "}
      </main> */}

      {/* Circle with layer */}
      {markerType === "dots" && (
        <>
          <aside>
            <LayerCircleForm
              {...layerCircleProperties}
              handleChange={handleCircleChange}
            />
          </aside>
          <main>
            <LayerCircleMap {...layerCircleProperties} />
          </main>
        </>
      )}

      {/* Icon with layer */}
      {markerType === "icons" && (
        <>
          {" "}
          <aside>
            <LayerIconForm
              {...layerIconProperties}
              handleChange={handleSymbolIconChange}
            />
          </aside>
          <main>
            <LayerIconMap {...layerIconProperties} />
          </main>{" "}
        </>
      )}

      {/* Marker with icon */}
      {markerType === "markers" && (
        <>
          {" "}
          <aside>
            <LayerMarkerForm
              {...layerMarkerProperties}
              handleChange={handleLayerMarkerChange}
            />
          </aside>
          <main>
            <LayerMarkerMap {...layerMarkerProperties} />
          </main>{" "}
        </>
      )}
    </>
  );
}

export default App;
