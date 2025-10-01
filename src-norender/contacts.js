import React, { useEffect } from "react"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Contacts = ({ data }) => {
  useEffect(() => {
    if (
      document.getElementById("navbar").offsetHeight +
        document.getElementById("search-body").offsetHeight +
        document.getElementById("footer").offsetHeight <
      document.documentElement.clientHeight
    ) {
      document.getElementById("search-body").style.height =
        document.documentElement.clientHeight -
        document.getElementById("navbar").offsetHeight -
        document.getElementById("footer").offsetHeight +
        "px"
    }
  }, [])

  return (
    <>
      <Metatags
        title="MultiCAST - search"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <div id="navbar">
        <NavBar />
      </div>
      <div id="search-body">
        <div className="h-10" />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            <div className="col-span-2"></div>
            <div className="col-span-8 -mt-2 px-4">
              <div className="h-10 " id="multicast-publications" />
              <h3 id="title">
                <span className="text-3xl">Contacts</span>
              </h3>
              <div className="h-10" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="col-span-4">
                  <p className=" text-lg">Nicola Colaninno</p>
                </div>
                <div className="col-span-8">
                  <p className=" text-lg">nicola.colaninno@polimi.it</p>
                </div>
              </div>
              <div className="h-10" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="col-span-4">
                  <p className=" text-lg">Eugenio Morello</p>
                </div>
                <div className="col-span-8">
                  <p className=" text-lg">eugenio.morello@polimi.it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10" />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  )
}

export default Contacts
