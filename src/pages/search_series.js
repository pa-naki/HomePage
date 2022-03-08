import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const search_series = () => (
  <Layout>
    <Seo title="search_series" />
    <h1>Hi from the search_series</h1>
    <p>Welcome to search_series</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default search_series