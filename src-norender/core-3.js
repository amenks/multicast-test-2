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
          <div className="col-span-12">
            <h3 className="font-semibold" id="title">
              Europe NUTS 3 Demographics
            </h3>
            <div className="h-10" />
          </div>
        </div>
      </div>
      <div className="container mx-auto h-screen">
        <Map
          id="basicFeatureLayers"
          centerX={2.1686}
          centerY={41.3874}
          zoom={13}
          viewProps={{ popup: { defaultPopupTemplateEnabled: true } }}
          mapProps={{ basemap: "streets-vector" }}
        >
          <Zoom />
          <LayerList position="bottom-right" />
          <FeatureLayer url="https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/Europe_NUTS_3_Demographics/FeatureServer/0" />
        </Map>
      </div>
      <Footer />
    </>
  )
}

export default IndexPage
