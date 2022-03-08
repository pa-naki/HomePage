import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const environment = () => (
  <Layout>
    <Seo title="environment" />
    <h1>Hi from the environment</h1>
    <p>Welcome to environment</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default environment