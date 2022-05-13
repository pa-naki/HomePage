import React from 'react';
import { faCarCrash } from '@fortawesome/free-solid-svg-icons';
export default [
  {
    url: `/search`,
    label: '製品検索',
    icon: <faCarCrash />,
    subMenu: [
      {
        url: `/search/sozai`,
        label: '素材・用途から検索',
        icon: <faCarCrash />,
      },
      {
        url: `/search/kinou`,
        label: '機能から検索',
        icon: <faCarCrash />,
      },
      {
        url: `/search/series`,
        label: 'シリーズ名から検索',
        icon: <faCarCrash />,
      },
    ],
  },
  {
    url: `/details`,
    label: '注目の製品',
    icon: <faCarCrash />,
    subMenu: [
      {
        url: `/details/koukin`,
        label: '抗菌剤注目',
        icon: <faCarCrash />,
      },
      {
        url: `/details/bouen`,
        label: '防炎剤注目',
        icon: <faCarCrash />,
      },
      {
        url: `/details/kinouyaku`,
        label: '機能薬剤注目',
        icon: <faCarCrash />,
      },
      {
        url: `/details/kamiyaku`,
        label: '紙薬剤注目',
        icon: <faCarCrash />,
      },
    ],
  },
  {
    url: `/research`,
    label: '研究開発',
    icon: <faCarCrash />,
    subMenu: null,
  },
  {
    url: `/about`,
    label: '評価技術センター',
    icon: <faCarCrash />,
    subMenu: null,
  },
  {
    url: `/company`,
    label: '会社案内',
    icon: <faCarCrash />,
    subMenu: [
      {
        url: `/company/greeting`,
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
        label: '会社案内ダウンロード',
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
        label: '大和化学の仕事とは',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/voice`,
        label: '研究員の生の声',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/entry`,
        label: 'エントリーフォーム',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/treatment`,
        label: '入社後の待遇',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/info`,
        label: '募集要項',
        icon: <faCarCrash />,
      },
      {
        url: `/recruit/faq`,
        label: 'Q&A',
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
