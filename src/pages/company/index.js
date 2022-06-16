import * as React from 'react';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import Cards from '../../templates/Cards';
import DisplayTemplate from '../../templates/display-template';
import PathTree from '../../templates/path-tree';

const company = ({ location }) => {
  const companyDetailItem = [
    {
      id: 1,
      path: '/company/greeting',
      imgSrc: '../../images/company/thum1.jpg',
      title: 'ご挨拶',
      explanation: '当社の代表取締役社長、田中寛人のメッセージをご紹介します。',
    },
    {
      id: 2,
      path: '/company/outline',
      imgSrc: '../../images/company/thum2.jpg',
      title: '会社概要',
      explanation: '大和化学工業株式会社の会社概要をご紹介します。',
    },
    {
      id: 3,
      path: '/company/business',
      imgSrc: '../../images/company/thum3.jpg',
      title: '経営理念',
      explanation: '大和化学工業株式会社の経営理念をご紹介します。',
    },
    {
      id: 4,
      path: '/company/history',
      imgSrc: '../../images/company/thum4.jpg',
      title: '沿革',
      explanation: '大和化学工業株式会社の沿革をご紹介します。',
    },
    {
      id: 5,
      path: '/company/establishment',
      imgSrc: '../../images/company/thum5.jpg',
      title: '事業所',
      explanation: '大和化学工業株式会社の各事業所をご紹介します。',
    },
    {
      id: 6,
      path: '/company/affiliated',
      imgSrc: '../../images/company/thum6.jpg',
      title: '関連会社',
      explanation: '大和化学工業株式会社の関連会社をご紹介します。',
    },
    {
      id: 7,
      path: '/company/download',
      imgSrc: '../../images/company/thum7.jpg',
      title: '会社案内',
      explanation:
        '大和化学工業株式会社の会社案内をこちらよりダウンロードできます。',
    },
    {
      id: 8,
      path: '/company/access',
      imgSrc: '../../images/company/thum8.jpg',
      title: 'アクセス',
      explanation: '大和化学工業株式会社までの地図をご紹介します。',
    },
  ];
  return (
    <Layout>
      <Seo title="company" />
      <PathTree pathTree={location.pathname} />
      <p>
        こちらでは、大和化学工業株式会社の会社案内をご紹介いたします。ご覧になられる項目をクリックして下さい。
      </p>
      <Cards arrayItems={companyDetailItem} />
    </Layout>
  );
};

export default company;
