import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';

const bouen = ({ location }) => (
  <Layout>
    <Seo title="details_bouen" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <h1>Hi from the details_bouen</h1>
      <p>Welcome to details_bouen</p>
      <Link to="/">Go back to the homepage</Link>
    </DisplayTemplate>
  </Layout>
);

export default bouen;
