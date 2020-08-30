require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Eiffel Industries`,
    description: `We are nationally recognized, but value the traditions of small buisness.`,
    author: `@eiffelIndustries`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eiffel-Industries`,
        short_name: `EiffelIndustries`,
        start_url: `/`,
        background_color: `##2e388b`,
        theme_color: `#2e388b`,
        display: `minimal-ui`,
        icon: `src/images/eiffel-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
