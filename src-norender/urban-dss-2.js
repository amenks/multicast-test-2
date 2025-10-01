import React from "react"
// import { MapContainer } from "react-leaflet/MapContainer"
// import { TileLayer } from "react-leaflet/TileLayer"
// import { Marker } from "react-leaflet/Marker"
// import { Popup } from "react-leaflet/Popup"
// import { useMap } from "react-leaflet/hooks"

import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"

import Cities from "../maps/cities"
import BarcelonaSVF from "../maps/barcelona-svf"

const MyMap = () => {
  // const position = [47.18585, -37.708]

  return (
    <>
      <Metatags
        title="MultiCAST - OPen Street Map"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <div id="title" className="hidden">
        Urban DSS
      </div>
      <NavBar />
      <div id="content-body" className="relative">
        <div
          className="w-1/6 float-left absolute top-0 left-0 m-6"
          style={{ zIndex: 5000 }}
        >
          <div
            className="p-4"
            style={{
              backgroundColor: "#ffffffdd",
              border: "2px solid rgba(0,0,0,0.2)",
            }}
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
              />
              <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white   after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600" />
              <span className="ml-3 text-xs ">enable click to get svf</span>
            </label>
            <div className="h-2" />
            {true ? (
              <>
                <p className="text-xs font-normal">Click to get svf</p>
                <p className="text-xs">svf:</p>
                <p className="text-xs">LAT:</p>
                <p className="text-xs">LGT:</p>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        {typeof window !== "undefined" ? (
          <BarcelonaSVF />
        ) : (
          // <MapContainer
          //   center={position}
          //   zoom={4}
          //   scrollWheelZoom={true}
          //   style={{ maxWidth: "100%", height: "900px" }}
          // >
          //   <TileLayer
          //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //     opacity={1}
          //     zIndex={10}
          //   />
          //   <Marker position={[42.3601, -71.0589]}>
          //     <Popup>
          //       MIT <br /> Boston.
          //     </Popup>
          //   </Marker>
          //   <Marker position={[41.3874, 2.1686]}>
          //     <Popup>
          //       Data Urbana <br /> Barcelona.
          //     </Popup>
          //   </Marker>
          //   <Marker position={[45.4642, 9.19]}>
          //     <Popup>
          //       PoliMI <br /> Milan.
          //     </Popup>
          //   </Marker>
          //   <Marker position={[52.0116, 4.3571]}>
          //     <Popup>
          //       TUDelft <br /> Delft.
          //     </Popup>
          //   </Marker>
          // </MapContainer>
          <></>
        )}
      </div>
    </>
  )
}

export default MyMap
