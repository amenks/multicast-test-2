import React from "react"
import { MapContainer } from "react-leaflet/MapContainer"
import { TileLayer } from "react-leaflet/TileLayer"
import { Marker } from "react-leaflet/Marker"
import { Popup } from "react-leaflet/Popup"
// import { useMap } from "react-leaflet/hooks"

const MyMap = () => {
  const position = [47.18585, -37.708]
  return (
    <>
      <MapContainer
        center={position}
        zoom={4}
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
    </>
  )
}

export default MyMap
