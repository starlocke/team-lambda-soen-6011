import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types';

const skillPageTemplate = ({
  data,
}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

skillPageTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      slug
      date(formatString: "MMMM DD, YYYY")
    }
  }
}
`;

export default skillPageTemplate;