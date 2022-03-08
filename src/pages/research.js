import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Research = () => (
  <Layout>
    <Seo title="research" />
    <h1>Hi from the research</h1>
    <p>Welcome to research</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Research