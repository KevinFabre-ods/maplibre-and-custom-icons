import React, { useEffect, useId } from "react";

import { loadSymbols } from "../../../services/maplibre/layers/symbol";
import { updateIconImage } from "../../../services/maplibre/layers";

import useMap from "../../../hook/useMap";

function buildImageId(color, icon, iconColor) {
  let id = "marker";
  if (color) id += `-${color}`;
  if (color && icon) {
    id += `-${icon}`;
    if (iconColor) id += `-${iconColor}`;
  }
  return id;
}

const LayerMarkerMap = ({ color, icon, iconColor }) => {
  const containerMapId = useId();
  const symbolMap = useMap(containerMapId, loadSymbols);

  useEffect(() => {
    if (symbolMap)
      updateIconImage(
        symbolMap,
        "symbol-layer",
        buildImageId(color, icon, iconColor)
      );
  }, [symbolMap, color, icon, iconColor]);

  return <div id={containerMapId} className="rods-map" />;
};

export default LayerMarkerMap;
