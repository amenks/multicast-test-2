import React, { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Metatgs from "../src/components/metatags"

const IndexPage = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        basemap: "streets-vector",
      });
      new MapView({
        map,
        container: mapRef.current,
        center: [2.1686, 41.3874],
        zoom: 13,
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
