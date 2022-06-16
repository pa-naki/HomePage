import React from 'react';
import Layout from '../components/Layout';
import { AboutJnla, QualityPolicy, RegistJnla } from '../components/idea/jnla';

import SEO from '../components/Seo';
import PathTree from '../templates/path-tree';
import DisplayTemplate from '../templates/display-template';

const AboutPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="評価技術センター" />
      <PathTree pathTree={location.pathname} />
      <DisplayTemplate>
        <AboutJnla />
        <RegistJnla />
        <QualityPolicy />
      </DisplayTemplate>
    </Layout>
  );
};

export default AboutPage;
