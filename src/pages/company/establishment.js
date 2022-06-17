import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import { HeddingSection } from '../../templates/styles';
import styled from 'styled-components';

const establishment = ({ location }) => (
  <Layout>
    <Seo title="company_establishment" />
    <StaticImage
      src="../../images/company_establishment/title.jpg"
      alt="事業所のタイトルイメージ"
      layout="fullWidth"
      placeholder="blurred"
    />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <Wrapper>
        <p>大和化学工業株式会社の事業所をご紹介します。</p>
        <HeddingSection heddingTitle="本社・大阪工場" heddingWidth="100%">
          <div>
            <div className="column-2">
              <p> 所在地</p>
              <p>
                本社・大阪工場
                <br />
                〒533-0006
                <br />
                大阪府大阪市東淀川区上新庄3-1-11
                <br />
                &gt;&gt;
                <Link to="/company/access#osaka">地図はこちら</Link>
                <br />
                ＴＥＬ：(06)6328-0500
                <br />
                ＦＡＸ：(06)6328-2160
              </p>
            </div>
            <figure>
              <StaticImage
                src="../../images/company_establishment/image1.jpg"
                alt="本社・大阪工場"
                layout="fixed"
                placeholder="blurred"
              />
            </figure>
          </div>
        </HeddingSection>
        <HeddingSection heddingTitle="東京支社" heddingWidth="100%">
          <div>
            <div className="column-2">
              <p>所在地</p>
              <p>
                東京支社
                <br />
                〒132-0021
                <br />
                東京都江戸川区中央　4-17-19
                <br />
                &gt;&gt;
                <Link to="/company/access#tokyo">地図はこちら</Link>
                <br />
                ＴＥＬ：(03)3653-1171
                <br />
                ＦＡＸ：(03)3655-9025
              </p>
            </div>
            <figure>
              <StaticImage
                src="../../images/company_establishment/image2.jpg"
                alt="東京支社"
                layout="fixed"
                placeholder="blurred"
              />
            </figure>
          </div>
        </HeddingSection>
        <HeddingSection heddingTitle="東京工場" heddingWidth="100%">
          <div>
            <div className="column-2">
              <p>所在地</p>
              <p>
                東京工場
                <br />
                〒132-0021
                <br />
                東京都江戸川区中央　4-17-28
                <br />
                &gt;&gt;
                <Link to="/company/access#tokyo">地図はこちら</Link>
                <br />
                ＴＥＬ：(03)3653-1171
                <br />
                ＦＡＸ：(03)3653-1176
              </p>
            </div>
            <figure>
              <StaticImage
                src="../../images/company_establishment/image3.jpg"
                alt="東京工場"
                layout="fixed"
                placeholder="blurred"
              />
            </figure>
          </div>
        </HeddingSection>
      </Wrapper>
    </DisplayTemplate>
  </Layout>
);

const Wrapper = styled.section`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .column-2 {
    width: 80%;
    line-height: 1.8;
    p {
      width: 50%;
      margin: 0;
      min-width: 50%;
      &:first-child {
        min-width: 20%;
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
`;

export default establishment;
