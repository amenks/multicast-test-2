import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SateliteLayout from "../layouts/satelite-layout"

import "../styles/satellites.css"

const Project = ({ data }) => {
  console.log(data)
  const pageData = data.pageInfo.nodes[0].pageContext
  console.log({pageData})

  return (
    <>
      <SateliteLayout metaTitle={pageData.satelliteTitle}>
        <div className="-mt-2">
          <h3>
            <span className="text-3xl">{pageData.satelliteTitle}</span>
          </h3>
        </div>
        <div className="h-6" />
        <p className="font-semibold">GENERAL INFORMATION</p>
        <div className="h-6" />
         <GatsbyImage
          image={getImage(pageData.satellitePicture1)}
          backgroundColor={false}
          alt="Landsat"
          className="max-w-max mb-2"
        />
        <div className="h-6" />
        <div
          className="data-html"
          dangerouslySetInnerHTML={{ __html: pageData.generalInformation }}
        />
        <div className="h-12" />
        <p className="font-semibold">{`${pageData.secondMainTitle !== ""?pageData.secondMainTitle :"MAIN APPLICATIONS AND DATA ACCESS"}`}</p>
        <div className="h-6" />
        <GatsbyImage
          image={getImage(pageData.satellitePicture2)}
          backgroundColor={false}
          alt="Landsat"
          className="max-w-max mb-2"
        />
         <div className="h-6" />
        <div
          className="data-html"
          dangerouslySetInnerHTML={{
            __html: pageData.mainApplicationAndDataAcess,
          }}
        />
      </SateliteLayout>
    </>
  )
}

export default Project

export const projectTemplateQuery = graphql`
  query ($id: String!) {
    pageInfo: allSitePage(filter: { id: { eq: $id } }) {
      nodes {
        pageContext
      }
    }
    # img1: file(relativePath: { eq: $img1 }) {
    #   childImageSharp {
    #     gatsbyImageData(
    #       quality: 80
    #       layout: CONSTRAINED
    #       placeholder: NONE
    #       breakpoints: [640, 768, 1024, 1280, 1536]
    #       width: 820
    #     )
    #   }
    # }
    # img2: file(relativePath: { eq: $img2 }) {
    #   childImageSharp {
    #     gatsbyImageData(
    #       quality: 80
    #       layout: CONSTRAINED
    #       placeholder: NONE
    #       breakpoints: [640, 768, 1024, 1280, 1536]
    #       width: 820
    #     )
    #   }
    # }
  }
`
