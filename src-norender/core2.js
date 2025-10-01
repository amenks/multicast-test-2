import React, { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import Metatgs from "../src/components/metatags"

const IndexPage = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        basemap: "streets-vector",
      });
      new SceneView({
        map,
        container: mapRef.current,
        center: [2.1686, 41.3874],
        scale: 20000,
        ui: {
            components: ["zoom", "navigation-toggle"]
          }
      });
    }
  }, []);

  return (
  <>  
    <Metatgs />
      <div ref={mapRef} style={{ width: '90vw', height: '90vh' }}/>
  </>
  
  )
}

export default IndexPage
