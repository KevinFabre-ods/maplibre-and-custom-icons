import React, { useEffect, useId, useRef } from "react";

import useMap from "../../../hook/useMap";
import { loadMarkers } from "../../../services/maplibre/makers";

const DOMMarkerMap = ({ color, scale }) => {
  const containerMapId = useId();
  const circleMap = useMap(containerMapId, loadMarkers);
  const markersRef = useRef(null);

  useEffect(() => {
    async function setMarkers() {
      markersRef.current = await loadMarkers(circleMap, { color, scale });
    }

    if (markersRef.current && markersRef.current.length) {
      markersRef.current.forEach((marker) => marker.remove());
    }
    if (circleMap) {
      setMarkers();
    }
  }, [circleMap, color, scale]);

  return (
    <div
      id={containerMapId}
      className="rods-map"
      style={{ "--marker-color": color }}
    />
  );
};

export default DOMMarkerMap;
