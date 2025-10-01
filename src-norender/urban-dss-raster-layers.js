import React from "react"
import { MapContainer, TileLayer, LayersControl, GeoJSON } from "react-leaflet"

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


  const log = env => {
    console.log("log", env)
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
        Urban DSS raster layer
      </div>
      <NavBar />
      <div id="content-body">
        {typeof window !== "undefined" ? (
          <>
            <MapContainer
              center={[45.47786558072717, 9.219768225461412]}
              zoom={14}
              style={{ maxWidth: "100%", height: "900px" }}
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
              <LayersControl collapsed={false}>
                <LayersControl.Overlay>
                  <div class="flex flex-col space-y-2 p-2 w-80">
                    <input
                      type="range"
                      class="w-full"
                      min="1"
                      max="100"
                      step="1"
                    />
                  </div>
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Buenos Aires - Porta Venezia - Porta Monforte">
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://local.andremenks.net/gis-raster/Milan4/{z}/{x}/{y}.png"
                    opacity={1}
                    zIndex={30}
                  />
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Citta Studi" checked={true}>
                  <TileLayer
                    attribution="&copy; Multicast"
                    url="http://local.andremenks.net/gis-raster/Milan5/{z}/{x}/{y}.png"
                    opacity={1}
                    zIndex={30}
                    eventHandlers={{
                      click: evt => {
                        log(evt)
                      },
                    }}
                  />
                </LayersControl.Overlay>
              </LayersControl>
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
