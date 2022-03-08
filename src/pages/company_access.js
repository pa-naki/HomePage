import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const company_access = () => (
  <Layout>
    <Seo title="company_access" />
    <h1>Hi from the company_access</h1>
    <p>Welcome to company_access</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default company_access