import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';

const recruit_voice = () => (
  <Layout>
    <Seo title="recruit_voice" />
    <h1>Hi from the recruit_voice</h1>
    <p>Welcome to recruit_voice</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default recruit_voice;
