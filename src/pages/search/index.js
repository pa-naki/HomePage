import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';

const Search = () => (
  <Layout>
    <Seo title="search" />
    <h1>Hi from the search</h1>
    <p>Welcome to search</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Search;
