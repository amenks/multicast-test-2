import React, { useState } from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"

// import { Marker } from "react-leaflet/Marker"
// import { Popup } from "react-leaflet/Popup"
// import { useMap } from "react-leaflet/hooks"

import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer-map"

import { MilanGeoJson } from "../geojson/NIL_WM_WGS84_GeoJSON.js"
// import { testGeoJson} from "../geojson/"

// const { BaseLayer } = LayersControl

const MyMap = () => {
  // console.log(MilanGeoJson)

  const [layerOpacity, setLayerOpacity] = useState(0.5)

  const [beunosAiresVisibility, setBeunosAiresVisibility] = useState(false)
  const [cittaStudiVisibility, setCittaStudiVisibility] = useState(false)

  const log = env => {
    console.log("log", env)
  }

  const changeOpacity = e => {
    setLayerOpacity(parseInt(e.target.value) / 100)
  }

  const toggleVisibility = e => {
    log(e.target.id)
    switch (e.target.id) {
      case "buenos-aires":
        setBeunosAiresVisibility(!beunosAiresVisibility)
        break
      case "citta-studi":
        setCittaStudiVisibility(!cittaStudiVisibility)
        break
      default:
        break
    }
  }

  return (
    <>
      <Metatags
        title="Urban DSS | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <div id="title" className="hidden">
        Urban DSS raster layer controls
      </div>
      <NavBar />
      <div id="content-body" className="relative">
        {typeof window !== "undefined" ? (
          <>
            <div
              className="w-1/6 float-left absolute top-0 left-0"
              style={{ zIndex: 5000 }}
            >
              <div
                className="p-4"
                style={{ backgroundColor: "#ffffffdd", height: "900px" }}
              >
                <div className="flex flex-col space-y-2 p-2 w-50">
                  <input
                    type="range"
                    className="w-full"
                    min="1"
                    max="100"
                    step="1"
                    onChange={env => changeOpacity(env)}
                    value={layerOpacity * 100}
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="buenos-aires"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300"
                    onChange={env => toggleVisibility(env)}
                  />
                  <label htmlFor="default-checkbox" className="ml-2 text-xs">
                    Buenos Aires - Pt Venezia - Pt Monforte
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="citta-studi"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300"
                    onChange={env => toggleVisibility(env)}
                  />
                  <label htmlFor="default-checkbox" className="ml-2 text-xs">
                    Citta Studi
                  </label>
                </div>
              </div>
            </div>
            <MapContainer
              center={[45.47786558072717, 9.219768225461412]}
              zoom={14}
              className="absolute top-0 left-0"
              style={{ width: "100%", height: "900px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <GeoJSON
                data={MilanGeoJson}
                style={{ color: "#B91C1C", fillOpacity: 0, weight: 3 }}
                eventHandlers={{
                  click: evt => {
                    log(evt["layer"]["feature"]["properties"]["NIL"])
                  },
                }}
              />

              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="http://local.andremenks.net/gis-raster/Milan4/{z}/{x}/{y}.png"
                opacity={beunosAiresVisibility ? layerOpacity : 0}
                zIndex={30}
              />
              <TileLayer
                attribution="&copy; Multicast"
                url="http://local.andremenks.net/gis-raster/Milan5/{z}/{x}/{y}.png"
                opacity={cittaStudiVisibility ? layerOpacity : 0}
                zIndex={30}
              />
            </MapContainer>
          </>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  )
}

export default MyMap
