import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const kinouyaku = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="details_kinouyaku" />
    <h1>Hi from the details_kinouyaku</h1>
    <p>Welcome to details_kinouyaku</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default kinouyaku;
