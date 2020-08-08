import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Footer from "../components/footer"

const Authors = ({ pageContext, data }) => {
  const { author } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const authorHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${author}"`
  return (
    <Layout>
      <h1>{authorHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { title, slug } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/authors">View all authors</Link>
      <Link style={{display: 'block', margin: '1em 0'}} to='/'>	&#8592; Back to the Home Page</Link>
      <Footer></Footer>
    </Layout>
  )
}
Authors.propTypes = {
  pageContext: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Authors
export const pageQuery = graphql`
  query($author: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { in: [$author] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`