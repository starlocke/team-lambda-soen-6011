import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import { Layout } from '../components/contentLayout'
import { Footer } from '../components/footer'
import SEO from '../components/seo'
import { HomePageLink } from '../components/homePageLink'
import { Layout as IndexLayout }  from '../components/layout'

const SkillPageTemplate = ({
  data,
}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <IndexLayout>
        <SEO
          title={frontmatter.title}
          keywords={frontmatter.keywords}
        />
      </IndexLayout>
        <Layout>
        <h1>{frontmatter.title}</h1>
        <h2>Authored by: {frontmatter.author}</h2>
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
    frontmatter {
      title
      keywords
      slug
      author
    }
  }
}
`;

export default SkillPageTemplate;