import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const recruit_treatment = () => (
  <Layout>
    <Seo title="recruit_treatment" />
    <h1>Hi from the recruit_treatment</h1>
    <p>Welcome to recruit_treatment</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default recruit_treatment