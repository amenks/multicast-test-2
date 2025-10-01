import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import { useMapEvents } from "react-leaflet/hooks"

import L from "leaflet"
import "leaflet-geotiff"

import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer-map"

import "../css/leaflet-hack.css"

import { MilanGeoJson } from "../geojson/NIL_WM_WGS84_GeoJSON.js"

const MyMap = () => {
  // console.log(process.env.TIIF_DB_MILAN_URL)
  const milanTempUrl =
    typeof window !== "undefined" ? `${process.env.TIIF_DB_MILAN_URL}` : ""
  const milanTempOptions = {
    band: 0,
    clampHigh: true,
    clampLow: true,
    colorScale: "rainbow",
    displayMax: 65,
    displayMin: 0,
    name: "Temp",
  }

  const MilanLayer =
    typeof window !== "undefined"
      ? L.leafletGeotiff(milanTempUrl, milanTempOptions)
      : {}

  const [layerOpacity, setLayerOpacity] = useState(0.5)
  const [satelliteVisibility, setSatelliteVisibility] = useState(false)
  const [milanNilVisibility, setMilanNilVisibility] = useState(false)
  const [beunosAiresVisibility, setBeunosAiresVisibility] = useState(false)
  const [cittaStudiVisibility, setCittaStudiVisibility] = useState(false)

  const [mrt, setMrt] = useState(0)
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [clickEnabled, setClickEnabled] = useState(false)

  const log = env => {
    console.log("log", env)
  }

  const changeOpacity = e => {
    setLayerOpacity(parseInt(e.target.value) / 100)
  }

  const toggleVisibility = e => {
    // console.log(e.target.id)
    switch (e.target.id) {
      case "satellite":
        setSatelliteVisibility(!satelliteVisibility)
        break
      case "buenos-aires":
        setBeunosAiresVisibility(!beunosAiresVisibility)
        break
      case "citta-studi":
        setCittaStudiVisibility(!cittaStudiVisibility)
        break
      case "milan-nil":
        setMilanNilVisibility(!milanNilVisibility)
        break
      default:
        break
    }
  }

  const ClickGrabber = () => {
    const map = useMapEvents({
      click: e => {
        if (clickEnabled) {
          const coords = map.mouseEventToLatLng(e.originalEvent)
          // console.log(coords)
          // console.log(
          //   "temp:",
          //   MilanLayer.getValueAtLatLng(coords.lat, coords.lng)
          // )
          // console.log(e)
          setMrt(MilanLayer.getValueAtLatLng(coords.lat, coords.lng))
          setLat(coords.lat)
          setLng(coords.lng)
        }
      },
    })
    return null
  }

  const changeClickEnabled = e => {
    setClickEnabled(!clickEnabled)
  }

  useEffect(() => {
    if (clickEnabled) {
      document.getElementById("mapContainer").style.cursor = "crosshair"
    } else {
      document.getElementById("mapContainer").style.cursor = "grab"
    }
  }, [clickEnabled])

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
        Urban DSS raster layer controls try
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
                <div>
                  <label
                    htmlFor="satellite"
                    className="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="satellite"
                      className="sr-only peer"
                      onClick={evt => toggleVisibility(evt)}
                    />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white   after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600" />
                    <span className="ml-3 text-xs ">Satellite</span>
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="milan-nil"
                    className="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="milan-nil"
                      className="sr-only peer"
                      onClick={evt => toggleVisibility(evt)}
                    />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white   after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600" />
                    <span className="ml-3 text-xs ">NIL</span>
                  </label>
                </div>
                <hr />
                <div className="flex flex-col space-y-2 p-2 w-50">
                  <label htmlFor="range" className="text-center text-xs">
                    Overlay opacity
                  </label>
                  <input
                    type="range"
                    className="w-full accent-red-600"
                    min="1"
                    max="100"
                    step="1"
                    onChange={env => changeOpacity(env)}
                    value={layerOpacity * 100}
                  />
                </div>
                <div className="h-2" />
                <div className="flex items-center mb-4">
                  <input
                    id="buenos-aires"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 accent-red-600"
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
                    className="w-3 h-3 text-blue-600 bg-gray-100 rounded border-gray-300 accent-red-600"
                    onChange={env => toggleVisibility(env)}
                  />
                  <label htmlFor="default-checkbox" className="ml-2 text-xs">
                    Citta Studi
                  </label>
                </div>
                <hr />
                <div className="h-2" />
                <label
                  htmlFor="default-toggle"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value=""
                    id="default-toggle"
                    className="sr-only peer"
                    onClick={evt => changeClickEnabled(evt)}
                  />
                  <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white   after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600" />
                  <span className="ml-3 text-xs ">enable click to get MRT</span>
                </label>
                <div className="h-2" />
                {clickEnabled ? (
                  <>
                    <p className="text-xs font-normal">Click to get MRT</p>
                    <p className="text-xs">
                      MRT:{mrt === 0 ? "" : mrt !== -9999 ? mrt : "n/a"}ºC
                    </p>
                    <p className="text-xs">LAT:{lat === 0 ? "" : lat}</p>
                    <p className="text-xs">LGT:{lng === 0 ? "" : lng}</p>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {clickEnabled ? <p>enabled</p> : <p>disabled</p>}
            <MapContainer
              center={[45.47786558072717, 9.219768225461412]}
              zoom={15}
              className="absolute top-0 left-0"
              style={{ width: "100%", height: "900px" }}
              id="mapContainer"
              zoomControl={false}
            >
              <ClickGrabber />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <GeoJSON
                data={MilanGeoJson}
                style={{
                  color: milanNilVisibility ? "#B91C1C" : "#00000000",
                  fillOpacity: 0,
                  weight: 3,
                }}
                opacity={milanNilVisibility ? 1 : 1}
                eventHandlers={{
                  click: evt => {
                    log(evt["layer"]["feature"]["properties"]["NIL"])
                    log(evt)
                  },
                }}
              />
              <TileLayer
                url="https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution='<a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>'
                opacity={satelliteVisibility ? 1 : 0}
              />
              <TileLayer
                attribution="&copy; Multicast"
                url="https://multicast-tiles.netbistrot.com/Milan/citta-studi/Mapnik/{z}/{x}/{y}.png"
                opacity={cittaStudiVisibility ? layerOpacity : 0}
                zIndex={30}
                eventHandlers={{
                  click: evt => {
                    log(evt)
                  },
                }}
              />
              <TileLayer
                attribution="&copy; Multicast"
                url="https://multicast-tiles.netbistrot.com/Milan/porta-veneza/Mapnik/{z}/{x}/{y}.png"
                opacity={beunosAiresVisibility ? layerOpacity : 0}
                zIndex={30}
                eventHandlers={{
                  click: evt => {
                    log(evt)
                  },
                }}
              />
              {/* <MilanLayer ref={MilanLayer} /> */}
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
