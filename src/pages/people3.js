import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const IndexPage = ({ data }) => {
  console.log({ data })
  const router = useLocation()

  const institutions = data.institutions.edges
  const people = data.people.edges

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
    if (isInViewport("polimi-body")) {
      setActiveSub("polimi")
    }
    if (isInViewport("mit-body")) {
      setActiveSub("mit")
    }
    if (isInViewport("tu-delft-body")) {
      setActiveSub("tu-delft")
    }
    if (isInViewport("data-urbana-body")) {
      setActiveSub("data-urbana")
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

              {institutions.map((institution, k) => {
                const institutionLower = institution.node.name
                  .toLowerCase()
                  .replaceAll(" ", "-")
                return (
                  <div style={{ width: "191px" }} className=" mb-3" key={k}>
                    <Link
                      to={`./#${institutionLower}`}
                      className={`${
                        activeSub === institutionLower
                          ? "bg-mc-green text-white"
                          : ""
                      } text-base py-0.5 px-2 `}
                    >
                      {institution.node.name}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-span-9  pl-10 pr-4">
            <div className="h-10" />
            <div id="content-body">
              {institutions.map((institution, k) => {
                const institutionLower = institution.node.name
                  .toLowerCase()
                  .replaceAll(" ", "-")
                const institutionPeople = Object.keys(people).reduce(function (
                  p,
                  e
                ) {
                  if (
                    people[e].node.institutions.nodes[0].name ===
                    institution.node.name
                  ) {
                    p[e] = people[e]
                  }
                  return p
                },
                {})
                return (
                  <div key={k}>
                    {k !== 0 ? (
                      <div className="h-16" id={institutionLower} />
                    ) : (
                      <></>
                    )}
                    <div
                      id={`${institutionLower}-body`}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      key={k}
                    >
                      <div className=" col-span-2">
                        <p className="m-2 text-2xl">
                          {institution.node.institutionName} |{" "}
                          <b>{institution.node.name}</b>
                        </p>
                      </div>
                      {Object.keys(institutionPeople).map((person, i) => {
                        const description = institutionPeople[person]
                          ? institutionPeople[person].node.description
                          : ""
                        return institutionPeople[person] ? (
                          <div
                            className="col-span-1 w-full h-auto  -2xl mb-10"
                            key={i}
                          >
                            <GatsbyImage
                              image={getImage(
                                institutionPeople[person].node.picture.node
                                  .localFile
                              )}
                              backgroundColor={false}
                              alt="Nicola Colaninno"
                              className="aspect-square max-w-max"
                            />
                            <p className="my-2 text-mc-green">
                              <b className="text-title">
                                {institutionPeople[person].node.personName}
                              </b>
                              <br /> {institutionPeople[person].node.role}
                            </p>
                            <p
                              className="my-2 text-pp"
                              dangerouslySetInnerHTML={{ __html: description }}
                            ></p>
                          </div>
                        ) : (
                          <div key={i} />
                        )
                      })}
                    </div>
                  </div>
                )
              })}
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
    institutions: allWpInstitution(sort: { description: ASC }) {
      edges {
        node {
          name
          institutionName
          institutionShortName
        }
      }
    }
    people: allWpPerson(sort: { index: ASC }) {
      edges {
        node {
          id
          index
          personName
          description
          role
          institutions {
            nodes {
              name
            }
          }
          picture {
            node {
              id
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 210)
                }
              }
            }
          }
        }
      }
    }
    davila: file(relativePath: { eq: "people/Daniel-Davila.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 210)
        id
      }
    }
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
    rodriguez: file(relativePath: { eq: "people/Florencia-Rodriguez.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 210)
        id
      }
    }
    meza: file(relativePath: { eq: "people/Sandra-Meza.png" }) {
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
    bozzon: file(relativePath: { eq: "people/Alessandro-Bozzon.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED, width: 210)
        id
      }
    }
  }
`
