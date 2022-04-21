import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const company_history = () => (
  <Layout>
    <Seo title="company_history" />
    <div id="mainBox">
      <div id="main">
        <p>大和化学工業株式会社の沿革をご紹介します。</p>
        <div class="subtitle">
          <h3>大和化学工業の歩み</h3>
        </div>
        <table
          width="645"
          border="0"
          cellspacing="1"
          cellpadding="3"
          bgcolor="#C8C8C8"
        >
          <tr>
            <td bgcolor="#aee2ee" width="45" class="historyTitle">
              1958
            </td>
            <td bgcolor="#fcd9ee" width="55" class="historyTitle">
              昭和33
            </td>
            <td bgcolor="#ffffff" width="375" class="historyText">
              大阪合同(株）（現オー・ジー(株）が大阪工場、東京工場、西条工場を分離し、資本金500万円で大和化学工業株式会社を設立
            </td>
            <td bgcolor="#ffffff" width="170" class="historyiImg" rowspan="8">
              <img
                src="./img/company_history/image1.jpg"
                alt="大阪合同大阪工場"
                width="170"
                height="140"
              />
              <br />
              ▲大阪合同大阪工場
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1959
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和34
            </td>
            <td bgcolor="#ffffff" class="historyText">
              本社工場で蛍光漂白剤「マルチファー」の製造開始
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1962
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和37
            </td>
            <td bgcolor="#ffffff" class="historyText">
              東京工場で紙力増強剤「ソルダイン」発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1966
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和41
            </td>
            <td bgcolor="#ffffff" class="historyText">
              大阪工場、染色用「キャリヤー」製造開始
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1968
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和43
            </td>
            <td bgcolor="#ffffff" class="historyText">
              硫酸化油の製造開始
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1969
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和44
            </td>
            <td bgcolor="#ffffff" class="historyText">
              本社事務所新築竣工
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1970
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和45
            </td>
            <td bgcolor="#ffffff" class="historyText">
              防炎剤「フランO・T」 防炎協会の検定に合格
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1976
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和51
            </td>
            <td bgcolor="#ffffff" class="historyText">
              「ソルダイン」販売、年間1,500トン突破
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1980
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和55
            </td>
            <td bgcolor="#ffffff" class="historyText">
              大阪工場、研究棟落成式挙行、本社社屋増築工事竣工
            </td>
            <td bgcolor="#ffffff" class="historyiImg" rowspan="2">
              <img
                src="./img/company_history/image2.jpg"
                alt="新築になった大阪工場研究棟"
                width="170"
                height="140"
              />
              <br />
              ▲新築になった大阪工場研究棟
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1981
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和56
            </td>
            <td bgcolor="#ffffff" class="historyText">
              染料固着剤「フィクサロン」、染色酸「ソフタレン」の製造開始
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1983
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和58
            </td>
            <td bgcolor="#ffffff" class="historyText">
              東京工場に研究室棟・事務所棟竣工
              <br />
              耐洗濯性の抗菌加工剤「ノンスタックシリーズ」を発売
            </td>
            <td bgcolor="#ffffff" class="historyiImg" rowspan="2">
              <img
                src="./img/company_history/image3.jpg"
                alt="新築になった東京工場研究棟"
                width="170"
                height="140"
              />
              <br />
              ▲新築になった東京工場研究棟
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1984
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和60
            </td>
            <td bgcolor="#ffffff" class="historyText">
              大手家電メーカー掃除機用ゴミパック防ダニ剤を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1986
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和61
            </td>
            <td bgcolor="#ffffff" class="historyText">
              塩素堅牢度向上剤「アクロリンシリーズ」を発売
            </td>
            <td bgcolor="#ffffff" class="historyiImg" rowspan="15">
              <img
                src="./img/company_history/image4.jpg"
                alt="大阪工場（1980年代半ば）"
                width="170"
                height="140"
              />
              <br />
              ▲大阪工場（1980年代半ば）
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1987
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和62
            </td>
            <td bgcolor="#ffffff" class="historyText">
              耐洗濯性の抗菌加工剤「アモルデンM
              シリーズ」、紙力増強剤「エースデンシリーズ」を発売{' '}
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1988
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              昭和63
            </td>
            <td bgcolor="#ffffff" class="historyText">
              PVA 用剥離剤「コートサイザーNP シリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1989
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成元
            </td>
            <td bgcolor="#ffffff" class="historyText">
              寝装用ダニ忌避剤「アニンセンCBP」、複合機能加工用抗菌剤「アモルデンMCM-400」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1990
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成2
            </td>
            <td bgcolor="#ffffff" class="historyText">
              樹脂練り込み用防虫剤「アニンセンSIBシリーズ」および樹脂練込用防カビ剤「アモルデンSK-802」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1991
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成3
            </td>
            <td bgcolor="#ffffff" class="historyText">
              PET
              染色同浴防炎剤「フランEM-1500シリーズ」、肌着用消臭加工剤「ザオバセットP
              シリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1992
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成4
            </td>
            <td bgcolor="#ffffff" class="historyText">
              消臭剤「ニューザオバセット類」、洗濯槽練り込み用防カビ剤「バイオデンMS205」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1993
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成5
            </td>
            <td bgcolor="#ffffff" class="historyText">
              ロゴマークおよび社名書体制定
              <br />
              天然機能加工製品「タンドルシリーズ」発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1995
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成7
            </td>
            <td bgcolor="#ffffff" class="historyText">
              タバコ消臭剤「ザオバスーパー類」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1996
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成8
            </td>
            <td bgcolor="#ffffff" class="historyText">
              防蚊加工剤「アニンセンCLC類」、芳香加工剤「マイクロコロンシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1997
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成9
            </td>
            <td bgcolor="#ffffff" class="historyText">
              寝装用抗菌、ダニ忌避剤「エバステン」、遠赤外線加工剤「セラモンドシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1998
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成10
            </td>
            <td bgcolor="#ffffff" class="historyText">
              東京工場事務所棟完成
              <br />
              PET
              用濃染化剤「ディープノールシリーズ」、綿用吸水速乾剤「ネオドライシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              1999
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成11
            </td>
            <td bgcolor="#ffffff" class="historyText">
              加齢臭用消臭剤「ノネノンシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2000
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成12
            </td>
            <td bgcolor="#ffffff" class="historyText">
              大阪工場、防炎剤フランについてのISO9002 認証取得
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2001
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成13
            </td>
            <td bgcolor="#ffffff" class="historyText">
              東京工場、紙力増強剤エースディンについてのISO9002 認証取得
              <br />
              マイナスイオン加工剤「イデオン」、
              インナー用蓄熱加工剤「サンウォーマシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2002
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成14
            </td>
            <td bgcolor="#ffffff" class="historyText">
              綿、PET 用吸水発熱加工剤「アクアインHOT シリーズ」「セラモンドHR
              シリーズ」を発売
              <br />
              中国に合弁企業「無錫昱大精細化工有限公司」を設立
            </td>
            <td bgcolor="#ffffff" class="historyiImg" rowspan="9">
              <img
                src="./img/company_history/image5.jpg"
                alt="中国無錫・大精細化工有限公司"
                width="170"
                height="140"
              />
              <br />
              ▲無錫昱大精細化工有限公司
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2003
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成15
            </td>
            <td bgcolor="#ffffff" class="historyText">
              大阪工場第三工場が完成
              <br />
              ウェットティッシュ用、防腐・防カビ剤「アモルデンBBシリーズ」を発売
              <br />
              大阪工場、東京工場　ＩＳＯ９００１：２０００に 移行登録
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2004
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成16
            </td>
            <td bgcolor="#ffffff" class="historyText">
              車輌フィルタ用花粉・ダニアレルゲン不活化剤「アイナート」、接触冷感加工剤「プレサーモシリーズ」、IH
              調理器のゴキブリ忌避剤「ACRシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2005
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成17
            </td>
            <td bgcolor="#ffffff" class="historyText">
              家庭紙用接着剤「セルグルーシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2009
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成21
            </td>
            <td bgcolor="#ffffff" class="historyText">
              評価技術センター設立、JNLAに登録
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2010
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成22
            </td>
            <td bgcolor="#ffffff" class="historyText">
              東京支社開設
              <br />
              片面撥水加工剤「パナペースト類」を発売
              <br />
              SEKマーク対応防カビ加工剤「アモルデンOCF」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2011
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成23
            </td>
            <td bgcolor="#ffffff" class="historyText">
              非HBCDタイプ防炎加工剤「フランEMシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2012
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成24
            </td>
            <td bgcolor="#ffffff" class="historyText">
              残香性保持増強剤「フレグセル」を発売
              <br />
              モラクセラ菌対応抗菌剤「AA-2100K&#8545;」を発売
            </td>
          </tr>
          <tr>
            <td bgcolor="#aee2ee" class="historyTitle">
              2013
            </td>
            <td bgcolor="#fcd9ee" class="historyTitle">
              平成25
            </td>
            <td bgcolor="#ffffff" class="historyText">
              中国に合弁会社「江西和大金実業有限公司」を設立
              <br />
              繊維用防風加工剤「インサラン」を発売
              <br />
              撥水・吸水／SGR・抗菌加工剤「パナガードOP-SR28」を発売
            </td>
          </tr>
        </table>
      </div>
    </div>
  </Layout>
);

export default company_history;
