import React from "react"
import { Link } from "gatsby"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const UnderConstruction = () => {
  return (
    <>
      <Metatags
        title="Remote Sensing | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <NavBar />
      <div className="h-10" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
          <div className="col-span-3 w-56">
            <div
              className="text-base bg-mc-green text-white px-2 mb-3"
              style={{ width: "191px" }}
              id="title"
            >
              Remote sensing
            </div>
            <div style={{ width: "191px" }} className=" mb-3">
              <Link
                to="/gis-spatial-analysis/"
                className="text-base py-0.5 px-2"
              >
                GIS/Spatial Analysis
              </Link>
            </div>
            <div style={{ width: "191px" }} className=" mb-3">
              <Link to="/urban-climate/" className="text-base py-0.5 px-2 mb-3">
                Urban climate
              </Link>
            </div>
          </div>

          <div id="content-body" className="col-span-8 -mt-2">
            <h3>
              <span className="text-3xl">MultiCAST</span>
              <br />
              <span className="text-xl">Page under construction.</span>
            </h3>

            <div className="h-10" />
          </div>
        </div>
      </div>
      <div className="h-10" />
      <Footer />
    </>
  )
}

export default UnderConstruction
