import React from 'react';
import { GoGlobe } from 'react-icons/go';

const categoryGroup = {
  affiliatedCompany: '関係会社',
  domesticGroupCompany: '国内オー・ジーグループ',
  overseasGroupCompanies: '海外オー・ジーグループ',
};

// 関係会社リスト
export const affiliates = [
  {
    id: 1,
    category: categoryGroup.affiliatedCompany,
    href: 'http://www.lsdaiwa.com/',
    icon: <GoGlobe />,
    title: <>無&#38177;昱大精細化工有限公司</>,
    address: '',
    explanation: '中国の関係会社です。',
  },
  {
    id: 2,
    category: categoryGroup.affiliatedCompany,
    href: 'http://www.wadaikin.com/',
    icon: <GoGlobe />,
    title: <>江西和大金実業有限公司</>,
    address: '',
    explanation: '中国の関係会社です。',
  },
];

// 国内オー・ジーグループ
export const ogGroupAffiliates = [
  {
    id: 1,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/',
    icon: <GoGlobe />,
    title: <>オージー株式会社</>,
    address: '',
    explanation:
      '染料・顔料・染色用薬剤・化学工業薬品・塗料・原料樹脂・樹脂製品・医薬品・機能材料・食品・機械機器及びそのソフトウェアの販売並びに輸出入業、不動産賃貸業',
  },
  {
    id: 2,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/chatani.html',
    icon: <GoGlobe />,
    title: <>茶谷産業株式会社</>,
    address: '大阪市淀川区',
    explanation:
      '各種車輛並びに関連製品、建設機械、資材、電気・電子機器、インテリア、輸入雑貨等の輸出入及び製造販売',
  },
  {
    id: 3,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/company/group/%E3%82%AA%E3%83%BC%E3%82%B8%E3%83%BC%E3%83%95%E3%82%A3%E3%83%AB%E3%83%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/',
    icon: <GoGlobe />,
    title: <>オージーフィルム株式会社</>,
    address: '神奈川県足柄上郡',
    explanation: 'プラスチックフィルム、フィルム加工品等の製造販売',
  },
  {
    id: 4,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/company/group/%E3%82%AA%E3%83%BC%E3%82%B8%E3%83%BC%E3%83%95%E3%82%A3%E3%83%AB%E3%83%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/',
    icon: <GoGlobe />,
    title: <>オージーフィルム株式会社</>,
    address: '神奈川県足柄上郡',
    explanation: 'プラスチックフィルム、フィルム加工品等の製造販売',
  },
];
