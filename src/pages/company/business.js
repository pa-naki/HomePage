import * as React from 'react';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { Philosophy, Comfort, Quality } from '../../components/idea/company';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import { HeddingSection } from '../../templates/styles';
import styled from 'styled-components';

const business = ({ location }) => (
  <Layout>
    <Seo title="Business" />
    <StaticImage
      src="../../images/company_business/title.jpg"
      layout="fullWidth"
      placeholder="blurred"
    />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <Wrapper>
        <HeddingSection heddingTitle="経営理念" HeddingTag="h1">
          <p>
            私ども大和化学工業は、次の4つの理念を使命として、地球に優しい高品質の製品を提供するとともに、人と自然環境の融合を理念においた製品づくりを目指しています。
          </p>
          <ol>
            <li>1.日々挑戦と創造に努力。</li>
            <li>2.信頼と和、人材育成。</li>
            <li>3.健康と安全、社員の豊かな暮らし。</li>
            <li>4.会社の発展と地域社会への貢献。</li>
          </ol>
          <HeddingSection heddingTitle="快適性の追及" styleTemplate="stripe">
            <div>
              <figure>
                <StaticImage
                  src="../../images/company_business/image1.jpg"
                  alt="地球環境の未来から、真の快適性を追求していきます"
                  layout="fixed"
                  placeholder="blurred"
                />
              </figure>
              <p>
                未来の地球環境を考えると、私たちが追い求めた豊かさや便利さが真の快適性といえるのか疑問です。
                それは、温暖化やオゾン層の破壊に見られるように、生活の代償としてもたらされた不利益の上に成り立つ一時の満足に過ぎないのではないでしょうか。
                地球環境問題が叫ばれる今、人として、そして企業としてのあるべき姿、進むべき道が問い直されています。
                私たち大和化学工業も地球の住人として、未来に対する意志を確かな形として具現化、地球環境との調和を考えた快適性に対する答えを出そうとしています。
              </p>
            </div>
          </HeddingSection>

          <HeddingSection heddingTitle="モノではなく質" styleTemplate="stripe">
            <div>
              <p>
                モノづくりに留まらず、対象となる素材の質を高め、そこから新たに生まれる快適性を追求し続ける――私たち大和化学工業の開発コンセプトです。
                例えば、抗菌剤や防虫剤。繊維などの素材がもつ肌ざわりや風合いはそのままに、抗菌性や防虫性などの新たな機能を付加。そこから生まれた製品を媒介に人や暮らしの快適性を創造する。一方では生分解性のプラスチックの開発など、製品自身の性能を変えることにより地球環境の保護に貢献するなど、生活消費材から工業製品にいたるまで、様々な分野で私たちの化学技術による快適性が実現されています。
              </p>
              <figure>
                <StaticImage
                  src="../../images/company_business/image2.jpg"
                  alt="モノづくりではなく、質づくり"
                  layout="fixed"
                  placeholder="blurred"
                />
              </figure>
            </div>
            <div class="business_box">
              未来を見据え、化学業界をリードする独創力と技術力で、
              常に新しい製品開発と新しい分野へのチャレンジを推し進めるなど
              <br />
              大和化学工業は人と地球の快適性を考えた質づくりを常にめざしています。
            </div>
          </HeddingSection>
        </HeddingSection>
      </Wrapper>
    </DisplayTemplate>
  </Layout>
);

const Wrapper = styled.section`
  line-height: 1.8;
  ol {
    border: double 4px #d2f6e1;
    background-color: #f4fcf8;
    font-weight: bolder;
    font-size: 2.5rem;
    line-height: 1.8;
    text-align: center;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .business_box {
    margin-top: 2rem;
    font-size: 1.3rem;
    border: 1px solid #c8c8c8;
    color: red;
    background: #def9e7;
  }
`;

export default business;
