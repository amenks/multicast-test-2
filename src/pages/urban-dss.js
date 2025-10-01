import React from "react"
import { MapContainer } from "react-leaflet/MapContainer"
import { TileLayer } from "react-leaflet/TileLayer"
import { Marker } from "react-leaflet/Marker"
import { MilanIcon } from "../icons/MilanIcon"
import { Popup } from "react-leaflet/Popup"
// import { useMap } from "react-leaflet/hooks"

import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const MyMap = () => {
  const position = [47.18585, -37.708]

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
      <div className="container mx-auto text-center text-red-700 font-semibold">
        <p />
        <p>Under Construction</p>
      </div>
      <div id="content-body">
        {typeof window !== "undefined" ? (
          <MapContainer
            center={position}
            zoom={3.2}
            scrollWheelZoom={true}
            style={{ maxWidth: "100%", height: "900px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              opacity={1}
              zIndex={10}
            />
            <Marker position={[42.3601, -71.0589]}>
              <Popup>
                MIT <br /> Boston.
              </Popup>
            </Marker>
            <Marker position={[41.3874, 2.1686]}>
              <Popup>
                Data Urbana <br /> Barcelona.
              </Popup>
            </Marker>
            <Marker position={[45.4642, 9.19]} icon={MilanIcon}>
              <Popup>
                PoliMI <br /> Milan.
              </Popup>
            </Marker>
            <Marker position={[34.0522, -118.2437]}>
              <Popup>Los Angeles.</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  )
}

export default MyMap
