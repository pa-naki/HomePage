import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const search_sozai = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="search_sozai" />
    <h1>Hi from the search_sozai</h1>
    <p>Welcome to search_sozai</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default search_sozai;
