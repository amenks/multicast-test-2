import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"

import "../css/navbar.css"

// import Logo from "../svg/logo.svg"
import LogoPolimi from "../svg/polimi-logo"

const Header = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[1]

  const mobile =
    typeof window !== "undefined"
      ? window.innerWidth < 992
        ? true
        : false
      : false

  const [isExpanded, toggleExpansion] = useState(false)

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  if (windowWidth) {
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className="container mx-auto ">
        <nav className="flex flex-wrap items-center justify-between pr-6 py-2 mx-auto">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img
                src="../../logo-v5.svg"
                alt="MultiCAST"
                style={{ width: "346px", height: "auto", maxWidth: "100%" }}
              />
            </Link>
          </div>
          <div className="flex items-center flex-shrink-0">
            {!mobile ? (
              <>
                <div
                  className={`${path === "." ? `float-right` : `float-right`}`}
                >
                  <div
                    className="text-center"
                    style={{ width: "172px", height: "auto" }}
                  >
                    <a
                      href="https://www.polimi.it/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="PolimiS"
                    >
                      <LogoPolimi />
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </nav>
        <nav className="language-menu d-flex float-right mt-0.5 md:mt-2"></nav>
      </div>
      <div
        className="bg-black text-white sticky top-0"
        style={{ zIndex: 5500 }}
      >
        <div className="container mx-auto text-base">
          <nav>
            <div className="block lg:hidden ">
              <div className="p-1">
                <button
                  onClick={() => toggleExpansion(!isExpanded)}
                  className="flex items-center px-3 py-2 text-grey-600 border border-grey-600  hover:text-grey-600 hover:border-grey-600"
                  type="button"
                  aria-label="toggle"
                  data-value="toggle"
                >
                  <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`${isExpanded ? `block` : `hidden`}
              ${
                mobile ? `pb-6` : ``
              } pl-4 md:pl-0 w-full block flex-grow lg:flex lg:items-center lg:w-auto z-50 `}
              style={{ fontSize: "14px" }}
            >
              <div
                className="py-0.5 px-2  md:py-0 group customnav"
                style={
                  path === "project-overview" ||
                  path === "participants" ||
                  path === "about"
                    ? { backgroundColor: "white", color: "black" }
                    : {}
                }
              >
                <Link to="/about/">
                  <div>About</div>
                </Link>
                <div
                  className={`${
                    isExpanded ? `block` : `hidden`
                  } absolute w-min group-hover:block z-50  mt-0.5 md:m-0 md:-ml-2 text-white`}
                >
                  <div className="w-auto bg-black">
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/project-overview/"
                          className="whitespace-nowrap"
                          onClick={() => toggleExpansion(!isExpanded)}
                        >
                          <div>Project overview</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link to="/participants/" className="whitespace-nowrap">
                          <div>Participants</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="py-0.5 px-2  md:py-0 group customnav"
                style={
                  path === "people"
                    ? {
                        backgroundColor: "white",
                        color: "black",
                        marginTop: mobile ? "60px" : "",
                      }
                    : { marginTop: mobile ? "60px" : "" }
                }
              >
                <Link to="/people/">
                  <div>People</div>
                </Link>
                <div
                  className={`${
                    isExpanded ? `block` : `hidden`
                  } absolute w-min group-hover:block z-50  mt-0.5 md:m-0 md:-ml-2 text-white`}
                >
                  <div className="w-auto bg-black">
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/people/#polimi"
                          className="whitespace-nowrap"
                        >
                          <div>Polimi</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link to="/people/#mit" className="whitespace-nowrap">
                          <div>MIT</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/people/#tu-delft"
                          className="whitespace-nowrap"
                        >
                          <div>TU Delft</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/people/#data-urbana"
                          className="whitespace-nowrap"
                        >
                          <div>Data Urbana</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="py-0.5 px-2  md:py-0 group customnav"
                style={
                  path === "data-processing" ||
                  path === "gis-spatial-analysis" ||
                  path === "urban-climate"
                    ? { backgroundColor: "white", color: "black" }
                    : {}
                }
              >
                <div
                  className="cursor-pointer"
                  style={!mobile ? {} : { marginTop: "120px" }}
                >
                  <Link to="/data-processing/">
                    <div>Data | Analysis</div>
                  </Link>
                </div>
                <div
                  className={`${
                    isExpanded ? `block` : `hidden`
                  } absolute w-min group-hover:block z-50  mt-0.5 md:m-0 md:-ml-2 text-white`}
                >
                  <div className="w-auto bg-black">
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/data-processing/#remote-sensing"
                          className="whitespace-nowrap"
                        >
                          <div>RS | Data</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/data-processing/#remote-sensing-processing"
                          className="whitespace-nowrap"
                        >
                          <div>RS | Processing</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/data-processing/#gis-data"
                          className="whitespace-nowrap"
                        >
                          <div>GIS | Data</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/data-processing/#gis-spatial-analysis"
                          className="whitespace-nowrap"
                        >
                          <div>GIS | Spatial Analysis</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/data-processing/#urban-climate"
                          className="whitespace-nowrap"
                        >
                          <div>Urban Climate</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {!mobile ? <></> : <div className="h-36" />}
              <div className="py-0.5 px-0  md:py-0 group customnav">
                <div
                  style={
                    path === "urban-dss"
                      ? { backgroundColor: "white", color: "black" }
                      : {}
                  }
                >
                  <div
                    className="cursor-pointer"
                    style={!mobile ? {} : { marginTop: "120px" }}
                  >
                    <Link to="/urban-dss/">
                      <div>UrbanDSS</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="py-0.5 px-2  md:py-0 group customnav"
                style={
                  path === "publications"
                    ? {
                        backgroundColor: "white",
                        color: "black",
                        marginTop: mobile ? "16px" : "",
                      }
                    : { marginTop: mobile ? "16px" : "" }
                }
              >
                <Link to="/publications/">
                  <div>Publications</div>
                </Link>
                <div
                  className={`${
                    isExpanded ? `block` : `hidden`
                  } absolute w-min group-hover:block z-50  mt-0.5 md:m-0 md:-ml-2 text-white`}
                >
                  <div className="w-auto bg-black">
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/publications/#multicast-publications"
                          className="whitespace-nowrap"
                        >
                          <div>MultiCAST publications</div>
                        </Link>
                      </div>
                    </div>
                    <div className="py-0.5 px-2  md:py-0 flex customnav ">
                      <div className="flex-auto ">
                        <Link
                          to="/publications/#other-publications"
                          className="whitespace-nowrap"
                        >
                          <div>Other publications</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {!mobile ? <></> : <div />}
              {mobile ? (
                <div style={{ marginTop: "20px" }}>
                  <Link to="./" className="py-0.5 px-2  md:py-0 customnav">
                    <span className={"customnav"}>
                      English &nbsp;&nbsp;Italian
                    </span>
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
