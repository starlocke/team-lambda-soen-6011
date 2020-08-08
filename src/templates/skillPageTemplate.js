import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import { Layout } from '../components/contentLayout'
import { Footer } from '../components/footer'
import SEO from '../components/seo'
import { HomePageLink } from '../components/homePageLink'
import { Layout as IndexLayout }  from '../components/layout/layout'

const SkillPageTemplate = ({
  data,
}) => {
  const { markdownRemark } = data
  const { frontmatter, html, tableOfContents } = markdownRemark
  return (
    <>
      <IndexLayout>
        <SEO
          title={frontmatter.title}
        />
      </IndexLayout>
        <Layout>
        <h1>{frontmatter.title}</h1>
        <p>Authored by: {frontmatter.author}</p>
        <h2>Contents</h2>
          <div
            dangerouslySetInnerHTML={{ __html: tableOfContents }}
            className="toc"
          />
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Layout> 
        <HomePageLink />
        <Footer />
    </>
  )
}

SkillPageTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    tableOfContents(
      pathToSlugField: "frontmatter.slug")
    frontmatter {
      title
      slug
      author
    }
  }
}
`;

export default SkillPageTemplate;