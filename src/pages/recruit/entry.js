import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';

const entry = ({ location }) => (
  <Layout>
    <Seo title="recruit_entry" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <h1>Hi from the recruit_entry</h1>
      <p>Welcome to recruit_entry</p>
      <Link to="/">Go back to the homepage</Link>
    </DisplayTemplate>
  </Layout>
);

export default entry;
