import * as React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { Link } from 'gatsby';
import Video from '../components/Video';
import { Philosophy, Promotion, Interview } from '../components/idea/top';
// import image from "../components/image";
// import homeImg from "../images/home.jpg"
// import jigyonaiyoImg from "../images/jigyo-naiyo.svg";

const IndexPage = ({ location }) => {
  return (
    <Layout pathname={location.pathname} notTemplate={true}>
      <SEO title="Home" />
      <Video />
      <Philosophy />
      <Promotion />
      <Interview />
    </Layout>
  );
};

export default IndexPage;
