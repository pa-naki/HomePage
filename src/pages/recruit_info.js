import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const recruit_info = () => (
  <Layout>
    <Seo title="recruit_info" />
    <h1>Hi from the recruit_info</h1>
    <p>Welcome to recruit_info</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default recruit_info