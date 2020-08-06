module.exports = {
  siteMetadata: {
    title: "SESTOPIA",
    description:
      "Kick off your next, great accessible Gatsby project with this starter. This starter ships with the main Gatsby configuration files you might need, as well as built-in jsx linting for accessibility errors, react-axe for catching accessibility errors in the DOM during production, and a storybook configured to test individual components for accessibility errors.",
    author: "@gatsbyjs",
  },
  plugins: [
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-react-axe",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        languages: ['en'],
        type: 'MarkdownRemark',
        fields: [
          {
            name: 'title',
            indexed: true,
            resolver: 'frontmatter.title',
            attributes: {
              encode: "icase",
              tokenize: "forward",
              resolution: 9
            },
            store: true,
          },
          {
            name: 'author',
            indexed: true,
            resolver: 'frontmatter.author',
            attributes: {
              encode: "icase",
              tokenize: "forward",
              resolution: 9
            },
            store: true,
          },
          {
            name: 'content',
            indexed: true,
            limit: 5,
            resolver: 'rawMarkdownBody',
            attributes: {
                encode: "icase",
                tokenize: "forward",
                resolution: 9
            },
            store: false,
          },
          {
            name: 'url',
            indexed: false,
            resolver: 'frontmatter.slug',
            store: true,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-173762678-1",
        // // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: false,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Defers execution of google analytics script after page load
        // defer: false,
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
  ],
}
