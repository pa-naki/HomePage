import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const details_bouen = () => (
  <Layout>
    <Seo title="details_bouen" />
    <h1>Hi from the details_bouen</h1>
    <p>Welcome to details_bouen</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default details_bouen