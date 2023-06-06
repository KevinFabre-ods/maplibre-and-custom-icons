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
  const [layerCircleProperties, setLayerCircleProperties] = useState({
    color: "",
    radius: 5,
    blur: 0,
    strokeColor: "",
    strokeWidth: 0,
  });
  const [domMarkerProperties, setDomMarkerProperties] = useState({
    color: "black",
    scale: 1,
  });

  const [layerIconProperties, setLayerIconProperties] = useState({
    color: "black",
    icon: "marker",
    haloBlur: 0,
    haloColor: "white",
    haloWidth: 0,
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
      {/* <aside>
        <LayerCircleForm
          {...layerCircleProperties}
          handleChange={handleCircleChange}
        />
      </aside>
      <main>
        <LayerCircleMap {...layerCircleProperties} />
      </main> */}

      {/* Icon with layer */}
      {/* <aside>
        <LayerIconForm
          {...layerIconProperties}
          handleChange={handleSymbolIconChange}
        />
      </aside>
      <main>
        <LayerIconMap {...layerIconProperties} />
      </main> */}

      {/* Marker with icon */}
      <aside>
        <LayerMarkerForm
          {...layerMarkerProperties}
          handleChange={handleLayerMarkerChange}
        />
      </aside>
      <main>
        <LayerMarkerMap {...layerMarkerProperties} />
      </main>
    </>
  );
}

export default App;
