import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const IndexPage = ({ data }) => {
  const router = useLocation()

  const [activeSub, setActiveSub] = useState("")

  useEffect(() => {
    if (router.hash === "") {
      setActiveSub("")
    }
  }, [router])

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
    if (typeof window !== "undefined" && !window.scrollY) {
      setActiveSub("")
    }
    if (isInViewport("polimi-body")) {
      setActiveSub("polimi")
    }
    if (isInViewport("mit-body")) {
      setActiveSub("mit")
    }
    if (isInViewport("tu-delft-body")) {
      setActiveSub("tudelft")
    }
    if (isInViewport("data-urbana-body")) {
      setActiveSub("dataurbana")
    }
  }

  // useEffect(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollPos)
  }
  // }, [])
  return (
    <>
      <Metatags
        title="People | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <NavBar />
      <div style={{ height: "26px" }} id="polimi" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
          <div className="col-span-2 text-right " id="contents-container">
            <div
              id="submenu"
              className="hidden md:block md:absolute bg-white z-20"
            >
              <div
                className={`bg-mc-green text-white text-base  px-2 text-left mb-3`}
                style={{ width: "191px" }}
                id="title"
              >
                People
              </div>
              <div style={{ width: "191px" }} className=" mb-3">
                <Link
                  to="./#polimi"
                  className={`${
                    activeSub === "polimi" ? "bg-mc-green text-white" : ""
                  } text-base py-0.5 px-2 `}
                >
                  PoliMI
                </Link>
              </div>
              <div style={{ width: "191px" }} className="mb-3">
                <Link
                  to="./#mit"
                  className={`${
                    activeSub === "mit" ? "bg-mc-green text-white" : ""
                  } text-base py-0.5 px-2 `}
                >
                  MIT
                </Link>
              </div>
              <div style={{ width: "191px" }} className="mb-3">
                <Link
                  to="./#tu-delft"
                  className={`${
                    activeSub === "tudelft" ? "bg-mc-green text-white" : ""
                  } text-base py-0.5 px-2 `}
                >
                  TU Delft
                </Link>
              </div>
              <div style={{ width: "191px" }} className="mb-3">
                <Link
                  to="./#data-urbana"
                  className={`${
                    activeSub === "dataurbana" ? "bg-mc-green text-white" : ""
                  } text-base py-0.5 px-2 `}
                >
                  Data Urbana
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-9  pl-10 pr-4">
            <div className="h-10" />
            <div id="content-body">
              <div
                id="polimi-body"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className=" col-span-2">
                  <p className="m-2 text-2xl">
                    POLITECNICO DI MILANO | <b>PoliMI</b>
                  </p>
                </div>
                <div className="col-span-1 w-full h-auto  -2xl">
                  <GatsbyImage
                    image={getImage(data.colaninno)}
                    backgroundColor={false}
                    alt="Nicola Colaninno"
                    className="aspect-square max-w-max"
                  />
                  <p className="my-2 text-mc-green">
                    <b className="text-title">Nicola COLANINNO</b>
                    <br /> Principal Investigator - PoliMI
                  </p>
                  <p className="my-2 text-pp">
                    Assistant Professor in GIScience and Urban Planning at
                    Politecnico di Milano, Dept. of Architecture and Urban
                    Studies (DAStU). PhD in Urban and Architectural Management
                    and Valuations at Polytechnic University of Catalonia (UPC).
                    His research interests lay on applied GIScience and Remote
                    Sensing for Urban Science and Planning, with special
                    emphasis on Urban Climate. H2020 Marie Skłodowska-Curie
                    Fellow at the Massachusetts Institute of Technology (MIT),
                    Dept. of Urban Studies and Planning (DUSP).
                  </p>
                </div>
                <div className="col-span-1 w-full h-auto  -2xl">
                  <GatsbyImage
                    image={getImage(data.morello)}
                    backgroundColor={false}
                    alt="Eugenio MORELLO"
                    className=" aspect-square max-w-max"
                  />
                  <p className="my-2 text-mc-green">
                    <b className="text-title ">Eugenio MORELLO</b>
                    <br /> Supervisor - PoliMI
                  </p>
                  <p className="my-2 text-pp">
                    Associate Professor in Urban Planning at Politecnico di
                    Milano, and coordinator and research scientist of the&nbsp;
                    <a
                      href="https://www.labsimurb.polimi.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      Laboratorio di Simulazione Urbana Fausto Curti
                    </a>
                    , Dept. of Architecture and Urban Studies (DAStU). Ph.D. in
                    environmental design and building technology and a Roberto
                    Rocca postdoctoral fellow at the Human Space Lab (Polimi)
                    and at the SENSEable City Lab (MIT). His research lays on
                    the interplay between urban design and environmental
                    quality, resilience and adaptation to climate change, smart
                    cities and sharing society.
                  </p>
                </div>
                <div className="w-full h-auto  -2xl mb-10">
                  <GatsbyImage
                    image={getImage(data.zendeli)}
                    backgroundColor={false}
                    alt="Doruntina ZENDELI"
                    className="m-2 aspect-square max-w-max"
                  />
                  <p className="my-2 text-mc-green">
                    <b className="text-title ">Doruntina ZENDELI</b>
                    <br /> PoliMI
                  </p>
                  <p className="my-2 text-pp">
                    Architect and urban planner. Master of Science with honours
                    in Urban Planning and Policy Design from Politecnico di
                    Milano. Erasmus exchange studies at University College
                    London - Bartlett School of Planning. Currently Ph.D.
                    candidate in Urban Planning, Design and Policy at &nbsp;
                    <a
                      href="https://www.labsimurb.polimi.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      Laboratorio di Simulazione Urbana Fausto Curti
                    </a>
                    , Department of Architecture and Urban Studies (DAStU),
                    Politecnico di Milano. PhD research focuses on the effects
                    of outdoor urban climate on pedestrian comfort, health and
                    wellbeing.
                  </p>
                </div>
                <div className="w-full h-auto  -2xl mb-10">
                  <GatsbyImage
                    image={getImage(data.mahmoud)}
                    backgroundColor={false}
                    alt="Israa MAHMOUD"
                    className="m-2 aspect-square max-w-max"
                  />
                  <p className="my-2 text-mc-green">
                    <b className="text-title ">Israa MAHMOUD</b>
                    <br /> PoliMI
                  </p>
                  <p className="my-2 text-pp">
                    Assistant Professor in Urban And Regional Planning,
                    Architect and Urban Planner, Ph.D. in urban regeneration.
                    Early-stage, and then experienced researcher in a H2020
                    MARIE-CURIE- RISE ACTION, MAPS-LED project. Currently,
                    Post-Doc research fellow at the &nbsp;
                    <a
                      href="https://www.labsimurb.polimi.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      Laboratorio di Simulazione Urbana Fausto Curti
                    </a>
                    , Dept. of Architecture and Urban Studies (DAStU),
                    Politecnico di Milano. Part of the research team leader on
                    the H2020 Project Clever Cities, and expert of co-creation
                    guidance for cities to implement Nature-based solutions
                    (NBS) in socially inclusive urban regeneration processes.
                  </p>
                </div>
              </div>

              <div className="h-10" id="mit" />
              <div
                id="mit-body"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="col-span-1 md:col-span-2 " />
                <div className=" col-span-2">
                  <p className="m-2 text-2xl">
                    MASSACHUSETTS INSTITUTE OF TECHNOLOGY | <b>MIT</b>
                  </p>
                </div>
                <div className="w-full h-auto  -2xl mb-10">
                  <GatsbyImage
                    image={getImage(data.sevtsuk)}
                    backgroundColor={false}
                    alt="Andres SEVTSUK"
                    className="m-2 aspect-square max-w-max"
                  />
                  <p className="my-2 text-mc-green">
                    <b className="text-title ">Andres SEVTSUK</b>
                    <br /> Supervisor - MIT
                  </p>
                  <p className="my-2 text-pp">
                    Associate Professor of Urban Science and Planning at the
                    Department of Urban Studies and Planning (DUSP), where he
                    also leads the &nbsp;
                    <a
                      href="http://cityform.mit.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      City Form Lab
                    </a>
                    . His work bridges urban design with spatial analysis and
                    urban technology. He has collaborated with a number of city
                    governments, international organizations, planning practices
                    and developers on urban designs, plans and policies in both
                    developed and rapidly developing urban environments. He is
                    the author of the Urban Network Analysis toolbox for
                    pedestrian flows modelling.
                  </p>
                </div>
              </div>
              <div className="h-10" id="tu-delft" />
              <div
                id="tu-delft-body"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="col-span-1 md:col-span-2 " />
                <div className=" col-span-2">
                  <p className="m-2 text-2xl">
                    DELFT UNIVERSITY OF TECHNOLOGY | <b>TU Delft</b>
                  </p>
                </div>
                <div className="w-full h-auto  -2xl mb-10">
                  <GatsbyImage
                    image={getImage(data.bozzon)}
                    backgroundColor={false}
                    alt="Alessandro BOZZON"
                    className="m-2 aspect-square max-w-max"
                  />
                  <p className="my-2 text-mc-green">
                    <b className="text-title ">Alessandro BOZZON</b>
                    <br /> Supervisor - TU Delft
                  </p>
                  <p className="my-2 text-pp">
                    Professor of Human-Centered Artificial Intelligence at the
                    Department of Sustainable Design Engineering (SDE) of the
                    Faculty of Industrial Design Engineering (IDE); and a
                    part-time professor at the Dept. of Software Technology of
                    the Faculty of Electrical Engineering, Mathematics, and
                    Computer Science (EEMCS) of Delft University of Technology.
                    As of November 2020, he serves as Head of the SDE
                    Department. His research lies at the intersection of
                    human-computer interaction, human computation, user
                    modelling, and machine learning.
                  </p>
                </div>
              </div>

              <div className="h-10" id="data-urbana" />
              <div
                id="data-urbana-body"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="col-span-1 md:col-span-2 " />
                <div className=" col-span-2">
                  <p className="m-2 text-2xl">
                    DATA URBANA | <b>DataUrbana</b>
                  </p>
                </div>
                <div className="w-full h-auto  -2xl mb-10">
                  <GatsbyImage
                    image={getImage(data.davila)}
                    backgroundColor={false}
                    alt="Daniel DAVILA"
                    className="m-2 aspect-square max-w-max"
                  />
                  <p className="my-2 text-mc-green">
                    <b className="text-title ">Daniel DAVILA</b>
                    <br /> Supervisor - Data Urbana
                  </p>
                  <p className="my-2 text-pp">
                    Founder and CEO of DataUrbana. Master in Urban Planning and
                    Design by the Universitat Politécnica de Catalunya (UPC) .
                    His interest lays in the democratisation of urban data by
                    making both the data and its analysis accessible to all.
                    Specialised in GeoSpatial Data Analysis and Engineering.
                  </p>
                </div>
                <div className="w-full h-auto  -2xl mb-10">
                  <GatsbyImage
                    image={getImage(data.rodriguez)}
                    backgroundColor={false}
                    alt="Florencia RODRIGUEZ"
                    className="m-2 aspect-square max-w-max"
                  />
                  <p className="my-2 text-mc-green">
                    <b className="text-title ">Florencia RODRIGUEZ</b>
                    <br /> Data Urbana
                  </p>
                  <p className="my-2 text-pp">
                    Spatial Data Analyst at DataUrbana. Master in Urban Planning
                    and Design by the Universitat Politécnica de Catalunya (UPC)
                    and Delft University of Technology (TU Delft). With
                    experience in the public sector in the Department for
                    Planning and Infrastructure of the Municipality of Vicente
                    López in Buenos Aires, Argentina.
                  </p>
                </div>
                <div className="w-full h-auto  -2xl mb-10">
                  <GatsbyImage
                    image={getImage(data.meza)}
                    backgroundColor={false}
                    alt="Sandra MEZA"
                    className="m-2 aspect-square max-w-max"
                  />
                  <p className="my-2 text-mc-green">
                    <b className="text-title ">Sandra MEZA</b>
                    <br /> Data Urbana
                  </p>
                  <p className="my-2 text-pp">
                    Researcher at Data Urbana and PhD Candidate in Urban and
                    Architectural Management and Valuation at Polytechnic
                    University of Catalonia (UPC). Former Specialist in
                    Infrastructure and Territorial Management at the Ministry of
                    Education in Peru, where coordinated and participated in
                    projects focused in the improvement of the planning of
                    educational services.
                  </p>
                </div>
              </div>

              <div />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    morello: file(relativePath: { eq: "people/Eugenio-Morello.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 210)
        id
      }
    }
    colaninno: file(relativePath: { eq: "people/Nicola-Colaninno.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 210)
        id
      }
    }
    zendeli: file(relativePath: { eq: "people/Doruntina-Zendeli.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 210)
        id
      }
    }
    mahmoud: file(relativePath: { eq: "people/Israa-Mahmoud.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 210)
        id
      }
    }
    sevtsuk: file(relativePath: { eq: "people/Andres-Sevtsuk.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 210)
        id
      }
    }
  }
`
