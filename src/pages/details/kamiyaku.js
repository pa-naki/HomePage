import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const kamiyaku = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="details_kamiyaku" />
    <h1>Hi from the details_kamiyaku</h1>
    <p>Welcome to details_kamiyaku</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default kamiyaku;
