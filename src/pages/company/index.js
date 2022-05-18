import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';

const Company = () => (
  <Layout>
    <Seo title="company" />
    <h1>Hi from the company</h1>
    <p>Welcome to company</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Company;
