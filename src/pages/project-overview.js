import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

// import WordCloud from "../svg/wordcloud1.svg"

const IndexPage = ({ data }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleImageClick = () => {
    setIsFullscreen(prev => !prev)
  }
  return (
    <>
      <Metatags
        title="Project Overview | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <NavBar />
      <div style={{ height: "26px" }} />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
          <div className="col-span-2">
            <div style={{ width: "191px" }} className="mb-3">
              <Link to="/about/" className="text-base py-0.5 px-2">
                About
              </Link>
            </div>
            <div
              className="text-base bg-mc-green text-white px-2 mb-3"
              style={{ width: "191px" }}
              id="title"
            >
              Project overview
            </div>
            <div style={{ width: "191px" }}>
              <Link to="/participants/" className="text-base py-0.5 px-2 mt-3">
                Participants
              </Link>
            </div>
          </div>

          <div id="content-body" className="col-span-9 pl-10 pr-4">
            <div className="h-10" />
            <div className="-mt-2">
              <span className="text-3xl">MultiCAST</span>
              <br />
              <span className="text-xl">
                Multiscale Thermal-related Urban Climate Analysis and Simulation
                Tool
              </span>
            </div>
            <div style={{ height: "20px" }} />

            {/* <GatsbyImage
              image={getImage(data.milan)}
              backgroundColor={false}
              alt="MultiCast"
            /> */}
            {/* <WordCloud style={{maxWidth:"100%", height:"auto"}}/> */}
            <img
              src="../../wordcloud.svg"
              alt="about"
              style={{ width: "100%", height: "auto", padding: "20px 0" }}
              className="border-t border-b border-black"
            />
            <div style={{ height: "20px" }} />
            <p>
              <b>SCIENTIFC AREA</b>
              <br />
              Environmental and Geosciences
            </p>
            <b>DESCRIPTORS</b>
            <p className="indent-12 mb-0">
              Spatial and regional planning, including landscape and land
              management
            </p>
            <p className="indent-12 mb-0">GIS</p>
            <p className="indent-12 mb-0">
              Earth observations from space/remote sensing
            </p>
            <p className="indent-12 mb-0">Urbanization and urban planning</p>
            <p className="indent-12">Cities</p>
            <b>SYNOPSIS</b>
            <p>
              Climate change and global warming are widely recognized as primary
              challenges in the next years. Indeed, despite several
              international agreements, CO2 and global heating continue growing
              and, in urban areas, increase of temperatures and frequency of
              heat waves, threaten health and well-being of citizens. Here, the
              loss of natural areas, morphological and thermal properties of
              materials, critically affect urban climate, causing city to be
              warmer than surrounding areas. This phenomenon, known as Urban
              Heat Island (UHI), needs to be carefully addressed. To address
              public health and well-being, soft mobility and public transport
              are increasingly promoted by Cities. Also, the current sanitary
              contingency has further urged such policies. But, longer and
              hotter summers are a deterrent for citizens to living outdoors.
              MultiCAST will implement a thermal comfort-related urban Decision
              Support System (DSS) to inform pedestrian oriented climate
              planning and design. The DSS will rely on a user-friendly Web-GIS
              as mainstreaming tool to respond the UHI into urban programs,
              policies and instruments. A novel approach to incorporate
              geo-referenced outdoor climate and walkability into pedestrian
              flows modelling will be developed. It will rely on replicable
              methods for automatic acquiring and mapping precise and updated
              thermal related urban climate data, estimate walkability based on
              Google Street View urban-scapes, then introducing climate and
              walkability into street network analysis. MultiCAST will support
              modelling walking routes to interest points such as commuter rail
              and -metro stations, or ‘hot’ and ‘cool’ islands. A simulation
              function will allow estimate scenarios, compare and visualize the
              effects of different urban climates. Three urban areas will be
              tested in Los Angeles, Amsterdam, and Milan. Open climate datasets
              will be available through the Web-GIS. Besides, a framework of GIS
              data, procedures, scripts, and manuals will be provided to allow
              replicate the methodology.
            </p>
            <div className="h-3" />
            <p className="underline">
              <a
                href="https://cordis.europa.eu/project/id/101028035"
                target="_blank"
                rel="noopener noreferrer"
              >
                The project on CORDIS
              </a>
            </p>
            <div className="h-3" />

            <p>
              <b>METHODOLOGY OVERVIEW</b>
            </p>
            <div
              role="button"
              tabIndex="0"
              className={
                isFullscreen
                  ? "fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center cursor-zoom-out"
                  : "cursor-zoom-in"
              }
              style={
                isFullscreen
                  ? { top: 0, left: 0, width: "100vw", height: "100vh" }
                  : {}
              }
              onClick={handleImageClick}
              onKeyDown={() => {
                return null
              }}
            >
              <GatsbyImage
                image={getImage(data.methodology)}
                backgroundColor={false}
                alt="social midia portfolio "
                style={
                  isFullscreen
                    ? { maxWidth: "90vw", maxHeight: "90vh" }
                    : { width: "100%", height: "auto" }
                }
              />
            </div>
            <div className="h-10" />
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
    methodology: file(relativePath: { eq: "Methodology-final.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED)
        id
      }
    }
  }
`
