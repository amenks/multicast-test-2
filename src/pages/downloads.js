import React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Icon } from "react-icons-kit"
import { filePdfO } from "react-icons-kit/fa/filePdfO"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const IndexPage = data => {
  return (
    <>
      <Metatags
        title="Downloads | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <div id="title" className="hidden">
        Donwloads
      </div>
      <NavBar />
      <div className="h-10" />
      <div id="content-body" className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-3" />

          <div className="col-span-6">
            <a href="/pdfs/Colaninno-UHI-AND-COMFORT-SHORT.pdf" download
            aria-label={`toggle`}
            data-value={`toggle`}
            >
              <div className="w-full h-auto bg-gray-200 -2xl drop-shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="w-8 h-auto m-4">
                    <Icon icon={filePdfO} size={"100%"} />
                  </div>
                  <div className="col-span-9 m-4">
                    <b>Urban Heat Island and Comfort</b>&nbsp;
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="h-10" />
      <Footer />
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    milan: file(relativePath: { eq: "milan.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 768)
        id
      }
    }
    methodology: file(relativePath: { eq: "Methodology.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 768)
        id
      }
    }
  }
`
