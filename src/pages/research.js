import * as React from 'react';
import { Rdefforts, RelateCouncil } from '../components/idea/development';
import styledComponents from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PathTree from '../templates/path-tree';
import DisplayTemplate from '../templates/display-template';
import styled from 'styled-components';
import { H2Section } from '../templates/styles';

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
      <div>
        <h1>フィールドは世界！</h1>
        <div>人と地球に優しい高品質のオンリーワン</div>
        <Wrapper>
          <figure>
            <StaticImage
              src="../images/research/image3.jpg"
              layout="constrained"
              placeholder="blurred"
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
        </Wrapper>
        <H2Section h2Title="研究開発への取り組み">
          <p>固有技術を深耕し、特殊化した高機能製品を開発</p>
          <div>
            <ol>
              <li>事業戦略に基づいた新規製品開発</li>
              <li>コア技術の育成による事業基盤強化</li>
              <li>重点化とフレキシブルな運営による研究効率の向上</li>
            </ol>
            <p>
              持続的に発展できる研究開発型企業として、顧客満足の向上につながる研究開発を継続推進
            </p>
          </div>
        </H2Section>
        <RelateCouncil />
      </div>
    </DisplayTemplate>
  </Layout>
);

const Wrapper = styled.figcaption`
  display: flex;
  justify-content: space-between;
  align-items: center;
  figure {
    width: 40%;
    text-align: center;
  }
`;

export default Research;
