import React from 'react';
import Layout from '../components/Layout';
import { AboutJnla, QualityPolicy, RegistJnla } from '../components/idea/jnla';

import SEO from '../components/Seo';

const AboutPage = ({ location }) => {
  return (
    <Layout pathName={location.pathname}>
      <SEO title="評価技術センター" />
      <AboutJnla />
      <RegistJnla />
      <QualityPolicy />
    </Layout>
  );
};

export default AboutPage;
