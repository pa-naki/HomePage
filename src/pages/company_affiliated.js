import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const company_affiliated = () => (
  <Layout>
    <Seo title="company_affiliated" />
    <h1>Hi from the company_affiliated</h1>
    <p>Welcome to company_affiliated</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default company_affiliated