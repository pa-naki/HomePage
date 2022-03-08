import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const company_greeting = () => (
  <Layout>
    <Seo title="company_greeting" />
    <h1>Hi from the company_greeting</h1>
    <p>Welcome to company_greeting</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default company_greeting