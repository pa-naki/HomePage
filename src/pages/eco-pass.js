import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const eco_pass = () => (
  <Layout>
    <Seo title="eco_pass" />
    <h1>Hi from the eco_pass</h1>
    <p>Welcome to eco_pass</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default eco_pass