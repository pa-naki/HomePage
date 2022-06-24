import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import DisplayTemplate from '../templates/display-template';

import PathTree from '../templates/path-tree';

const NotFoundPage = ({ location }) => (
  <Layout>
    <Seo title="404: Not found" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </DisplayTemplate>
  </Layout>
);

export default NotFoundPage;
