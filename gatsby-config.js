const autoprefixer = require("autoprefixer");
const config = require("./config/siteConfig");

const pathPrefix = config.pathPrefix === `/` ? `` : config.pathPrefix;

module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio v1`
  },
  // pathPrefix: config.pathPrefix,
  pathPrefix: "/gatsby-portfolio-v1",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
              quality: 90,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.themeColor
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.description,
        display: `minimal-ui`
      }
    }
  ]
};
