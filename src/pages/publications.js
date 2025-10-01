import React, { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Publications = data => {
  const publicationsContent = data.data.publications.edges
  const otherPublicationsContent = data.data.otherPublications.edges

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

  const splitAuthors = str => {
    const authors = str
      .replaceAll(".,", "%%")
      .split("%%")
      .map(s => s.trim() + ".")
      .filter(s => s !== ".")

    const lastAuthor = authors[authors.length - 1]
    authors[authors.length - 1] = lastAuthor.replace("..", ".")
    return authors
  }

  const splitUrls = str => {
    return str
      .split(/,| and /)
      .map(s => s.trim())
      .filter(s => s !== "")
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
                  const publicationData = value.node
                  const authors = splitAuthors(
                    publicationData["publicationAuthor"]
                  )
                  const authorsUrl = splitUrls(
                    publicationData["publicationAuthorUrl"]
                  )
                  return (
                    <div
                      key={k}
                      className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-2 text-pp"
                    >
                      <div className=" col-span-3">
                        {authors.map((author, ak) => {
                          return (
                            <span key={ak}>
                              <a
                                href={authorsUrl[ak]}
                                className=" text-blue-600"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {author}
                              </a>
                              {ak + 1 === authors.length
                                ? ` ${publicationData["year"]}`
                                : authors.length > ak + 2
                                ? `, `
                                : ` and `}
                            </span>
                          )
                        })}
                        <br />
                        <span className=" font-medium">
                          {publicationData["title"]}
                        </span>
                        <br />
                        <span>
                          <i>{publicationData["publicationTitle"]}</i>,&nbsp;
                          {publicationData["publicationBody"]}
                        </span>
                        <br />
                        <a
                          href={publicationData["url"]}
                          rel="noopener noreferrer"
                          className=" text-blue-600"
                          target="_blank"
                        >
                          {publicationData["url"]}
                        </a>
                        {publicationData["openAccess"] !== "" ? (
                          <>
                            <br />
                            <a
                              href={publicationData["openAccess"]}
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
                        {publicationData["license"] === "creativeCommons" ? (
                          <>
                            <br />
                            <span>
                              Under a Creative Commons{" "}
                              <a
                                href={publicationData["licenseLink"]}
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
                          image={getImage(
                            publicationData["image"]["node"]["localFile"][
                              "childImageSharp"
                            ]
                          )}
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
                  const otherPublicationData = value.node
                  const authors = splitAuthors(
                    otherPublicationData["publicationAuthor"]
                  )
                  const authorsUrl = splitUrls(
                    otherPublicationData["publicationAuthorUrl"]
                  )
                  return (
                    <div
                      key={k}
                      className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-2 text-pp"
                    >
                      <div className=" col-span-3">
                        {authors.map((author, ak) => {
                          return (
                            <>
                              {authorsUrl[ak] !== "-" ? (
                                <span key={ak}>
                                  <a
                                    href={authorsUrl[ak]}
                                    className=" text-blue-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {author}
                                  </a>

                                  {ak + 1 === authors.length
                                    ? ` ${otherPublicationData["year"]}`
                                    : authors.length > ak + 2
                                    ? `, `
                                    : ` and `}
                                </span>
                              ) : (
                                author
                              )}
                            </>
                          )
                        })}
                        <br />
                        <span className=" font-medium">
                          {otherPublicationData["title"]}
                        </span>
                        <br />
                        <span>
                          <i>{otherPublicationData["publicationTitle"]}</i>
                          ,&nbsp;
                          {otherPublicationData["publicationBody"]}
                        </span>
                        <br />
                        <a
                          href={otherPublicationData["url"]}
                          rel="noopener noreferrer"
                          className=" text-blue-600"
                          target="_blank"
                        >
                          {otherPublicationData["url"]}
                        </a>
                        {otherPublicationData["openAccess"] !== "" ? (
                          <>
                            <br />
                            <a
                              href={otherPublicationData["openAccess"]}
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
                        {otherPublicationData["license"] ===
                        "creativeCommons" ? (
                          <>
                            <br />
                            <span>
                              Under a Creative Commons{" "}
                              <a
                                href={otherPublicationData["licenseLink"]}
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
                          image={getImage(
                            otherPublicationData["image"]["node"]["localFile"][
                              "childImageSharp"
                            ]
                          )}
                          backgroundColor={false}
                          alt="MultiCAST"
                          className="  transition duration-200 hover:mix-blend-darken mx-auto"
                          width="147px"
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
    publications: allWpPublication(sort: { year: DESC }) {
      edges {
        node {
          title
          publicationTitle
          publicationInformattion
          url
          publicationAuthor
          publicationAuthorUrl
          year
          license
          licenseLink
          openAccess
          image {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 147)
                }
              }
            }
          }
        }
      }
    }
    otherPublications: allWpOtherPublication(sort: { year: DESC }) {
      edges {
        node {
          id
          title
          publicationTitle
          publicationInformattion
          url
          publicationAuthor
          publicationAuthorUrl
          year
          license
          licenseLink
          openAccess
          image {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 147)
                }
              }
            }
          }
        }
      }
    }
  }
`
