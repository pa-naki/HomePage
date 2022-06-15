import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const used = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="used" />
    <h1>Hi from the used</h1>
    <p>Welcome to used</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default used;
