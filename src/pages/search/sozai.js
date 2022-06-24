import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';

const search_sozai = ({ location }) => (
  <Layout>
    <Seo title="search_sozai" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <h1>Hi from the search_sozai</h1>
      <p>Welcome to search_sozai</p>
      <Link to="/">Go back to the homepage</Link>
    </DisplayTemplate>
  </Layout>
);

export default search_sozai;
