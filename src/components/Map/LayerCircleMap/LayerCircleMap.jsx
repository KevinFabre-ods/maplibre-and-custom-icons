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
  adaptOnZoom,
  minZoomRadius,
  maxZoomRadius,
}) => {
  const containerMapId = useId();
  const circleMap = useMap(containerMapId, loadCircles);

  useEffect(() => {
    if (circleMap) {
      setPaintProperties(circleMap, "circle", {
        "circle-color": color || "black",
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

  useEffect(() => {
    if (circleMap) {
      setPaintProperties(circleMap, "circle", {
        "circle-radius": adaptOnZoom
          ? [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              minZoomRadius,
              24,
              maxZoomRadius,
            ]
          : radius,
      });
    }
  }, [circleMap, adaptOnZoom, radius, minZoomRadius, maxZoomRadius]);

  return <div id={containerMapId} className="rods-map" />;
};

export default LayerCircleMap;
