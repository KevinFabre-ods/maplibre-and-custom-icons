import React, { useEffect, useId } from "react";

import { loadSymbols } from "../../../services/maplibre/layers/symbol";
import {
  setPaintProperties,
  updateIconImage,
} from "../../../services/maplibre/layers";

import useMap from "../../../hook/useMap";

const LayerIconMap = ({ color, icon, haloBlur, haloColor, haloWidth }) => {
  const containerMapId = useId();
  const circleMap = useMap(containerMapId, loadSymbols);

  useEffect(() => {
    if (circleMap)
      setPaintProperties(circleMap, "icon-symbol", {
        "icon-color": color || "black",
        "icon-halo-blur": haloBlur,
        "icon-halo-color": haloColor,
        "icon-halo-width": haloWidth,
      });
  }, [circleMap, color, haloBlur, haloColor, haloWidth]);

  useEffect(() => {
    if (circleMap)
      updateIconImage(circleMap, "icon-symbol", icon || "marker", true);
  }, [circleMap, icon]);

  return <div id={containerMapId} className="rods-map" />;
};

export default LayerIconMap;
