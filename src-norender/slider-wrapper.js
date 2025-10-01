import React from "react"

import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Sliders from "../components/Slider"
// import InEvidence from "../components/Evidence"

const MyMap = () => {
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
        slider wrapper
      </div>
      <NavBar />
      <div id="content-body" className="hidden" />
      <div className="h-10" />
      <div className="h-10" />
      <Sliders id="content-body" />
      <div className="h-10" />
      <div className="h-10" />
      <Footer />
    </>
  )
}

export default MyMap
