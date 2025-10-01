import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Publications = data => {
  const location = useLocation()
  const hash = location.hash

  const [activeSub, setActiveSub] = useState("")

  useEffect(() => {
    if (location.hash === "") {
      setActiveSub("")
    }
  }, [location])

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
    if (isInViewport("multicast-publications")) {
      setActiveSub("multicastpublications")
    }
    if (isInViewport("other-publications")) {
      setActiveSub("otherpublications")
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollPos)
  }

  useEffect(() => {
    if (hash === "#other-publications") {
      setActiveSub("otherpublications")
    }
  }, [hash])

  const publicationsContent = [
    {
      authors: [
        {
          author: "Colaninno, N.",
          url: "https://www.sciencedirect.com/science/article/pii/S2212095522002383",
        },
      ],
      year: "2023",
      title:
        "Insights into heat islands at the regional scale using a data-driven approach ",
      publicationTitle: "City and Environment Interactions",
      publicationBody: "Volume 20, December 2023, Article 100124",
      url: "https://doi.org/10.1016/j.cacint.2023.100124",
      openAccess:
        "https://www.sciencedirect.com/science/article/pii/S2590252023000260/pdfft?md5=052efa9945d48cef57f22434ab383963&pid=1-s2.0-S2590252023000260-main.pdf",
      license: "creativeCommons",
      licenseLink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      image: "cacint",
    },
    {
      authors: [
        {
          author: "Colaninno, N.",
          url: "https://www.sciencedirect.com/science/article/pii/S2212095522002383",
        },
        {
          author: "Morello, E.",
          url: "https://www.sciencedirect.com/science/article/pii/S2212095522002383",
        },
      ],
      year: "2022",
      title:
        "Towards an operational model for estimating day and night instantaneous near-surface air temperature for urban heat island studies: outline and assessment ",
      publicationTitle: "Urban Climate",
      publicationBody: "Volume 46, December 2022, Article 101320",
      url: "https://doi.org/10.1016/j.uclim.2022.101320",
      openAccess:
        "https://www.sciencedirect.com/science/article/pii/S2212095522002383/pdfft?md5=dd0cbc6dcf807d944fa00b6f717da05e&pid=1-s2.0-S2212095522002383-main.pdf",
      license: "creativeCommons",
      licenseLink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      image: "urbanClimate46",
    },
  ]

  const otherPublicationsContent = [
    {
      authors: [
        {
          author: "Zendeli, D.",
          url: "https://iopscience.iop.org/article/10.1088/1742-6596/2600/9/092024",
        },
        {
          author: "Colaninno, N.",
          url: "https://iopscience.iop.org/article/10.1088/1742-6596/2600/9/092024",
        },
        {
          author: "Morello, E.",
          url: "https://iopscience.iop.org/article/10.1088/1742-6596/2600/9/092024",
        },
      ],
      year: "2023",
      title:
        "Investigating the Impact of Heat Stress and Green Space Accessibility for At-Risk Communities",
      publicationTitle: "Journal of Physics: Conference Series",
      publicationBody: "Volume 2600, Issue 9, November 2023, Article 092024",
      url: "https://iopscience.iop.org/article/10.1088/1742-6596/2600/9/092024",
      openAccess:
        "https://iopscience.iop.org/article/10.1088/1742-6596/2600/9/092024/pdf",
      license: "creativeCommons",
      licenseLink: "https://creativecommons.org/licenses/by/3.0/",
      image: "journalOfPhysics1343",
    },
    {
      authors: [
        {
          author: "Colaninno, N.",
          url: "https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/V-3-2020/293/2020/",
        },
        {
          author: "Marambio, M.",
          url: "https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/V-3-2020/293/2020/",
        },
        {
          author: "Roca, J.",
          url: "https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/V-3-2020/293/2020/",
        },
      ],
      year: "2020",
      title:
        "Testing a combined multispectral-multitemporal approach for getting cloudless imagery for sentinel-2",
      publicationTitle:
        "ISPRS Annals of the Photogrammetry Remote Sensing and Spatial Information Sciences",
      publicationBody: "Volume 5, Issue 3, August 2020, Article 162280",
      url: "https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/V-3-2020/293/2020/",
      openAccess:
        "https://www.isprs-ann-photogramm-remote-sens-spatial-inf-sci.net/V-3-2020/293/2020/isprs-annals-V-3-2020-293-2020.pdf",
      license: "creativeCommons",
      licenseLink: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      image: "isprs",
    },
    {
      authors: [
        {
          author: "Colaninno, N.",
          url: "https://iopscience.iop.org/article/10.1088/1742-6596/1343/1/012010",
        },
        {
          author: "Morello, E.",
          url: "https://iopscience.iop.org/article/10.1088/1742-6596/1343/1/012010",
        },
      ],
      year: "2019",
      title:
        "Modelling the impact of green solutions upon the urban heat island phenomenon by means of satellite data",
      publicationTitle: "Journal of Physics: Conference Series",
      publicationBody: "Volume 1343, Issue 1, November 2019, Article 012010",
      url: "https://iopscience.iop.org/article/10.1088/1742-6596/1343/1/012010",
      openAccess:
        "https://iopscience.iop.org/article/10.1088/1742-6596/1343/1/012010/pdf",
      license: "creativeCommons",
      licenseLink: "https://creativecommons.org/licenses/by/3.0/",
      image: "journalOfPhysics1343",
    },
  ]

  return (
    <>
      <Metatags
        title="Publications | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <NavBar />
      <div style={{ height: "26px" }} id="multicast-publications" />
      <div id="content-body" className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
          <div className="col-span-2">
            <div
              id="submenu"
              className="hidden md:block md:absolute bg-white z-20"
            >
              <div
                className="text-base bg-mc-green text-white px-2 text-left mb-3"
                style={{ width: "191px" }}
                id="title"
              >
                Publications
              </div>
              <div className="text-right">
                <div style={{ width: "191px" }} className="mb-3">
                  <Link
                    to="./#multicast-publications"
                    className={`${
                      activeSub === "multicastpublications"
                        ? "bg-mc-green text-white"
                        : ""
                    } text-base py-0.5 px-2 `}
                  >
                    Multicast publications
                  </Link>
                </div>
                <div style={{ width: "191px" }} className="mb-3">
                  <Link
                    to="./#other-publications"
                    className={`${
                      activeSub === "otherpublications"
                        ? "bg-mc-green text-white"
                        : ""
                    } text-base py-0.5 px-2 `}
                  >
                    Other publications
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9 pl-10 pr-4">
            <div id="multicast-publications">
              <div className="h-10 " />
              <div className="-mt-2">
                <h3>
                  <span className="text-3xl">MultiCAST publications</span>
                </h3>
              </div>
              <div className="h-10" />
              <div>
                {publicationsContent.map((value, k) => {
                  return (
                    <div
                      key={k}
                      className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-2 text-pp"
                    >
                      <div className=" col-span-3">
                        {value["authors"].map((author, ak) => {
                          return (
                            <span key={ak}>
                              <a
                                href={author["url"]}
                                className=" text-blue-600"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {author["author"]}
                              </a>
                              {ak + 1 === value["authors"].length
                                ? ` ${value["year"]}`
                                : value["authors"].length > ak + 2
                                ? `, `
                                : ` and `}
                            </span>
                          )
                        })}
                        <br />
                        <span className=" font-medium">{value["title"]}</span>
                        <br />
                        <span>
                          <i>{value["publicationTitle"]}</i>,&nbsp;
                          {value["publicationBody"]}
                        </span>
                        <br />
                        <a
                          href={value["url"]}
                          rel="noopener noreferrer"
                          className=" text-blue-600"
                          target="_blank"
                        >
                          {value["url"]}
                        </a>
                        {value["openAccess"] !== "" ? (
                          <>
                            <br />
                            <a
                              href={value["openAccess"]}
                              className=" text-blue-600"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              open access
                            </a>
                          </>
                        ) : (
                          <></>
                        )}
                        {value["license"] === "creativeCommons" ? (
                          <>
                            <br />
                            <span>
                              Under a Creative Commons{" "}
                              <a
                                href={value["licenseLink"]}
                                rel="noopener noreferrer"
                                className=" text-blue-600"
                                target="_blank"
                              >
                                license
                              </a>
                            </span>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className=" mx-auto">
                        <GatsbyImage
                          image={getImage(data.data[value["image"]])}
                          backgroundColor={false}
                          alt="MultiCAST"
                          className="  transition duration-200 hover:mix-blend-darken mx-auto"
                        />
                      </div>
                      <div className="h-8" />
                    </div>
                  )
                })}
              </div>
              <div className="col-span-1 md:col-span-2" />
            </div>
            <div id="other-publications">
              <div className="h-10 " />
              <h3>
                <span className="text-3xl">Other publications</span>
              </h3>
              <div className="h-10" />
              <div>
                {otherPublicationsContent.map((value, k) => {
                  return (
                    <div
                      key={k}
                      className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-2 text-pp"
                    >
                      <div className=" col-span-3">
                        {value["authors"].map((author, ak) => {
                          return (
                            <span key={ak}>
                              <a
                                href={author["url"]}
                                className=" text-blue-600"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {author["author"]}
                              </a>
                              {ak + 1 === value["authors"].length
                                ? ` ${value["year"]}`
                                : value["authors"].length > ak + 2
                                ? `, `
                                : ` and `}
                            </span>
                          )
                        })}
                        <br />
                        <span className=" font-medium">{value["title"]}</span>
                        <br />
                        <span>
                          <i>{value["publicationTitle"]}</i>,&nbsp;
                          {value["publicationBody"]}
                        </span>
                        <br />
                        <a
                          href={value["url"]}
                          rel="noopener noreferrer"
                          className=" text-blue-600"
                          target="_blank"
                        >
                          {value["url"]}
                        </a>
                        {value["openAccess"] !== "" ? (
                          <>
                            <br />
                            <a
                              href={value["openAccess"]}
                              className=" text-blue-600"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              open access
                            </a>
                          </>
                        ) : (
                          <></>
                        )}
                        {value["license"] === "creativeCommons" ? (
                          <>
                            <br />
                            <span>
                              Under a Creative Commons{" "}
                              <a
                                href={value["licenseLink"]}
                                rel="noopener noreferrer"
                                className=" text-blue-600"
                                target="_blank"
                              >
                                license
                              </a>
                            </span>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className=" mx-auto">
                        <GatsbyImage
                          image={getImage(data.data[value["image"]])}
                          backgroundColor={false}
                          alt="MultiCAST"
                          className="  transition duration-200 hover:mix-blend-darken mx-auto"
                        />
                      </div>
                      <div className="h-8" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40" />
      <div className="h-10" />

      <Footer />
    </>
  )
}

export default Publications

export const query = graphql`
  {
    urbanClimate46: file(
      relativePath: { eq: "publications/urban-climate.jpg" }
    ) {
      childImageSharp {
        id
        gatsbyImageData(
          quality: 80
          layout: CONSTRAINED
          width: 147
          height: 200
        )
      }
    }
    cacint: file(relativePath: { eq: "publications/CACINT.jpg" }) {
      childImageSharp {
        id
        gatsbyImageData(
          quality: 80
          layout: CONSTRAINED
          width: 147
          height: 200
        )
      }
    }
    journalOfPhysics1343: file(
      relativePath: { eq: "publications/journal-of-physics.jpg" }
    ) {
      childImageSharp {
        id
        gatsbyImageData(
          quality: 80
          layout: CONSTRAINED
          width: 147
          height: 200
        )
      }
    }
    isprs: file(relativePath: { eq: "publications/ISPRS.jpg" }) {
      childImageSharp {
        id
        gatsbyImageData(
          quality: 80
          layout: CONSTRAINED
          width: 147
          height: 198
        )
      }
    }
  }
`
