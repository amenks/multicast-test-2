module.exports = {
  siteMetadata: {
    title: `MultiCAST`,
    description: `Multiscale Thermal-related Urban Climate Analysis and Simulation Tool.`,
    author: `@NetBistrot`,
    siteUrl: `https://netbistrot.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `dummie`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/MultiCAST-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "multicast-netbistrot",
        region: "eu-west-3",
        protocol: "https",
        hostname: "multicast.netbistrot.com",
        generateRoutingRules: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "http://localhost/matomo/",
        siteUrl: "http://local.andremenks.net",
      },
    },
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://backend.multicast.netbistrot.com/graphql`,
          verbose: true,
          schema: {
            timeout: 60000,
            perPage: 50,
            requestConcurrency: 15,
            previewRequestConcurrency: 5
          },
          html: {
            useGatsbyImage: false,
            createStaticFiles: false
          },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
