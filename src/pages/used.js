import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

import PathTree from '../templates/path-tree';
import DisplayTemplate from '../templates/display-template';

const used = ({ location }) => (
  <Layout>
    <Seo title="used" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <h1>Hi from the used</h1>
      <p>Welcome to used</p>
      <Link to="/">Go back to the homepage</Link>
    </DisplayTemplate>
  </Layout>
);

export default used;
