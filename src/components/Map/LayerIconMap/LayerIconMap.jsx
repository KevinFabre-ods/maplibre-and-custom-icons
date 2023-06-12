import React, { useEffect, useId } from "react";

import { loadSymbols } from "../../../services/maplibre/layers/symbol";
import {
  setPaintProperties,
  setLayoutProperties,
  updateIconImage,
} from "../../../services/maplibre/layers";

import useMap from "../../../hook/useMap";

const LayerIconMap = ({
  color,
  opacity,
  icon,
  haloBlur,
  haloColor,
  haloWidth,
  overlap,
  rotate,
  pitchAlignment,
  textColor,
  textOverlap,
  textRotate,
  textSize,
  textAnchor,
  textOptional,
  textOffsetX,
  textOffsetY,
  textTransform,
  textOpacity,
}) => {
  const containerMapId = useId();
  const circleMap = useMap(containerMapId, loadSymbols);

  useEffect(() => {
    if (circleMap)
      setPaintProperties(circleMap, "icon-symbol", {
        "icon-color": color || "black",
        "icon-opacity": opacity,
        "icon-halo-blur": haloBlur,
        "icon-halo-color": haloColor,
        "icon-halo-width": haloWidth,
        "text-color": textColor,
        "text-opacity": textOpacity,
      });
  }, [
    circleMap,
    color,
    opacity,
    haloBlur,
    haloColor,
    haloWidth,
    textColor,
    textOpacity,
  ]);

  useEffect(() => {
    if (circleMap)
      setLayoutProperties(circleMap, "icon-symbol", {
        "icon-overlap": overlap,
        "icon-rotate": rotate,
        "icon-pitch-alignment": pitchAlignment,
        "text-overlap": textOverlap,
        "text-rotate": textRotate,
        "text-size": textSize,
        "text-anchor": textAnchor,
        "text-optional": textOptional,
        "text-offset": [textOffsetX, textOffsetY],
        "text-transform": textTransform,
      });
  }, [
    circleMap,
    overlap,
    rotate,
    pitchAlignment,
    textOverlap,
    textRotate,
    textSize,
    textAnchor,
    textOptional,
    textOffsetX,
    textOffsetY,
    textTransform,
  ]);

  useEffect(() => {
    if (circleMap)
      updateIconImage(circleMap, "icon-symbol", icon || "marker", true);
  }, [circleMap, icon]);

  return <div id={containerMapId} className="rods-map" />;
};

export default LayerIconMap;
