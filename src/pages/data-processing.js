import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import "../css/data-processing.css"

const DataProcessing = data => {
  const pageData = [
    {
      title: "Remote Sensing | Data",
      id: "remote-sensing",
      sats: [
        {
          title: "LANDSAT Mission",
          line1: "Multispectral Data (30m)",
          line2: "Panchromatic Data (15m)",
          line3: "Thermal Data (30m)",
          link: "/satellites/landsat-mission",
          image: "L9",
        },
        {
          title: "ASTER | Terra",
          line1: "Multispectral Data (30m and 15m)",
          line2: "Thermal Data (90m)",
          line3: "",
          link: "/satellites/aster-mission",
          image: "TerraAster",
        },
        {
          title: "MODIS | Terra-Aqua",
          line1: "Multispectral Data (250 and 500m)",
          line2: "Thermal Data (1000m)",
          line3: "",
          link: "/satellites/modis-mission",
          image: "AquaModis",
        },
        {
          title: "SENTINEL Mission",
          line1: "Multispectral Data (10, 20 and 60m)",
          line2: "Multispectral Data (300m)",
          line3: "Thermal Data (1000m)",
          link: "/satellites/sentinel-mission",
          image: "Sentinel2",
        },
        {
          title: "PlanetScope",
          line1: "Multispectral Imagery (3-4m)",
          line2: "",
          line3: "",
          link: "/satellites/planetscope-mission",
          image: "PlanetScope",
        },
        {
          title: "LiDAR",
          line1: "Light Detection and Ranging",
          line2: "",
          line3: "",
          link: "/satellites/lidar-light-detection-and-ranging",
          image: "LiDAR",
        },
      ],
    },
    {
      title: "Remote Sensing | Processing",
      id: "remote-sensing-processing",
      sats: [
        {
          title: "Land Cover Classification",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/land-cover-classification",
          image: "LandCover",
        },
        {
          title: "Spectral Vegetation Indices",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/spectral-vegetation-indices",
          image: "SpectralVegetation",
        },
        {
          title: "Land Surface Temperature",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/land-surface-temperature",
          image: "LandSurface",
        },
        {
          title: "Digital Elevation Models",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/digital-elevation-models",
          image: "DigitalElevation",
        },
        {
          title: "Digital Surface Models",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/digital-surface-models",
          image: "DigitalSurface",
        },
        {
          title: "Tree Canopy Cover",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/tree-canopy-cover",
          image: "TreeCanopy",
        },
      ],
    },
    {
      title: "GIS Data",
      id: "gis-data",
      sats: [
        {
          title: "Land Use Land Cover",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/land-use-land-cover",
          image: "LandUserCover",
        },
        {
          title: "Topographic Data",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/topographic-and-planimetric-data",
          image: "DBT",
        },
        {
          title: "Street Networks",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/street-networks",
          image: "Streets",
        },
      ],
    },
    {
      title: "GIS | Spatial Analysis",
      id: "gis-spatial-analysis",
      sats: [
        {
          title: "Socio-Demographic Analysis",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/socio-demographic-analysis",
          image: "SocioDemo",
        },
        {
          title: "Street Network Analysis",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/street-network-analysis",
          image: "StreetNetwork",
        },
        {
          title: "Walk-Accessibility",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/walk-accessibility",
          image: "WalkAccess",
        },
      ],
    },
    {
      title: "Urban Climate",
      id: "urban-climate",
      sats: [
        {
          title: "Near-surface Air Temperature Modelling",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/near-surface-air-temperature",
          image: "NSAT",
        },
        {
          title: "Urban Heat Island Assessment",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/urban-heat-island-uhi",
          image: "UHI",
        },
        {
          title: "Local Climate Zones",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/local-climate-zones-lcz",
          image: "LCZ",
        },
        {
          title: "City-scale Mean Radiant Temperature",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/city-scale-mean-radiant-temperature",
          image: "TMRT",
        },
        {
          title: "City-scale UTCI",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/city-scale-universal-thermal-climate-index",
          image: "UTCI",
        },
        {
          title: "City-scale Sky View Factor",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/city-scale-sky-view-factor",
          image: "SVF",
        },
        {
          title: "City-scale Shadow Casting",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/city-scale-shadow-casting",
          image: "Shadow",
        },
        {
          title: "Solar Radiation",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/solar-radiation",
          image: "Radiation",
        },
        {
          title: "Thermographic imagery",
          line1: "",
          line2: "",
          line3: "",
          link: "/satellites/thermographic-imagery",
          image: "Thermography",
        },
      ],
    },
  ]

  const [activeSub, setActiveSub] = useState("")

  const isInViewport = id => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(id)
      if (element) {
        var bounding = element.getBoundingClientRect()
        if (bounding.top > 0 && bounding.top < 67) {
          return true
        } else {
          return false
        }
      }
    }
  }

  const scrollPos = () => {
    if (typeof document !== "undefined") {
      if (document.getElementById("submenu")) {
        if (window.pageYOffset > 124) {
          document.getElementById("submenu").style.top =
            24 + window.pageYOffset + "px"
        } else {
          document.getElementById("submenu").style.top = "inherit"
        }
      }
    }
    if (
      typeof window !== "undefined" &&
      window.scrollY === 0 &&
      activeSub !== ""
    ) {
      setActiveSub("")
    } else {
      if (isInViewport("remote-sensing") && activeSub !== "remoteSensing") {
        setActiveSub("remoteSensing")
      } else {
        if (
          isInViewport("remote-sensing-processing") &&
          activeSub !== "remoteSensingProcessing"
        ) {
          setActiveSub("remoteSensingProcessing")
        } else {
          if (isInViewport("gis-data") && activeSub !== "gisData") {
            setActiveSub("gisData")
          } else {
            if (
              isInViewport("gis-spatial-analysis") &&
              activeSub !== "gisSpatialAnalysis"
            ) {
              setActiveSub("gisSpatialAnalysis")
            } else {
              if (
                isInViewport("urban-climate") &&
                activeSub !== "urbanClimate"
              ) {
                setActiveSub("urbanClimate")
              }
            }
          }
        }
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollPos)
  }

  return (
    <>
      <Metatags
        title="Data Processing  | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <NavBar />
      <div style={{ height: "26px" }} />
      <div className="container mx-auto" onScroll={scrollPos()}>
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
          <div className="col-span-2" id="contents-container">
            <div
              id="submenu"
              className="hidden md:block md:absolute bg-white z-20"
            >
              <div
                // className="text-base bg-mc-green text-white py-0.5 px-2 my-3"
                className="bg-mc-green text-white text-base  px-2 text-left mb-3"
                style={{ width: "191px" }}
                id="title"
              >
                Data | Analysis
              </div>
              <div className="text-right">
                <div style={{ width: "191px" }} className="mb-3">
                  <Link
                    to="./#remote-sensing"
                    className={`${
                      activeSub === "remoteSensing"
                        ? "bg-mc-green text-white"
                        : ""
                    } text-base py-0.5 px-2 `}
                  >
                    RS | Data
                  </Link>
                </div>
                <div style={{ width: "191px" }} className="mb-3">
                  <Link
                    to="./#remote-sensing-processing"
                    className={`${
                      activeSub === "remoteSensingProcessing"
                        ? "bg-mc-green text-white"
                        : ""
                    } text-base py-0.5 px-2 `}
                  >
                    RS | Processing
                  </Link>
                </div>
                <div style={{ width: "191px" }} className="mb-3">
                  <Link
                    to="./#gis-data"
                    className={`${
                      activeSub === "gisData" ? "bg-mc-green text-white" : ""
                    } text-base py-0.5 px-2 `}
                  >
                    GIS | Data
                  </Link>
                </div>
                <div style={{ width: "191px" }} className="mb-3">
                  <Link
                    to="./#gis-spatial-analysis"
                    className={`${
                      activeSub === "gisSpatialAnalysis"
                        ? "bg-mc-green text-white"
                        : ""
                    } text-base py-0.5 px-2 `}
                  >
                    GIS | Spatial Analysis
                  </Link>
                </div>
                <div style={{ width: "191px" }} className="mb-3">
                  <Link
                    to="./#urban-climate"
                    className={`${
                      activeSub === "urbanClimate"
                        ? "bg-mc-green text-white"
                        : ""
                    } text-base py-0.5 px-2 `}
                  >
                    Urban Climate
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="content-body" className="col-span-9 pl-10 pr-4">
            <div className="grid grid-cols-1  gap-2">
              {pageData.map((element, k) => {
                return (
                  <div key={k}>
                    <div className="grid grid-cols-3  gap-2">
                      <div id={element["id"]} className="col-span-3">
                        <div className="h-10" />
                        <p className="-mt-2 text-3xl">{element["title"]}</p>
                      </div>
                      {element["sats"].map((sat, ka) => {
                        return (
                          <div key={ka}>
                            <a
                              href={sat["link"] !== "" ? sat["link"] : "./"}
                              target={sat["link"] === "" ? "_blank" : ""}
                              rel="noopener noreferrer"
                              className="hover:text-mc-green"
                              aria-label={`toggle${ka}`}
                              data-value={`toggle${ka}`}
                            >
                              <div className=" static">
                                <div className="m-2 relative">
                                  <div
                                    className={`${
                                      sat["link"] === ""
                                        ? "img-container absolute bottom-0 left-0 block w-full h-full z-10"
                                        : "img-container-clear absolute bottom-0 left-0 block w-full h-full z-10"
                                    } `}
                                  />
                                  <GatsbyImage
                                    image={getImage(data.data[sat["image"]])}
                                    backgroundColor={false}
                                    alt={sat["title"]}
                                    className={`${
                                      sat["link"] !== "" ? "green" : "soon"
                                    }  aspect-square max-w-max `}
                                  />
                                </div>
                              </div>
                              <div
                                className="text-center text-pp mx-2"
                                style={{ lineHeight: "normal" }}
                              >
                                <p className="   font-medium mb-0">
                                  {sat["title"]}
                                </p>
                                <p className="mb-0 text-sm font-normal">
                                  {sat["line1"]}
                                </p>
                                <p className="mb-0 text-sm font-normal">
                                  {sat["line2"]}
                                </p>
                                <p className="mb-0 text-sm font-normal">
                                  {sat["line3"]}
                                </p>
                              </div>
                            </a>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}

              <div className="h-10" />
              <div className="h-10" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DataProcessing

export const query = graphql`
  {
    L9: file(relativePath: { eq: "data-analysis/L8.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    L8: file(relativePath: { eq: "data-analysis/L8.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    L7: file(relativePath: { eq: "data-analysis/L7.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    TerraAster: file(
      relativePath: { eq: "data-analysis/Terra_ASTER_MODIS.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    AquaModis: file(relativePath: { eq: "data-analysis/Aqua_MODIS.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    Sentinel2: file(relativePath: { eq: "data-analysis/Sentinel-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    Sentinel3: file(relativePath: { eq: "data-analysis/Sentinel-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    PlanetScope: file(relativePath: { eq: "data-analysis/PLANET.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    LiDAR: file(relativePath: { eq: "data-analysis/LiDAR.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    StereoImages: file(relativePath: { eq: "data-analysis/StereoImages.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    LandCover: file(relativePath: { eq: "data-analysis/Land_Cover.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    SpectralVegetation: file(relativePath: { eq: "data-analysis/SVF.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    LandSurface: file(relativePath: { eq: "data-analysis/LST.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    DigitalElevation: file(relativePath: { eq: "data-analysis/DEM.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    DigitalSurface: file(relativePath: { eq: "data-analysis/DSM.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    TreeCanopy: file(relativePath: { eq: "data-analysis/Tree_Canopy.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    LandUserCover: file(relativePath: { eq: "data-analysis/Land_Use.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    DBT: file(relativePath: { eq: "data-analysis/DBT.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    Streets: file(relativePath: { eq: "data-analysis/Streets.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    SocioDemo: file(relativePath: { eq: "data-analysis/Socio-Demo.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    StreetNetwork: file(
      relativePath: { eq: "data-analysis/StreetNetwork.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    NSAT: file(relativePath: { eq: "data-analysis/NSAT.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    UHI: file(relativePath: { eq: "data-analysis/UHI.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    LCZ: file(relativePath: { eq: "data-analysis/LCZ.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    TMRT: file(relativePath: { eq: "data-analysis/Tmrt.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    UTCI: file(relativePath: { eq: "data-analysis/UTCI.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    SVF: file(relativePath: { eq: "data-analysis/SVF.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    Shadow: file(relativePath: { eq: "data-analysis/Shadow.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    Radiation: file(relativePath: { eq: "data-analysis/Radiation.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    Thermography: file(relativePath: { eq: "data-analysis/Thermography.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
    WalkAccess: file(relativePath: { eq: "data-analysis/Walk-Access.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 240)
        id
      }
    }
  }
`
