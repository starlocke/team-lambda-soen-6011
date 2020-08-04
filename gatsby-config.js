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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 1,
              toHeading: 6
            },
          },
          `gatsby-remark-autolink-headers`
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
  ],
}
