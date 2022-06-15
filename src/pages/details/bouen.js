import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const bouen = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="details_bouen" />
    <h1>Hi from the details_bouen</h1>
    <p>Welcome to details_bouen</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default bouen;
