import React, { useEffect, useId } from "react";

import { loadCircles } from "../../../services/maplibre/layers/circle";
import { setPaintProperties } from "../../../services/maplibre/layers";

import useMap from "../../../hook/useMap";

const LayerCircleMap = ({
  color,
  radius,
  blur,
  strokeColor,
  strokeWidth,
  strokeOpacity,
  opacity,
  pitchAlignment,
  pitchScale,
}) => {
  const containerMapId = useId();
  const circleMap = useMap(containerMapId, loadCircles);

  useEffect(() => {
    if (circleMap) {
      setPaintProperties(circleMap, "circle", {
        "circle-color": color || "black",
        "circle-radius": radius,
        "circle-blur": blur,
        "circle-opacity": opacity,
        "circle-stroke-color": strokeColor || "white",
        "circle-stroke-opacity": strokeOpacity,
        "circle-stroke-width": strokeWidth,
        "circle-pitch-alignment": pitchAlignment,
        "circle-pitch-scale": pitchScale,
      });
    }
  }, [
    blur,
    circleMap,
    color,
    radius,
    strokeColor,
    strokeWidth,
    strokeOpacity,
    opacity,
    pitchAlignment,
    pitchScale,
  ]);

  return <div id={containerMapId} className="rods-map" />;
};

export default LayerCircleMap;
