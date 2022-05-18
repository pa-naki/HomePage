import * as React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Layout from '../components/layout';
import SEO from '../components/Seo';
import { Link } from 'gatsby';
// import image from "../components/image";
// import homeImg from "../images/home.jpg"
// import jigyonaiyoImg from "../images/jigyo-naiyo.svg";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <img src="" alt="大和化学紹介写真(一定時間切替)"></img>
      <img src="" alt="強炭化革命"></img>
      <div>
        <div>
          <ul>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
