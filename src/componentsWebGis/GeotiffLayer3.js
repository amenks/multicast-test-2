import react, { useEffect } from "react"
import proj4 from "proj4"
import { useLeafletContext } from "@react-leaflet/core"
import { useMap } from "react-leaflet"
import parseGeoraster from "georaster"
import GeoRasterLayer from "georaster-layer-for-leaflet"
import L from "leaflet";

window.proj4 = proj4

const GeotiffLayer = ({ url, options, layerRef }) => {


  return L.leafletGeotiff(url, options).addTo(layerRef.current)
}

export default GeotiffLayer
