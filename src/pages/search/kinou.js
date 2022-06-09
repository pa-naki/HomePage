import * as React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';
import AllProducts from '../../components/AllProducts';

const search_kinou = ({ data }) => {
  return (
    <Layout>
      <Seo title="search_kinou" />
      <h1>Hi from the search_kinou</h1>
      <p>Welcome to search_kinou</p>
      <AllProducts />
    </Layout>
  );
};

export default search_kinou;
