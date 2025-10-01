import React from "react"

import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import HomeCarousel from "../components/HomeCarousel"
import InEvidence from "../components/Evidence"

const IndexPage = ({ data }) => {
  return (
    <>
      <Metatags
        title="MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <div id="title" className="hidden">
        MultiCAST home
      </div>
      <div id="content-body" className="hidden" />
      <NavBar />

      <HomeCarousel />
      <div className="mx-auto" style={{ maxWidth: "1425px" }}>
        <InEvidence />
      </div>
      <div className="h-10" />
      <div className="h-10" />
      <Footer />
    </>
  )
}

export default IndexPage
