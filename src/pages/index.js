import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Video from '../components/Video';
import { Philosophy, Promotion, Interview } from '../components/idea/top';
import TopNews from '../components/TopNews';
import ContactCard from '../components/ContactCard';
// import image from "../components/image";
// import homeImg from "../images/home.jpg"
// import jigyonaiyoImg from "../images/jigyo-naiyo.svg";

const IndexPage = () => {
  return (
    <Layout displayWidth={'100%'}>
      <SEO title="Home" />
      <Video />
      <TopNews />
      <Philosophy />
      <Promotion />
      <Interview />
      <ContactCard />
    </Layout>
  );
};

export default IndexPage;
