import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import { HeddingSection } from '../../templates/styles';

const work = ({ location }) => (
  <Layout>
    <Seo title="recruit_work" />
    <StaticImage
      src="../../images/recruit_work/title.jpg"
      layout="fullWidth"
      placeholder="blurred"
      formats={['webp', 'avif', 'auto']}
    />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <HeddingSection
        heddingTitle="もの創りの楽しさと質づくり"
        heddingWidth="100%"
        SecondTag="h3"
        secondTitle="～大和化学は化学メーカーであり夢を創ることが出来ます～"
      >
        <Wrapper>
          <div className="section-1">
            <p align="left">
              メーカーの楽しさは自分が創造した夢を形にして、世の中の人の暮らしに役に立つ事でしょう！
              <br />
              国民の生活意識が健康で快適な生活の充実を求める時代の中で、エコ・環境保護・福祉・安心・安全・快適、等のキーワードが要求にマッチした製品であります。
              <br />
              大和化学の開発コンセプトは「人と地球の快適性を追求」する事です。例えば衣・食・住の中の衣は、人間の身体を危険から守る事が第一訴求目的ですが、衣（繊維）に撥水・吸汗速乾・発熱・冷感・消臭・保湿・快適温度維持・抗菌・防かび・防虫・・・等の機能が付与されているのが当たり前となってきました、これが質つくりです。
            </p>
            <figure>
              <StaticImage
                src="../../images/recruit_work/image0.jpg"
                alt="大和化学工業の仕事"
                layout="fixed"
                placeholder="blurred"
                formats={['webp', 'avif', 'auto']}
              />
            </figure>
          </div>
          <p>
            研究開発者として人が快適に暮らす為には何が必要か思考・検索・探求・模索し、現実の物に変えていくのが開発の仕事であり毎日チャレンジしなければなりません。未来を先取りしたユーザーの声・消費者の声・世の中の声、をいち早く捕らえ、独創力と技術力で常に新しい製品をスピード開発し、新分野へチャレンジし、人と地球の快適性を追求しつづけます。
          </p>
          <HeddingSection
            heddingTitle="主な業務"
            styleTemplate="stripe"
            heddingWidth="27%"
          >
            <div className="section-2">
              <div className="workTwoImage">
                <figure className="workImage-1">
                  <StaticImage
                    src="../../images/recruit_work/image1.jpg"
                    alt="大和化学工業の仕事"
                    layout="fixed"
                    placeholder="blurred"
                    formats={['webp', 'avif', 'auto']}
                  />
                </figure>
                <figure className="workImage-2">
                  <StaticImage
                    src="../../images/recruit_work/image2.jpg"
                    alt="大和化学工業の仕事"
                    layout="fixed"
                    placeholder="blurred"
                    formats={['webp', 'avif', 'auto']}
                  />
                </figure>
              </div>
              <ul>
                <li>
                  &bull;&nbsp;研究開発型企業として顧客満足の向上に繋がる研究開発
                </li>

                <li>&bull;&nbsp;コア技術の育成による事業基盤の強化</li>

                <li>&bull;&nbsp;将来的新規事業の研究開発</li>

                <li>&bull;&nbsp;地球環境と調和を考えた快適性製品の開発</li>

                <li>&bull;&nbsp;抗菌、防かび、防虫、防炎、機能性の評価試験</li>

                <li>&bull;&nbsp;自主テーマの提案</li>

                <li>&bull;&nbsp;テーマを完成させるための市場調査</li>

                <li>
                  &bull;&nbsp;新製品の薬剤レシピの開発と生産ラインへの移行
                </li>

                <li>&bull;&nbsp;開発製品の効能評価試験とその技術資料の作成</li>

                <li>&bull;&nbsp;開発製品の販売サポート</li>
              </ul>
            </div>
          </HeddingSection>
          <HeddingSection
            heddingTitle="主な製品"
            heddingWidth="27%"
            styleTemplate="stripe"
          >
            <div className="section-3">
              <figure>
                <StaticImage
                  src="../../images/recruit_work/image3.jpg"
                  alt="大和化学工業の仕事"
                  layout="fixed"
                  placeholder="blurred"
                  formats={['webp', 'avif', 'auto']}
                />
              </figure>
              <ul>
                <li>ファインケミカル品</li>
                <li>製紙用薬剤</li>
                <li>製紙用機能薬剤</li>
                <li>繊維用染色助剤</li>
                <li>繊維用機能薬剤</li>
                <li>防炎剤</li>
                <li>殺菌剤</li>
                <li>防カビ剤</li>
                <li>防虫剤</li>
                <li>消臭剤</li>
                <li>医薬品</li>
              </ul>
            </div>
          </HeddingSection>
        </Wrapper>
      </HeddingSection>
    </DisplayTemplate>
  </Layout>
);

const Wrapper = styled.section`
  .section-1 {
    display: flex;
    p {
      width: 75%;
    }
    figure {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .section-2 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    background-color: #def9e7;
    width: 70%;
    figure {
      margin-top: 10px;
    }
    ul {
      line-height: 2.5;
      li {
        font-size: 1.2rem;
      }
    }
  }
  .section-3 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    width: 70%;
    background-color: #def9e7;
    figure {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 27%;
    }
    ul {
      display: flex;
      flex-flow: row wrap;
      margin: 10px auto;
      width: 70%;
      li {
        font-size: 1.2rem;
        width: calc(100% / 3);
        list-style: inside;
      }
    }
  }
`;

export default work;
