import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import { HeddingSection } from '../../templates/styles';
import styled from 'styled-components';

const Faq = ({ location }) => {
  const faqs = [
    {
      id: 1,
      question: '応募方法について教えてください。',
      answer: (
        <p>
          エントリーは、電話・メールから受け付けております。詳細は
          <a href="./recruit_info.html">募集要領</a>をご覧下さい。
        </p>
      ),
    },
    {
      id: 2,
      question: '採用スケジュールについて教えてください。',
      answer: (
        <p>
          今年度の採用活動のプロセスは、
          <a href="./recruit_info.html">募集要領</a>をご覧ください。
          <br />
          会社説明会は、事前に連絡をいただいて日程を調整します。採用試験は会社説明会の時にお知らせします
        </p>
      ),
    },
    {
      id: 3,
      question: '選考について教えてください。',
      answer: (
        <p>
          技術系の筆記試験は基本的な学力が身についているかどうかの確認程度の内容です。
          <br />
          面接は、今までの研究内容と人物を総合的に見ます。
        </p>
      ),
    },
    {
      id: 4,
      question: '寮や社宅へは入居できますか？',
      answer: <p>実家から勤務地が遠い方の為に独身寮は備えています。</p>,
    },
    {
      id: 5,
      question:
        '現在大阪の大学で学んでおりますが、卒業後は実家のある東京での勤務を希望していますが、勤務地は選べますか？',
      answer: (
        <p>
          弊社では、勤務地別（大阪・東京）に採用を行なっています。
          <br />
          毎年、募集している勤務地が異なる場合がありますので、募集要領でご確認下さい。
        </p>
      ),
    },
    {
      id: 6,
      question: '教育体制はどのようなものですか？',
      answer: (
        <p>
          入社後3ヶ月の間は、各部署で新入社員研修を行ないます。
          <br />
          その後、配属部署で必要に応じて社外研修・講習会を受講していただきます。
        </p>
      ),
    },
  ];
  return (
    <Layout>
      <Seo title="recruit_faq" />
      <StaticImage
        src="../../images/recruit_faq/title.jpg"
        layout="fullWidth"
        placeholder="blurred"
      />
      <PathTree pathTree={location.pathname} />
      <DisplayTemplate>
        <HeddingSection
          heddingTitle="採用情報 Q&amp;A"
          HeddingTag="h1"
          heddingWidth="100%"
        >
          <Wrapper>
            <p>
              弊社の採用情報について、よくある質問をまとめました。募集要領と併せてご覧ください。
              <br />
              <Link to="/recruit/info">&gt;&gt;&nbsp;募集要領はこちら</Link>
            </p>

            {faqs.map((faq, index) => {
              const { id, question, answer } = faq;
              return (
                <details key={id} className={`faq-${id}`}>
                  <summary>
                    <h3>
                      Q{id} {question}
                    </h3>
                  </summary>
                  <div>
                    <span>A{id}</span>
                    {answer}
                  </div>
                </details>
              );
            })}
          </Wrapper>
        </HeddingSection>
      </DisplayTemplate>
    </Layout>
  );
};

const Wrapper = styled.section`
  details {
    summary {
      h3 {
        display: inline-block;
        height: 100%;
        margin: 15px 0;
      }
    }
  }
  .faq-5 {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export default Faq;
