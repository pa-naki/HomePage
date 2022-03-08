import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const company_establishment = () => (
  <Layout>
    <Seo title="company_establishment" />
    <h1>Hi from the company_establishment</h1>
    <p>Welcome to company_establishment</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default company_establishment