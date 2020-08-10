import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { HomePageLink } from "../components/homePageLink"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>The page you tried to access could not be found</p>
    <HomePageLink />
  </Layout>
)

export default NotFoundPage
