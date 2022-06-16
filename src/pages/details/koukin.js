import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';

const koukin = ({ location }) => (
  <Layout>
    <Seo title="details_koukin" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <h1>Hi from the details_koukin</h1>
      <p>Welcome to details_koukin</p>
      <Link to="/">Go back to the homepage</Link>
    </DisplayTemplate>
  </Layout>
);

export default koukin;
