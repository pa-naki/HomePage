import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';

const details = ({ location }) => (
  <Layout>
    <Seo title="details" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <h1>Hi from the details</h1>
      <p>Welcome to details</p>
      <Link to="/">Go back to the homepage</Link>
    </DisplayTemplate>
  </Layout>
);

export default details;
