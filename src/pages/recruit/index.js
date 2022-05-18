import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';

const recruit_home = () => (
  <Layout>
    <Seo title="recruit_home" />
    <h1>Hi from the recruit_home</h1>
    <p>Welcome to recruit_home</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default recruit_home;
