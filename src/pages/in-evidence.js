import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Metatags from "../components/metatags"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const InEvidence = data => {
  console.log(data.data.inEvidences.edges)
  return (
    <>
      <Metatags
        title="In Evidence | MultiCAST"
        description="Multiscale Thermal-related Urban Climate Analysis and Simulation Tool"
        url="https://multicast.netbistrot.com/"
        image="https://multicast.netbistrot.com/multicast.png"
        keywords="GIScience, Remote Sensing, Urban Climate, Urban Heat Island, Outdoor Comfort, Pedestrian Flows Modelling, Walkability, Climate Planning, Climate Design, Decision Support System, Climate Change"
        language="en"
      />
      <NavBar />
      <div style={{ height: "26px" }} />
      <div id="content-body" className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2">
          <div className="col-span-1"></div>
          <div className="col-span-9 -mt-2">
            <div className="h-10" />
            <h3 id="title">
              <span className="text-3xl">In Evidence</span>
            </h3>

            <div className="h-10" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-12">
              {data.data.inEvidences.edges.map((value, k) => {
                const node = value.node
                const subtitle = { __html: node["description"] }
                return (
                  <div key={k}>
                    <a
                      href={node["url"]}
                      target={node["url"] !== "" ? "_blank" : ""}
                      rel="noopener noreferrer"
                      className="hover:text-mc-green"
                    >
                      <GatsbyImage
                        image={getImage(
                          node.picture.node.localFile.childImageSharp
                        )}
                        backgroundColor={false}
                        alt="MultiCAST"
                        className="  transition duration-200 hover:mix-blend-darken mx-auto"
                      />
                      <div className="pt-5 pl-4 md:pl-0 block text-center text-lg font-bold">
                        {node["title"]}
                      </div>
                      <div
                        className="pl-4 md:pl-0 block text-center text-sm font-normal"
                        dangerouslySetInnerHTML={subtitle}
                      />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="h-10" />
      <Footer />
    </>
  )
}

export default InEvidence

export const query = graphql`
  {
    leftArrow: file(relativePath: { eq: "comps/left.png" }) {
      childImageSharp {
        id
        gatsbyImageData(quality: 80, layout: CONSTRAINED)
      }
    }
    rightArrow: file(relativePath: { eq: "comps/right.png" }) {
      childImageSharp {
        id
        gatsbyImageData(quality: 80, layout: CONSTRAINED)
      }
    }
    inEvidences: allWpInEvidence(sort: { date: ASC }) {
      edges {
        node {
          title
          description
          picture {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 760)
                }
              }
            }
          }
          url
          date
        }
      }
    }
  }
`
