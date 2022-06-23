import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import { HeddingSection } from '../../templates/styles';
import styled from 'styled-components';
import DisplayTemplate from '../../templates/display-template';
import RecruitCards from '../../components/share/Recruit-cards';

const info = ({ location }) => {
  const infoTree = [
    {
      id: 1,
      tableTH: '応募方法',
      tableTD: <p>自由応募</p>,
    },
    {
      id: 2,
      tableTH: '募集対象者',
      tableTD: <p>2021年3月卒業の方</p>,
    },
    {
      id: 3,
      tableTH: '応募資格',
      tableTD: (
        <p>
          2020年4月1日現在、大学院修士課程卒26歳以下、並びに大学卒24歳以下で何れも2021年3月卒業見込の者
        </p>
      ),
    },
    {
      id: 4,
      tableTH: '募集職種',
      tableTD: <p>技術系（3ヶ月間各部門研修後正式配属）</p>,
    },
    {
      id: 5,
      tableTH: '募集人数',
      tableTD: <p>数名</p>,
    },
    {
      id: 6,
      tableTH: '選考日',
      tableTD: <p>当社担当者より通知致します。</p>,
    },
    {
      id: 7,
      tableTH: '試験方法',
      tableTD: (
        <p>
          1次選考：書類選考
          <br />
          2次選考：筆記試験（専門科目、英語、一般常識、作文）、面接 <br />
          提出書類：履歴書、卒業見込証明書、成績証明書、健康診断書、レジュメ（学校で研究した事をA4用紙1～2枚程度
          ）
        </p>
      ),
    },
    {
      id: 8,
      tableTH: '来訪要領',
      tableTD: (
        <p>
          当社では大和化学工業をより深く知っていただけるよう、会社見学を受け付けております。
          事前に予約をお願いしております。
        </p>
      ),
    },
    {
      id: 9,
      tableTH: '日時',
      tableTD: <p>毎週月曜日～金曜日（9:00～16:00）</p>,
    },
    {
      id: 10,
      tableTH: '場所',
      tableTD: <p>大阪工場又は東京工場</p>,
    },
  ];
  return (
    <Layout>
      <Seo title="recruit_info" />
      <StaticImage
        src="../../images/recruit_info/title.jpg"
        layout="fullWidth"
        placeholder="blurred"
      />
      <PathTree pathTree={location.pathname} />
      <DisplayTemplate>
        <HeddingSection
          heddingTitle="募集要領"
          heddingWidth="100%"
          HeddingTag="h1"
        >
          <Wrapper>
            <p>
              大和化学工業株式会社では、以下のような人材を幅広く採用し、育成に取り組んでおります。
              下記の要項で募集しております。意欲のある方なら、男性・女性を問わず、やりがいのある職場です。
              ぜひ、自分の力をこの職場で発揮してください。
              次世代の大和化学工業を担う皆様の募集をお待ちしております。{' '}
            </p>
            <div className="section-1">
              <figure>
                <StaticImage
                  src="../../images/recruit_treatment/image1.jpg"
                  alt="理系の仕事"
                  layout="fixed"
                  placeholder="blurred"
                  formats={['webp', 'avif', 'auto']}
                />
              </figure>
              <div>
                <span>
                  次世代の大和化学工業を担う新しい風を当社が求める人材は
                </span>
                <br />
                &bull;&nbsp;専門知識を生かし、自分の見解を立証出来る力のある人
                <br />
                &bull;&nbsp;アグレッシブでモチベーションの高い人
                <br />
                &bull;&nbsp;常にベンチャー精神を持ち、新しい物を創造、形に出来る人
              </div>
            </div>
            <table className="info-table">
              {infoTree.map((tree, index) => {
                const { tableTH, tableTD, id } = tree;
                return (
                  <tr key={id} className={`tree-${id}`}>
                    <th>{tableTH}</th>
                    <td>{tableTD}</td>
                  </tr>
                );
              })}
            </table>
            <RecruitCards />
            <ul className="recruit-root">
              <li className="text">
                <strong>エントリー</strong>
                <div className="description">
                  <p>こちらよりエントリーください</p>
                </div>
              </li>
              <li className="strait">&#9660;</li>
              <li className="text">
                <strong>1次選考</strong>
                <div className="description">
                  <p>書類選考・適性検査</p>
                </div>
              </li>
              <li className="strait">&#9660;</li>
              <li className="text">
                <strong>2次選考</strong>
                <div className="description">
                  <p>筆記試験・個人面接</p>
                </div>
              </li>
              <li className="strait">&#9660;</li>
              <li className="text">
                <strong>内定</strong>
                <div className="description"></div>
              </li>
            </ul>
            <div>
              <p>※WEB一次選考の方は、二次で適性検査を行います。</p>
              <p>※二次選考時に工場見学を予定しております。</p>
              <p>
                ※選考前の工場見学や対面一次選考ご希望の方は個別に調整をさせていただきます。
              </p>
            </div>
          </Wrapper>
        </HeddingSection>
      </DisplayTemplate>
    </Layout>
  );
};

const Wrapper = styled.section`
  p {
    margin: 0;
  }
  .section-1 {
    margin: 15px auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
  .info-table {
    margin: 15px auto;
    td,
    th {
      padding: 1rem 1rem;
    }
  }
  .recruit-root {
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 5%;
      text-align: center;
    }
    .text {
      width: 20%;
      height: 13rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      strong {
        height: 20%;
        padding: 10px;
        text-align: center;
      }
      .description {
        height: 80%;
      }
    }
    .strait {
      transform: rotate(-90deg);
    }
  }
`;

export default info;
