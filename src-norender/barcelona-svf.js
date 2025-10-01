import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import { useMapEvents } from "react-leaflet/hooks"
import UPNG from "upng-js"
import { Buffer } from "buffer"

import "leaflet-geotiff"

import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
// import Footer from "../components/Footer-map"

import "../css/leaflet-hack.css"

if (typeof Number.prototype.toRad === "undefined") {
  Number.prototype.toRad = function () {
    return (this * Math.PI) / 180
  }
}

const MyMap = () => {
  const tileLngSize = {
    15: 0.010986328,
    16: 0.005493164,
    17: 0.002746582,
    18: 0.001373291,
  }
  const tileLatSize = {
    15: 0.008239204,
    16: 0.004119994,
    17: 0.002060095,
    18: 0.001030056,
  }

  const [layerOpacity, setLayerOpacity] = useState(1.0)
  const [satelliteVisibility, setSatelliteVisibility] = useState(false)

  const [svf, setsvf] = useState(0)
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [clickEnabled, setClickEnabled] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(15)

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
      default:
        break
    }
  }

  const ClickGrabber = () => {
    const map = useMapEvents({
      mousemove: e => {
        if (clickEnabled) {
          const coords = map.mouseEventToLatLng(e.originalEvent)
          // console.log(e.layerPoint)

          const xtile = Math.floor(
            ((coords.lng + 180) / 360) * Math.pow(2, zoomLevel)
          )

          const lngTile = (xtile / Math.pow(2, zoomLevel)) * 360 - 180

          const ytile = Math.floor(
            ((1 -
              Math.log(
                Math.tan(coords.lat.toRad()) + 1 / Math.cos(coords.lat.toRad())
              ) /
                Math.PI) /
              2) *
              Math.pow(2, zoomLevel)
          )

          const n = Math.PI - (2 * Math.PI * ytile) / Math.pow(2, zoomLevel)
          // console.log({n})
          const latTile =
            (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))
          // console.log("latTile", latTile)
          // console.log("lngTile", lngTile)
          // console.log("lat", coords.lat)
          // console.log("lng", coords.lng)
          const tileLat = latTile - coords.lat
          const tileLng = coords.lng - lngTile
          const xTile = parseInt((tileLng / tileLngSize[zoomLevel]) * 256)
          const yTile = parseInt((tileLat / tileLatSize[zoomLevel]) * 256)
          const pngPosition = (((yTile) * 256+(xTile))*4)
          // console.log("lat on tile", tileLat)
          // console.log("lng on tile", tileLng)
          // console.log({ xTile })
          // console.log({ yTile })
          // console.log({ pngPosition })
          // console.log(zoomLevel, xtile, ytile)

          setLat(coords.lat)
          setLng(coords.lng)
          fetch(
            `https://multicast-tiles.netbistrot.com/Barcelona-svf/${zoomLevel}/${xtile}/${ytile}.png`
          )
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(async blob => {
              const arrayBuffer = await blob.arrayBuffer()
              const buffer = Buffer.from(arrayBuffer, "binary")
              const result = UPNG.decode(await buffer)
              // console.log(result["data"][pngPosition])
              setsvf(result["data"][pngPosition]/256)
            })
        }
      },
    })
    return null
  }

  const ZoomGrabber = () => {
    const mapEvents = useMapEvents({
      zoomend: () => {
        setZoomLevel(mapEvents.getZoom())
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
                  <span className="ml-3 text-xs ">enable click to get svf</span>
                </label>
                <div className="h-2" />
                {clickEnabled ? (
                  <>
                    <p className="text-xs font-normal">Click to get svf</p>
                    <p className="text-xs">svf:{svf}</p>
                    <p className="text-xs">LAT:{lat === 0 ? "" : lat}</p>
                    <p className="text-xs">LGT:{lng === 0 ? "" : lng}</p>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {clickEnabled ? <p>enabled</p> : <p>disabled</p>}
            <canvas id="map-canvas" />
            <MapContainer
              center={[41.4005, 2.16516]}
              zoom={zoomLevel}
              className="absolute top-0 left-0"
              style={{ width: "100%", height: "900px" }}
              id="mapContainer"
              zoomControl={false}
            >
              <ClickGrabber />
              <ZoomGrabber />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              <TileLayer
                url="https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                // attribution='<a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>'
                opacity={satelliteVisibility ? 1 : 0}
              />
              <TileLayer
                attribution="&copy; Multicast"
                url="https://multicast-tiles.netbistrot.com/Barcelona-svf/{z}/{x}/{y}.png"
                opacity={layerOpacity}
                zIndex={30}
                eventHandlers={{
                  click: evt => {
                    log(evt)
                  },
                }}
              />
            </MapContainer>
          </>
        ) : (
          <></>
        )}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default MyMap
