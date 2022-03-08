import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const company_outline = () => (
  <Layout>
    <Seo title="company_outline" />
    <h1>Hi from the company_outline</h1>
    <p>Welcome to company_outline</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default company_outline