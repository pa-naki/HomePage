import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

import PathTree from '../templates/path-tree';
import DisplayTemplate from '../templates/display-template';

const lineap = ({ location }) => (
  <Layout>
    <Seo title="lineap" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <h1>Hi from the lineap</h1>
      <p>Welcome to lineap</p>
      <Link to="/">Go back to the homepage</Link>
    </DisplayTemplate>
  </Layout>
);

export default lineap;
