import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const search_kinou = () => (
  <Layout>
    <Seo title="search_kinou" />
    <h1>Hi from the search_kinou</h1>
    <p>Welcome to search_kinou</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default search_kinou