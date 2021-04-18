require("dotenv").config()

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
        start_url: `/app/?pwa=true`,
        background_color: `#F9FAFB`,
        theme_color: `#3B82F6`,
        display: `standalone`,
        icons: [
          {
            src: "/manifest/16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/manifest/64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/manifest/32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/manifest/24x24.png",
            sizes: "24x24",
            type: "image/png",
          },
          {
            src: "/manifest/192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "/manifest/512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
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
        exclude: ["/app/*"],
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/fr/app/*`, `/app/*`] },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.FIREBASE_MEASUREMENT_ID],
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: require("./firebase/client"),
      },
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        // Specify the API key for your Amplitude Project (required)
        apiKey: "e6bda99915ab26d8e2150fc1cf58756f",
        // Puts tracking script in the head instead of the body (optional)
        head: false,
        // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths (optional)
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Override the default event types (optional)
        eventTypes: {
          outboundLinkClick: "outbound/clik",
          pageView: "page/view",
        },
        // Amplitude JS SDK configuration options (optional)
        amplitudeConfig: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true,
        },
        // Specify NODE_ENVs in which the plugin should be loaded (optional)
        environments: ["production"],
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: process.env.SENTRY_DSN,
        sampleRate: 0.7,
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-offline`,
  ],
}
