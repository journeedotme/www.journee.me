const { defaultLanguage } = require("./src/configuration/languages.json")
const siteMetadata = require("./src/configuration/metadata.json")

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Journee`,
        short_name: `Journee`,
        start_url: `/`,
        background_color: `#F9FAFB`,
        theme_color: `#3B82F6`,
        display: `minimal-ui`,
        icon: `static/logo/logo.svg`,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLanguage,
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [],
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
