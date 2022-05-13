import React from "react";
import Layout from "../components/layout";
import { 
  AboutJnla, 
  QualityPolicy, 
  RegistJnla,
} from "../components/idea/jnla";


import SEO from "../components/seo";

const AboutPage = () => {
    return (
        <Layout>
          <SEO title="評価技術センター"/>
          <AboutJnla />
          <RegistJnla />
          <QualityPolicy />
        </Layout>
      )
}

export default AboutPage;