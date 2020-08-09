module.exports = {
  pathPrefix: '/team-lambda-soen-6011',
  siteMetadata: {
    title: 'SESTOPIA - Team Lambda',
    description:
      'A repository of informative articles on software engineering skills categorized by knowledge areas defined in SWEBOK V3.0.',
    author: 'Team L for SOEN-6011 Summer 2020',
    siteUrl: 'https://sestopia-gatsby.herokuapp.com/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-axe',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },

    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6
        },
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1280
            }
          }
        ]
      }
    },

    'gatsby-plugin-styled-components',
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
              encode: 'icase',
              tokenize: 'forward',
              resolution: 9
            },
            store: true
          },
          {
            name: 'author',
            indexed: true,
            resolver: 'frontmatter.author',
            attributes: {
              encode: 'icase',
              tokenize: 'forward',
              resolution: 9
            },
            store: true
          },
          {
            name: 'content',
            indexed: true,
            limit: 5,
            resolver: 'rawMarkdownBody',
            attributes: {
              encode: 'icase',
              tokenize: 'forward',
              resolution: 9
            },
            store: false
          },
          {
            name: 'url',
            indexed: false,
            resolver: 'frontmatter.slug',
            store: true
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        dataLayer: {
          gaPropertyId: 'UA-173762678-1'
        },
        tagmanager: {
          id: 'GTM-5J7L6K8'
        },
        analytics: {
          id: 'UA-173762678-1'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    }
  ]
}
