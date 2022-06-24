import * as React from 'react';
import { Rdefforts, RelateCouncil } from '../components/idea/development';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PathTree from '../templates/path-tree';
import DisplayTemplate from '../templates/display-template';
import styled from 'styled-components';
import { HeddingSection } from '../templates/styles';

const Research = ({ location }) => (
  <Layout>
    <Seo title="research" />
    <StaticImage
      src="../images/research/title.jpg"
      alt="researchTitleImage"
      placeholder="blurred"
      layout="fullWidth"
      height="auto"
    />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <Wrapper>
        <HeddingSection
          heddingTitle="フィールドは世界！"
          HeddingTag="h1"
          heddingWidth="82%"
        >
          <p>人と地球に優しい高品質のオンリーワン</p>
          <div>
            <figure className="slogan">
              <StaticImage
                src="../images/research/image3.jpg"
                layout="fixed"
                placeholder="blurred"
                className="image1"
              />
            </figure>
            <p>
              独自の技術と品質で世界にむけて発進。
              <br />
              大和化学工業は東京工場、大阪工場にそれぞれ研究開発部門を設置、人々に「安心と快適性」を提供するため、全員が情熱に燃えて日々挑戦しています。
              <br />
              ユーザーが今何を求め、何を欲しているかを直接キャッチ、「グローバル」「ニッチ」を
              スローガンに、ユーザーと一体になって製品開発を進める。－－－私たち大和化学工業の化学技術は、そんな開発コンセプトに支えられています。
              <br />
              挑戦、創造、スピードを合言葉に、大和化学工業は日々激しく変化する世の中のニーズを
              的確に捉え、化学業界をリードする独走力と技術力で、つねに新しい製品開発と、新しい分野へのチャレンジを推し進めるなど、人と地球に優しい高品質のオンリーワンを目指し、社会に貢献し続けます。
            </p>
          </div>
        </HeddingSection>
        <HeddingSection
          heddingTitle="研究開発への取り組み"
          styleTemplate="stripe"
        >
          <p>固有技術を深耕し、特殊化した高機能製品を開発</p>
          <div className="RandDsection">
            <p>
              (1)事業戦略に基づいた新規製品開発 <br />
              (2)コア技術の育成による事業基盤強化 <br />
              (3)重点化とフレキシブルな運営による研究効率の向上 <br />
              持続的に発展できる研究開発型企業として、顧客満足の向上につながる研究開発を継続推進
            </p>
            <figure>
              <StaticImage
                src="../images/research/image2.jpg"
                alt="開発に取り組んでいる写真"
                layout="fixed"
                placeholder="blurred"
              />
            </figure>
          </div>
        </HeddingSection>
        <HeddingSection
          heddingTitle="関連協議会・学会・新聞等"
          styleTemplate="stripe"
        >
          <ul>
            <li>
              <a href="https://www.kohkin.net/">抗菌製品技術協議会</a>
            </li>
            <li>
              <a href="http://www.sengikyo.or.jp/">
                社団法人 繊維評価技術協議会
              </a>
            </li>
            <li>
              <a href="https://www.jhpia.or.jp/">
                社団法人 日本衛生材料工業連合会
              </a>
            </li>
            <li>
              <a href="https://jp-surfactant.jp/">日本界面活性剤工業会</a>
            </li>
            <li>
              <a href="https://www.jsch.or.jp/">日本産業皮膚衛生協会</a>
            </li>
            <li>
              <a href="https://senken.co.jp/">繊研新聞</a>
            </li>
          </ul>
        </HeddingSection>
      </Wrapper>
    </DisplayTemplate>
  </Layout>
);

const Wrapper = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1.8em;
    figure {
      display: flex;
      justify-content: center;
      width: 20%;
      min-width: 170px;
    }
    p {
      width: 80%;
      margin: 0;
    }
  }
  .RandDsection {
    color: red;
    border: 1px solid var(--clr-black);
    background-color: #def9e7;
    p {
      color: red;
    }
    img {
    }
  }
  ul {
    border: 1px solid var(--clr-black);
    background-color: #def9e7;
    margin-top: 2rem;
    line-height: 1.8em;
    padding: 15px 0;
    li {
      margin-left: 5%;
      a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export default Research;
