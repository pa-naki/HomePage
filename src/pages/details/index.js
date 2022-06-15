import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const details = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="details" />
    <h1>Hi from the details</h1>
    <p>Welcome to details</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default details;
