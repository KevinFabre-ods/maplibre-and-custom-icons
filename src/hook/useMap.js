import { useEffect, useRef } from "react";

import { initializeMap } from "../services/maplibre";

const useMap = (containerMapId, onLoad, options) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Prevent re-initialize with strict mode
    if (mapRef.current !== null) return;
    mapRef.current = initializeMap(containerMapId, options);
    mapRef.current.on("load", () => onLoad(mapRef.current));
  }, [containerMapId, onLoad, options]);

  return mapRef.current;
};

export default useMap;
