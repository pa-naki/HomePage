import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const franCM = () => (
  <Layout>
    <Seo title="franCM" />
    <h1>Hi from the franCM</h1>
    <p>Welcome to franCM</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default franCM