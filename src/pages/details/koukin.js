import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const koukin = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="details_koukin" />
    <h1>Hi from the details_koukin</h1>
    <p>Welcome to details_koukin</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default koukin;
