import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import styled from 'styled-components';

import Cards from '../../templates/cards';
import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';

const home = ({ location }) => {
  const recruitDetailItem = [
    {
      id: 1,
      path: '/recruit/work',
      imgSrc: '../../images/recruit/thum1.jpg',
      title: '仕事内容',
      explanation: '当社の代表取締役社長、田中寛人のメッセージをご紹介します。',
    },
    {
      id: 2,
      path: '/recruit/treatment',
      imgSrc: '../../images/recruit/thum2.jpg',
      title: '待遇',
      explanation: '入社後の待遇、研修についてご紹介します。',
    },
    {
      id: 3,
      path: '/recruit/interview',
      imgSrc: '../../images/recruit/thum3.jpg',
      title: 'インタビュー',
      explanation: '研究室で働いている先輩の生の声をご覧いただけます。',
    },
    {
      id: 4,
      path: '/recruit/info',
      imgSrc: '../../images/recruit/thum4.jpg',
      title: '募集要領',
      explanation: '募集要領と応募から入社までの流れをご覧いただけます。',
    },
    {
      id: 5,
      path: '/recruit/entry',
      imgSrc: '../../images/recruit/thum5.jpg',
      title: 'エントリーフォーム',
      explanation: 'オンラインからのエントリーはこちらからお願いします。',
    },
    {
      id: 6,
      path: '/recruit/faq',
      imgSrc: '../../images/recruit/thum6.jpg',
      title: 'Q&A',
      explanation:
        '採用に関するQ&Aをご紹介いたします。応募の際のご参考にしてください。',
    },
  ];
  return (
    <Layout>
      <Seo title="recruit_home" />
      <StaticImage
        src="../../images/top/slide02.jpg"
        layout="fullWidth"
        placeholder="blurred"
      />
      <PathTree pathTree={location.pathname} />
      <Wrapper>
        <Cards arrayItems={recruitDetailItem} />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div``;

export default home;
