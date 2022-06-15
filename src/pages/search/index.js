import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const search = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="search" />
    <h1>Hi from the search</h1>
    <p>Welcome to search</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default search;
