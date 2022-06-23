import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import { HeddingSection } from '../../templates/styles';
import styled from 'styled-components';
import RecruitCards from '../../components/share/Recruit-cards';

const treatment = ({ location }) => {
  const tableTree = [
    {
      id: 1,
      tableTH: '初任給',
      tableTD: (
        <p>
          大学院：基本給282,000 　大学生：基本給212,000円
          <br />
          専門学校・短期大学：基本給190,000円
        </p>
      ),
    },
    {
      id: 2,
      tableTH: '住宅手当',
      tableTD: (
        <p>
          独立生計者18,000円(大阪)、20,000円(東京)
          <br />
          親元通勤者 5,000円
        </p>
      ),
    },
    {
      id: 3,
      tableTH: '昇給',
      tableTD: <p>年1回（4月）</p>,
    },
    {
      id: 4,
      tableTH: '賞与',
      tableTD: <p>年２回</p>,
    },
    {
      id: 5,
      tableTH: '勤務地',
      tableTD: <p>大阪又は東京</p>,
    },
    {
      id: 6,
      tableTH: '勤務時間',
      tableTD: (
        <p>
          8:30～17:10
          <br />
          休憩時間：１時間10分
          <br />
          （10:00～10:10：10分、12:10～13:00：50分、15:00～15:10：10分）
        </p>
      ),
    },
    {
      id: 7,
      tableTH: '休日',
      tableTD: <p>週休2日／祝祭日／年末年始6日間／夏季2日間</p>,
    },
    {
      id: 8,
      tableTH: '年次有給休暇',
      tableTD: (
        <p>
          入社初年度10日間
          <br />
          4月1日を基準として以降3年間迄1年経過する毎に1日を加算し、4年目は2日を加算、5年目以降1年経過する毎に1日を加算し最高20日。
        </p>
      ),
    },
    {
      id: 9,
      tableTH: '独身寮',
      tableTD: <p>有</p>,
    },
    {
      id: 10,
      tableTH: '保養所',
      tableTD: <p>和歌山県白浜、長野県諏訪（大和化学工業所有保養所）</p>,
    },
    {
      id: 11,
      tableTH: '労働組合',
      tableTD: <p>有</p>,
    },
  ];
  return (
    <Layout>
      <Seo title="recruit_treatment" />
      <StaticImage
        src="../../images/recruit_treatment/title.jpg"
        layout="fullWidth"
        placeholder="blurred"
      />
      <PathTree pathTree={location.pathname} />
      <DisplayTemplate>
        <HeddingSection
          heddingTitle="募集要領"
          HeddingTag="h1"
          heddingWidth="100%"
        >
          <Wrapper>
            <div className="section-1">
              <p>
                大和化学工業株式会社では、以下のような人材を幅広く採用し、育成に取り組んでおります。
                下記の要項で募集しております。意欲のある方なら、男性・女性を問わず、やりがいのある職場です。
                ぜひ、自分の力をこの職場で発揮してください。
                次世代の大和化学工業を担う皆様の募集をお待ちしております。
              </p>
              <figure>
                <StaticImage
                  src="../../images/recruit_info/image7.jpg"
                  alt="募集要領"
                  layout="fixed"
                  placeholder="blurred"
                  formats={['webp', 'avif', 'auto']}
                />
              </figure>
            </div>
            <HeddingSection
              heddingTitle="入社後の待遇"
              styleTemplate="stripe"
              heddingWidth="35%"
            >
              <table className="recruit-table">
                {tableTree.map((tree, index) => {
                  const { tableTH, tableTD, id } = tree;
                  return (
                    <tr key={id} className={`tree-${id}`}>
                      <th>{tableTH}</th>
                      <td>{tableTD}</td>
                    </tr>
                  );
                })}
              </table>
            </HeddingSection>
            <RecruitCards />
            <HeddingSection heddingTitle="研修期間" styleTemplate="stripe">
              <div class="info_text2">
                弊社では、新入社員に対して３ヶ月間の研修プログラムを用意しています。
                <br />
                ３ヶ月の研修では、全部門での研修を行い、会社全体の流れを覚えていただきます。
                <br />
                <br />
              </div>
              <ul className="recruit-root">
                <li className="text">
                  <strong>4月</strong>
                  <div className="description">
                    <p>入社式</p>
                    <p>社内研修(管理部門)</p>
                    <p>主要諸規則等説明</p>
                    <p>ビジネスマナー研修</p>
                    <p>製造業の仕組み</p>
                    <p>基幹システムについて</p>
                  </div>
                </li>
                <li className="strait">&#9660;</li>
                <li className="text">
                  <strong>5月</strong>
                  <div className="description">
                    <p>開発販売部門</p>
                    <p>製品説明</p>
                    <p>製造部門研修</p>
                    <p>品質管理業務研修</p>
                    <p>出荷業務</p>
                    <p>製品製造</p>
                  </div>
                </li>
                <li className="strait">&#9660;</li>
                <li className="text">
                  <strong>6月</strong>
                  <div className="description">
                    <p>開発販売部門研修</p>
                    <p>製品について</p>
                    <p>性能評価試験について</p>
                  </div>
                </li>
                <li className="strait">&#9660;</li>
                <li className="text">
                  <strong>7月</strong>
                  <div className="description">
                    <p>採用部門に配属</p>
                  </div>
                </li>
                <li className="strait">&#9660;</li>
              </ul>
            </HeddingSection>
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
    display: flex;
    p {
      width: 70%;
      margin: auto;
    }
    figure {
      width: 27%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
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

export default treatment;
