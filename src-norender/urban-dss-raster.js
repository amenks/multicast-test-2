import React from "react"
import { MapContainer } from "react-leaflet/MapContainer"
import { TileLayer } from "react-leaflet/TileLayer"
import { Marker } from "react-leaflet/Marker"
import { Popup } from "react-leaflet/Popup"
// import { useMap } from "react-leaflet/hooks"

import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer-map"

const MyMap = () => {
  const position = [45.47786558072717, 9.219768225461412]

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
        Urban DSS raster
      </div>
      <NavBar />
      <div id="content-body">
        {typeof window !== "undefined" ? (
          <MapContainer
            center={position}
            zoom={14}
            scrollWheelZoom={true}
            style={{ maxWidth: "100%", height: "900px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              opacity={1}
              zIndex={10}
            />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="http://local.andremenks.net/gis-raster/Milan3/{z}/{x}/{y}.png"
              opacity={1}
              zIndex={30}
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
            <Marker position={[45.4642, 9.19]}>
              <Popup>
                PoliMI <br /> Milan.
              </Popup>
            </Marker>
            <Marker position={[52.0116, 4.3571]}>
              <Popup>
                TUDelft <br /> Delft.
              </Popup>
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
