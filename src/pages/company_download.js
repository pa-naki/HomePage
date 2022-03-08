import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const company_download = () => (
  <Layout>
    <Seo title="company_download" />
    <h1>Hi from the company_download</h1>
    <p>Welcome to company_download</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default company_download