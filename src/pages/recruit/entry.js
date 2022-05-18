import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';

const recruit_entry = () => (
  <Layout>
    <Seo title="recruit_entry" />
    <h1>Hi from the recruit_entry</h1>
    <p>Welcome to recruit_entry</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default recruit_entry;
