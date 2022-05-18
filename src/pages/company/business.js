import * as React from 'react';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';
import { Philosophy, Comfort, Quality } from '../../components/idea/company';

const company_business = () => (
  <Layout>
    <Seo title="company_business" />
    <h1>経営理念</h1>
    <p>
      私ども大和化学工業は、次の4つの理念を使命として、地球に優しい高品質の製品を提供するとともに、人と自然環境の融合を理念においた製品づくりを目指しています。
    </p>
    <Philosophy />
    <Comfort />
    <Quality />
  </Layout>
);

export default company_business;
