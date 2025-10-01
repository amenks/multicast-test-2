const path = require(`path`)
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const resultSats = await graphql(`
    query {
      allWpSatellite {
        edges {
          node {
            id
            satelliteTitle
            slug
            mainApplicationAndDataAcess
            generalInformation
            secondMainTitle
            satellitePicture1 {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(quality: 100, layout: CONSTRAINED)
                  }
                }
              }
            }
            satellitePicture2 {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(quality: 100, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // console.log("resultSats",resultSats.data.allWpSatellite.edges)

  resultSats.data.allWpSatellite.edges.forEach(({ node }) => {
    // console.log("node", node)
    const slug = node[`slug`]
    const params = {
      path: `/satellites/${slug}`,
      component: path.resolve(`./src/templates/satellites.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: `SitePage /satellites/${slug}/`,
        satelliteTitle: node.satelliteTitle,
        slug: node.slug,
        secondMainTitle: node.secondMainTitle,
        mainApplicationAndDataAcess: node.mainApplicationAndDataAcess,
        generalInformation: node.generalInformation,
        satellitePicture1:
          node.satellitePicture1.node.localFile.childImageSharp.gatsbyImageData,
        satellitePicture2:
          node.satellitePicture2.node.localFile.childImageSharp.gatsbyImageData,
      },
    }
    // const params2 = {
    //   path: `/satellites/${slug}`,
    //   component: path.resolve(
    //     `./src/templates/satellites.js`
    //   ),
    //   context: {
    //     // Data passed to context is available
    //     // in page queries as GraphQL variables.
    //     id: node.id,
    //     satelliteTitle: node.satelliteTitle,
    //     slug: node.slug,

    //   },
    // }
    // console.log(params2)
    actions.createPage(params)
  })
}

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode, createNodeField },
//   createNodeId,
//   getCache,
// }) => {
//   if (node["path"] && node["path"].includes("satellites")) {
//     if (node["context"] && node["context"]["satellitePicture1"]) {
//       const fileNode1 = await createRemoteFileNode({
//         url: node["context"]["satellitePicture1"], // string that points to the URL of the image
//         parentNodeId: node["context"]["id"], // id of the parent node of the fileNode you are going to create
//         createNode, // helper function in gatsby-node to generate the node
//         createNodeId, // helper function in gatsby-node to generate the node id
//         getCache,
//       })
//       // if the file was created, extend the node with "localFile"
//       if (fileNode1) {
//         createNodeField({ node, name: "localFile", value: fileNode1.id })
//       }
//     }
//     if (node["context"] && node["context"]["satellitePicture2"]) {
//       const fileNode2 = await createRemoteFileNode({
//         url: node["context"]["satellitePicture2"], // string that points to the URL of the image
//         parentNodeId: node["context"]["id"], // id of the parent node of the fileNode you are going to create
//         createNode, // helper function in gatsby-node to generate the node
//         createNodeId, // helper function in gatsby-node to generate the node id
//         getCache,
//       })
//       // if the file was created, extend the node with "localFile"
//       if (fileNode2) {
//         createNodeField({ node, name: "localFile", value: fileNode2.id })
//       }
//     }
//   }
// }

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       fallback: {
//         fs: false,
//       },
//     },
//   })
// }
