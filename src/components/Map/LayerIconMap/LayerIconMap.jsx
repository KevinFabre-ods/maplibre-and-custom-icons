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
  adaptOnZoom,
  minZoomIconSize,
  maxZoomIconSize,
}) => {
  const containerMapId = useId();
  const iconMap = useMap(containerMapId, loadSymbols);

  useEffect(() => {
    if (iconMap)
      setPaintProperties(iconMap, "symbol-layer", {
        "icon-color": color || "black",
        "icon-opacity": opacity,
        "icon-halo-blur": haloBlur,
        "icon-halo-color": haloColor,
        "icon-halo-width": haloWidth,
        "text-color": textColor,
        "text-opacity": textOpacity,
      });
  }, [
    iconMap,
    color,
    opacity,
    haloBlur,
    haloColor,
    haloWidth,
    textColor,
    textOpacity,
  ]);

  useEffect(() => {
    if (iconMap)
      setLayoutProperties(iconMap, "symbol-layer", {
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
    iconMap,
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
    if (iconMap)
      updateIconImage(iconMap, "symbol-layer", icon || "marker", true);
  }, [iconMap, icon]);

  useEffect(() => {
    if (iconMap) {
      setLayoutProperties(iconMap, "symbol-layer", {
        "icon-size": adaptOnZoom
          ? [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              minZoomIconSize,
              24,
              maxZoomIconSize,
            ]
          : 1,
      });
    }
  }, [iconMap, adaptOnZoom, minZoomIconSize, maxZoomIconSize]);

  return <div id={containerMapId} className="rods-map" />;
};

export default LayerIconMap;
