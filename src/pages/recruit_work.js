import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const recruit_work = () => (
  <Layout>
    <Seo title="recruit_work" />
    <h1>Hi from the recruit_work</h1>
    <p>Welcome to recruit_work</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default recruit_work