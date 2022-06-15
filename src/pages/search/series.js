import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const series = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="search_series" />
    <h1>Hi from the search_series</h1>
    <p>Welcome to search_series</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default series;
