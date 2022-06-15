import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const lineap = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="lineap" />
    <h1>Hi from the lineap</h1>
    <p>Welcome to lineap</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default lineap;
