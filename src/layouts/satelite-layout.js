import React from "react"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const SateliteLayout = ({ children, ...props }) => {
  return (
    <>
      <Metatags
        title={`MultiCAST - ${props.metaTitle}`}
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <NavBar />
      <div style={{ height: "26px" }} />
      <div id="content-body" className="container mx-auto">
        <div id="satellite">
          <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
            <div className="col-span-1" />
            <div className="col-span-9">
              <div className="h-10" />
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10" />
      <Footer />
    </>
  )
}

export default SateliteLayout
