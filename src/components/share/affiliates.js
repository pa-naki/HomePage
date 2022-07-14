import React from 'react';
import { GoGlobe } from 'react-icons/go';

const categoryGroup = {
  affiliatedCompany: '関係会社',
  domesticGroupCompany: '国内オー・ジーグループ',
  overseasGroupCompany: '海外オー・ジーグループ',
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
  {
    id: 5,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/yamago.html',
    icon: <GoGlobe />,
    title: <>山五化成工業株式会社</>,
    address: '山口県岩国市',
    explanation: 'プラスチック成形及びコンパウンドの製造販売',
  },
  {
    id: 6,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/ogkagaku.html',
    icon: <GoGlobe />,
    title: <>オージー化学工業株式会社</>,
    address: '北海道苫小牧市',
    explanation: '塗料用シンナー、ラッカーシンナー、一般溶剤類等の製造販売',
  },
  {
    id: 7,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/suzu_kawa.html',
    icon: <GoGlobe />,
    title: <>鈴川化学工業株式会社</>,
    address: '静岡県富士市',
    explanation: '珪酸ソーダ、廃水処理用薬品、その他各種添加剤等の製造販売',
  },
  {
    id: 8,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/toakasei.html',
    icon: <GoGlobe />,
    title: <>東亜化成株式会社</>,
    address: '静岡県磐田市',
    explanation: '染料、顔料、工業用油剤、合成樹脂の製造・加工及び販売',
  },
  {
    id: 9,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/daido.html',
    icon: <GoGlobe />,
    title: <>大同産業株式会社</>,
    address: '東京都中央区',
    explanation: '有機・無機薬品、溶材、接着剤、シリコーン製品等の販売',
  },
  {
    id: 10,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/fo_tech.html',
    icon: <GoGlobe />,
    title: <>株式会社エフ・オー・テック</>,
    address: '東京都千代田区',
    explanation: '重質炭酸カルシウムの製造及び販売、カオリンの加工及び販売',
  },
  {
    id: 11,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/ogwakayama.html',
    icon: <GoGlobe />,
    title: <>オー・ジー和歌山株式会社</>,
    address: '和歌山県和歌山市',
    explanation: '染料・顔料、中間物、化学工業薬品の販売',
  },
  {
    id: 12,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/yamato.html',
    icon: <GoGlobe />,
    title: <>株式会社やまとトレーディング</>,
    address: '北海道札幌市',
    explanation: '各種農畜産資材の輸入販売業',
  },
  {
    id: 13,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/og_nagase.html',
    icon: <GoGlobe />,
    title: <>オー・ジー長瀬カラーケミカル株式会社</>,
    address: '大阪市西区',
    explanation:
      '染顔料・繊維加工剤・機能加工剤・化学品・石油化学製品及び繊維製品等の販売',
  },
  {
    id: 14,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/chuwa.html',
    icon: <GoGlobe />,
    title: <>中和化学薬品株式会社</>,
    address: '東京都中央区',
    explanation: '顔料着色剤、界面活性剤、合成樹脂全般、焼却炉等の販売',
  },
  {
    id: 15,
    category: categoryGroup.domesticGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/noack.html',
    icon: <GoGlobe />,
    title: <>株式会社ノアック</>,
    address: '大阪市淀川区',
    explanation: 'コンピュータソフトウェアの設計、開発及び販売',
  },
];

export const overSeaGroupAffiliates = [
  {
    id: 1,
    category: categoryGroup.overseasGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/oga.html',
    icon: <GoGlobe />,
    title: <>OSAKAGODO AMERICA INC.</>,
    address: 'USA',
    explanation: '化学品全般の輸出入、販売',
  },
  {
    id: 2,
    category: categoryGroup.overseasGroupCompany,
    href: 'http://www.ogcorp.co.jp/group/ogq.html',
    icon: <GoGlobe />,
    title: <>青島欧積塑膠製品有限公司</>,
    address: 'USA',
    explanation: '化学品全般の輸出入、販売',
  },
];
