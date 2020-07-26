import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'

import Layout from "../components/layout/layout"
import SearchBar from "../components/searchBar/searchBar"
import SEO from "../components/seo"
import { Footer } from "../components/footer"

const IndexPage = (
  {
    data: { allMarkdownRemark: { edges } }
  }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `accessibility`]}
    />
    <h1>Skill Description Page Index</h1>
    <div>
      {
        edges.map(
          (edge) => {
            return(
              <div style = {{'margin': '2.5em 0'}} key={edge.node.id}>
                <Link
                style = {{'fontSize': '1.2em' }}
                to={`${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
                <div>
                  <em>
                    by {edge.node.frontmatter.author}
                  </em>
                </div>
                <div>
                  {edge.node.excerpt}
                </div>
              </div>
            )
        })
      }
    </div>
    <Footer />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            author
          }
        }
      }
    }
  }
`

export default IndexPage
