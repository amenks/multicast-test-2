import React from "react"
import { FeatureLayer, Map, LayerList, Zoom } from "react-ags-maps"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <>
      <Metatags />
      <NavBar />
      <div className="h-10" />
      <div id="content-body" className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-3" />

          <div className="col-span-6">
            <h3 className="font-semibold" id="title">
              Beach
            </h3>
            <div className="h-10" />
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "800px" }}>
        <Map
          id="basicFeatureLayers"
          centerX={-118.825567113509}
          centerY={34.0175755579798}
          zoom={13}
          viewProps={{ popup: { defaultPopupTemplateEnabled: true } }}
          mapProps={{ basemap: "streets-vector" }}
        >
          <Zoom />
          <LayerList position="bottom-right" />
          <FeatureLayer url="https://services7.arcgis.com/cWnDNZkSXPW3WCF9/arcgis/rest/services/my_points_2/FeatureServer/0" />
        </Map>
      </div>
      <Footer />
    </>
  )
}

export default IndexPage
