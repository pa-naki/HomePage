import React from 'react';
export default [
  {
    url: `/search`,
    label: '製品検索',
    icon: <faCarCrash />,
  },
  {
    url: `/details`,
    label: '注目の製品',
    icon: <faCarCrash />,
  },
  {
    url: `/research`,
    label: '研究開発',
    icon: <faCarCrash />,
  },
  {
    url: `/about`,
    label: '評価技術',
    icon: <faCarCrash />,
  },
  {
    url: `/company`,
    label: '会社案内',
    icon: <faCarCrash />,
    subMenu: [
      {
        url: `/company/greeting`,
        page: '会社案内',
        label: 'ご挨拶',
        icon: <faCarCrash />,
      },
      {
        url: `/company/business`,
        label: '経営理念',
        icon: <faCarCrash />,
      },
      {
        url: `/company/establishment`,
        label: '事業所',
        icon: <faCarCrash />,
      },
      {
        url: `/company/download`,
        label: '会社案内',
        icon: <faCarCrash />,
      },
      {
        url: `/company/outline`,
        label: '会社概要',
        icon: <faCarCrash />,
      },
      {
        url: `/company/history`,
        label: '沿革',
        icon: <faCarCrash />,
      },
      {
        url: `/company/affiliated`,
        label: '関連会社',
        icon: <faCarCrash />,
      },
      {
        url: `/company/access`,
        label: 'アクセス',
        icon: <faCarCrash />,
      },
    ],
  },
  {
    url: `/recruit`,
    label: '採用情報',
    icon: <faCarCrash />,
    subMenu: [
      {
        url: `/recruit/work`,
        label: '仕事内容',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/interview`,
        label: 'インタビュー',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/entry`,
        label: 'エントリー',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/treatment`,
        label: '待遇',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/info`,
        label: '募集要項',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/faq`,
        label: 'よくある質問',
        icon: <faCarCrash />,
      },
    ],
  },
  {
    url: `/contact`,
    label: 'お問い合わせ',
    icon: <faCarCrash />,
    subMenu: null,
  },
];
