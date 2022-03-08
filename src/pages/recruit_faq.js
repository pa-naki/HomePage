import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const recruit_faq = () => (
  <Layout>
    <Seo title="recruit_faq" />
    <h1>Hi from the recruit_faq</h1>
    <p>Welcome to recruit_faq</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default recruit_faq