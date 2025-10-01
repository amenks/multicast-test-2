import React from "react"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Page404 = () => {
  return (
    <>
      <Metatags
        title="404 | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <NavBar />
      <div className="h-10" />
      <div id="content-body" className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
          <div className="col-span-2 w-56">
          </div>

          <div className="col-span-9 -mt-2">
            <h3>
              <span className="text-3xl">MultiCAST</span>
              <br />
              <span className="text-xl" id="title">
                404 - Page not found
              </span>
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

export default Page404
