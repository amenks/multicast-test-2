import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Participants = () => {
  const location = useLocation()
  const hash = location.hash

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
      if (isInViewport("polimi") && activeSub !== "polimi") {
        setActiveSub("polimi")
      } else {
        if (isInViewport("mit") && activeSub !== "mit") {
          setActiveSub("mit")
        } else {
          if (isInViewport("tu-delft") && activeSub !== "tudelft") {
            setActiveSub("tudelft")
          } else {
            if (isInViewport("data-urbana") && activeSub !== "dataurbana") {
              setActiveSub("dataurbana")
            }
          }
        }
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollPos)
  }
  useEffect(() => {
    if (hash === "#tu-delft") {
      setActiveSub("tudelft")
    }
  }, [hash])
  return (
    <>
      <Metatags
        title="Participants | MultiCAST"
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
              <div style={{ width: "191px" }} className="mb-3">
                <Link to="/about/" className="text-base py-0.5 px-2">
                  About
                </Link>
              </div>
              <div className="text-base  px-2 mb-3" style={{ width: "191px" }}>
                <Link to="/project-overview">Project overview</Link>
              </div>
              <div
                className="text-base bg-mc-green text-white py-0.5 px-2 my-3"
                style={{ width: "191px" }}
                id="title"
              >
                Participants
              </div>
              <div className="text-right">
                <div style={{ width: "191px" }} className="mb-3">
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
                    to="./#data-urbana"
                    className={`${
                      activeSub === "dataurbana" ? "bg-mc-green text-white" : ""
                    } text-base py-0.5 px-2 `}
                  >
                    Data Urbana
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
              </div>
            </div>
          </div>
          <div id="content-body" className="col-span-9 pl-10 pr-4">
            <div className="grid grid-cols-1  gap-2">
              <div id="polimi">
                <div className="h-10" />
                <div className="grid grid-cols-5  gap-2">
                  <div className="col-span-5 w-full h-auto">
                    <p className="m-2 text-2xl">
                      POLITECNICO DI MILANO | <b>PoliMI</b> <br />
                      Dept. of Architecture and Urban Studies | <b>DAStU</b>
                    </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <p className="m-2 text-pp">
                    Politecnico di Milano (PoliMI) is a state
                    scientific-technological university founded in 1863 which
                    trains engineers, architects, and industrial designers.
                    Education is at Bachelor, Master’s, and PhD level. Currently
                    more than 1,400 professors and researchers work at
                    University and 46,324 students’ study in 7 different
                    campuses. PoliMI is one of the leading Italian research
                    centres characterized by the combination of theoretical
                    bases of excellence and first-rate research infrastructures
                    providing the possibility of wide variety of experimental
                    research. PoliMI is organized in 12 Departments including
                    all main areas of engineering, architecture, and industrial
                    design. In 2015 PoliMI achieved the European ‘HR Excellence
                    in Research’ Logo, concerning the implementation of the
                    principles of the European Charter for Researchers and of
                    the Code of Conduct for the Recruitment of Researchers.
                    Politecnico di Milano has been very active in European
                    research projects since the early programmes, with 261
                    projects approved within FP7. Within H2020 programme PoliMI
                    has awarded 363 projects, and is participating in 44 Marie
                    Skłodowska-Curie Actions including the Innovative Training
                    Networks (ITN), Research and Innovation Staff Exchange
                    (RISE) and Individual fellowships, both Global (GF) and
                    European (EF).
                  </p>
                  <p className="m-2 ">
                    The Department of Architecture and Urban Studies (DAStU) is
                    a thematic and interdisciplinary research structure of the
                    Politecnico di Milano established in January 2013. The
                    Department carries out research, design experimentation and
                    training activities in the fields of architectural and urban
                    design, spatial planning and territorial governance, urban
                    policies, conservation and intervention on built and natural
                    heritage. It is one of the most important research
                    structures in Italy in the field of city and territory
                    disciplines, located in a solid international network of
                    centers of excellence and open to forms of cooperation with
                    institutional and social actors at local, national and
                    international level.
                  </p>
                  <p className="m-2 ">
                    W.{" "}
                    <a
                      href="https://www.polimi.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      https://www.polimi.it/
                    </a>
                    <br />
                    W.{" "}
                    <a
                      href="https://www.dastu.polimi.it/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      https://www.dastu.polimi.it/
                    </a>
                  </p>
                </div>
              </div>
              <div id="mit">
                <div className="h-10" />
                <div className="col-span-1 w-full h-auto">
                  <div className="grid grid-cols-5  gap-2">
                    <div className="col-span-5 w-full h-auto">
                      <p className="m-2 mt-1 text-2xl">
                        MASSACHUSETTS INSTITUTE OF TECHNOLOGY | <b>MIT</b>{" "}
                        <br />
                        Dept. of Urban Studies and Planning | <b>DUSP</b>
                      </p>
                    </div>
                  </div>
                  <p className="m-2 text-pp">
                    Massachusetts Institute of Technology (MIT) is a land-grant,
                    sea-grant, and space- grant university, founded in 1861,
                    which provides education at undergraduates and postgraduates
                    level. The institute also encompasses a number of major off-
                    campus facilities, as the MIT Lincoln Laboratory, Bates
                    Center, and Haystack Observatory, as well as affiliated
                    laboratories, namely the Broad and Whitehead Institutes. MIT
                    plays a key role in modern science, engineering,
                    mathematics, and technology, and is widely known for its
                    innovation and academic strength. MIT counts with 12,852
                    employees, 1,067 professors, and 11,520 students, and is
                    organized around 30 departments across five schools and one
                    college, as well as in dozens of centers, labs, and programs
                    that convene experts across disciplines. On-campus research
                    capabilities are enhanced through the work of MIT Lincoln
                    Laboratory, the Woods Hole Oceanographic Institution, active
                    research relationships with industry, and a wide range of
                    global collaborations. In this work, the MIT Libraries serve
                    as a crucial partner and a source of important research in
                    their own right. In 2019, MIT ranked 3rd among the
                    universities around the world by SCImago Institutions
                    Rankings.{" "}
                  </p>
                  <p className="m-2 ">
                    Since its founding nearly 90 years ago, the Department of
                    Urban Studies and Planning at MIT has consistently been
                    rated the premier planning school in the world. It is home
                    to the largest urban planning faculty in the United States
                    and enjoy the advantage of operating within the context of
                    MIT’s culture of innovation and interdisciplinary knowledge
                    creation. The DUSP provides their students with an education
                    that combines rigorous academic study and the excitement of
                    discovery with active engagement in the practice of
                    place-making to understand and solve pressing urban and
                    environmental problems.
                  </p>
                  <p className="m-2 ">
                    W.{" "}
                    <a
                      href="https://web.mit.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      https://web.mit.edu/
                    </a>
                    <br />
                    W.{" "}
                    <a
                      href=" https://dusp.mit.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      {" "}
                      https://dusp.mit.edu/
                    </a>
                  </p>
                </div>
              </div>
              <div id="data-urbana">
                <div className="h-10" />
                <div className="col-span-1 w-full h-auto">
                  <div className="grid grid-cols-5  gap-2">
                    <div className="col-span-5 w-full h-auto">
                      <p className="m-2 text-2xl">
                        DATA URBANA | <b>DataUrbana</b>
                      </p>
                    </div>
                  </div>
                  <p className="m-2 text-pp">
                    DataUrbana is a private Company that focus on promoting
                    access to geospatial data by training professionals to allow
                    them to make the most out of data, to give visibility to
                    projects and facilitate their analysis and use, and to
                    develop automated mapping, urban data exploration and
                    decision-making tools to streamline city planning. The
                    Company relies on an interdisciplinary team made up of
                    professionals from the fields of data science, urban and
                    social sciences. Among the main services provided,
                    DataUrbana provides data and tools to facilitate the
                    execution of urban project and decision making, addressing
                    in particular information about demographics, mobility,
                    accessibility, energy, health, environment, and climate, to
                    name but a few.
                  </p>
                  <p className="m-2 ">
                    W.{" "}
                    <a
                      href="https://dataurbana.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      https://dataurbana.com
                    </a>
                  </p>
                </div>
              </div>
              <div id="tu-delft">
                <div className="h-10" />
                <div className="col-span-1 w-full h-auto">
                  <div className="grid grid-cols-5  gap-2">
                    <div className="col-span-5 w-full h-auto">
                      <p className="m-2 mt-3 text-2xl">
                        DELFT UNIVERSITY OF TECHNOLOGY | <b>TU Delft</b> <br />
                        Dept. of Sustainable Design Engineering | <b>SDE</b>
                      </p>
                    </div>
                  </div>

                  <p className="m-2 text-pp">
                    Delft University of Technology (TU Delft) is one of three
                    technical universities in the Netherlands, renowned for the
                    high quality of research and teaching. With over 25,000
                    students and some 3,000 FTE scientists (of which ca. 250
                    full professors), it is an establishment of national
                    importance and of significant international standing. TU
                    Delft ranks 52nd on the 2019 QS World University Rankings
                    and 58th on the 2019 THE World University Rankings list. In
                    the field of Engineering and Technology TU Delft ranks 17th
                    on the QS World University Rankings 2019. With the new
                    ranking, TU Delft is now the highest ranked Dutch university
                    and the third highest European university of technology. TUD
                    has participated in a large number of research projects
                    under the granting framework of European Union and National
                    Research Fund as both partner and coordinator. Up to now, TU
                    Delft has been involved in 331 projects granted within EU’s
                    H2020, of which 121 are led by TU Delft.
                  </p>
                  <p className="m-2 text-pp">
                    The Department of Sustainable Design Engineering (SDE)
                    focuses on applying responsive technologies on the
                    development and design of new products and services. The
                    dynamics in this field are primarily determined by the pace
                    of change in society, in which new developments in human
                    needs and technological possibilities follow each other
                    rapidly. These include new materials and production
                    techniques, ICT and Internet of Things, healthcare,
                    sustainability and striving towards a circular economy. The
                    department strives to integrate specific technologies in a
                    new, flexible design process.
                  </p>
                  <p className="m-2 ">
                    W.
                    <a
                      href="https://www.tudelft.nl/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      https://www.tudelft.nl/en/
                    </a>
                    <br />
                    W.
                    <a
                      href="https://www.tudelft.nl/io/over-io/afdelingen/sustainable-design-engineering"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-mc-green font-normal"
                    >
                      https://www.tudelft.nl/io/over-io/afdelingen/sustainable-design-engineering
                    </a>
                  </p>
                </div>
              </div>

              <div className="h-40" />
              <div className="h-10" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Participants
