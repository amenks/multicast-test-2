import * as React from "react"
import { Map } from "@esri/react-arcgis"
import { loadModules } from 'esri-loader';

const IndexPage = () => {
  console.log(loadModules)
  loadModules(['esri/Graphic']).then(([Graphic]) => {
  console.log(Graphic)
  })
  return (
    <Map
      mapProperties={{ basemap: "streets-vector" }}
      viewProperties={{ center: [2.1686, 41.3874], zoom: 13 }}
      loaderOptions={{ version: "4.17", css: true }}
      style={{ width: '100vw', height: '100vh' }}
    />
  )
}

export default IndexPage
