import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const history = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="company_history" />
    <div>
      <div>
        <p>大和化学工業株式会社の沿革をご紹介します。</p>
        <div>
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
            <td>1958</td>
            <td>昭和33</td>
            <td>
              大阪合同(株）（現オー・ジー(株）が大阪工場、東京工場、西条工場を分離し、資本金500万円で大和化学工業株式会社を設立
            </td>
            <td>
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
            <td>1959</td>
            <td>昭和34</td>
            <td>本社工場で蛍光漂白剤「マルチファー」の製造開始</td>
          </tr>
          <tr>
            <td>1962</td>
            <td>昭和37</td>
            <td>東京工場で紙力増強剤「ソルダイン」発売</td>
          </tr>
          <tr>
            <td>1966</td>
            <td>昭和41</td>
            <td>大阪工場、染色用「キャリヤー」製造開始</td>
          </tr>
          <tr>
            <td>1968</td>
            <td>昭和43</td>
            <td>硫酸化油の製造開始</td>
          </tr>
          <tr>
            <td>1969</td>
            <td>昭和44</td>
            <td>本社事務所新築竣工</td>
          </tr>
          <tr>
            <td>1970</td>
            <td>昭和45</td>
            <td>防炎剤「フランO・T」 防炎協会の検定に合格</td>
          </tr>
          <tr>
            <td>1976</td>
            <td>昭和51</td>
            <td>「ソルダイン」販売、年間1,500トン突破</td>
          </tr>
          <tr>
            <td>1980</td>
            <td>昭和55</td>
            <td>大阪工場、研究棟落成式挙行、本社社屋増築工事竣工</td>
            <td>
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
            <td>1981</td>
            <td>昭和56</td>
            <td>染料固着剤「フィクサロン」、染色酸「ソフタレン」の製造開始</td>
          </tr>
          <tr>
            <td>1983</td>
            <td>昭和58</td>
            <td>
              東京工場に研究室棟・事務所棟竣工
              <br />
              耐洗濯性の抗菌加工剤「ノンスタックシリーズ」を発売
            </td>
            <td>
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
            <td>1984</td>
            <td>昭和60</td>
            <td>大手家電メーカー掃除機用ゴミパック防ダニ剤を発売</td>
          </tr>
          <tr>
            <td>1986</td>
            <td>昭和61</td>
            <td>塩素堅牢度向上剤「アクロリンシリーズ」を発売</td>
            <td>
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
            <td>1987</td>
            <td>昭和62</td>
            <td>
              耐洗濯性の抗菌加工剤「アモルデンM
              シリーズ」、紙力増強剤「エースデンシリーズ」を発売{' '}
            </td>
          </tr>
          <tr>
            <td>1988</td>
            <td>昭和63</td>
            <td>PVA 用剥離剤「コートサイザーNP シリーズ」を発売</td>
          </tr>
          <tr>
            <td>1989</td>
            <td>平成元</td>
            <td>
              寝装用ダニ忌避剤「アニンセンCBP」、複合機能加工用抗菌剤「アモルデンMCM-400」を発売
            </td>
          </tr>
          <tr>
            <td>1990</td>
            <td>平成2</td>
            <td>
              樹脂練り込み用防虫剤「アニンセンSIBシリーズ」および樹脂練込用防カビ剤「アモルデンSK-802」を発売
            </td>
          </tr>
          <tr>
            <td>1991</td>
            <td>平成3</td>
            <td>
              PET
              染色同浴防炎剤「フランEM-1500シリーズ」、肌着用消臭加工剤「ザオバセットP
              シリーズ」を発売
            </td>
          </tr>
          <tr>
            <td>1992</td>
            <td>平成4</td>
            <td>
              消臭剤「ニューザオバセット類」、洗濯槽練り込み用防カビ剤「バイオデンMS205」を発売
            </td>
          </tr>
          <tr>
            <td>1993</td>
            <td>平成5</td>
            <td>
              ロゴマークおよび社名書体制定
              <br />
              天然機能加工製品「タンドルシリーズ」発売
            </td>
          </tr>
          <tr>
            <td>1995</td>
            <td>平成7</td>
            <td>タバコ消臭剤「ザオバスーパー類」を発売</td>
          </tr>
          <tr>
            <td>1996</td>
            <td>平成8</td>
            <td>
              防蚊加工剤「アニンセンCLC類」、芳香加工剤「マイクロコロンシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td>1997</td>
            <td>平成9</td>
            <td>
              寝装用抗菌、ダニ忌避剤「エバステン」、遠赤外線加工剤「セラモンドシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td>1998</td>
            <td>平成10</td>
            <td>
              東京工場事務所棟完成
              <br />
              PET
              用濃染化剤「ディープノールシリーズ」、綿用吸水速乾剤「ネオドライシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td>1999</td>
            <td>平成11</td>
            <td>加齢臭用消臭剤「ノネノンシリーズ」を発売</td>
          </tr>
          <tr>
            <td>2000</td>
            <td>平成12</td>
            <td>大阪工場、防炎剤フランについてのISO9002 認証取得</td>
          </tr>
          <tr>
            <td>2001</td>
            <td>平成13</td>
            <td>
              東京工場、紙力増強剤エースディンについてのISO9002 認証取得
              <br />
              マイナスイオン加工剤「イデオン」、
              インナー用蓄熱加工剤「サンウォーマシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td>2002</td>
            <td>平成14</td>
            <td>
              綿、PET 用吸水発熱加工剤「アクアインHOT シリーズ」「セラモンドHR
              シリーズ」を発売
              <br />
              中国に合弁企業「無錫昱大精細化工有限公司」を設立
            </td>
            <td>
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
            <td>2003</td>
            <td>平成15</td>
            <td>
              大阪工場第三工場が完成
              <br />
              ウェットティッシュ用、防腐・防カビ剤「アモルデンBBシリーズ」を発売
              <br />
              大阪工場、東京工場　ＩＳＯ９００１：２０００に 移行登録
            </td>
          </tr>
          <tr>
            <td>2004</td>
            <td>平成16</td>
            <td>
              車輌フィルタ用花粉・ダニアレルゲン不活化剤「アイナート」、接触冷感加工剤「プレサーモシリーズ」、IH
              調理器のゴキブリ忌避剤「ACRシリーズ」を発売
            </td>
          </tr>
          <tr>
            <td>2005</td>
            <td>平成17</td>
            <td>家庭紙用接着剤「セルグルーシリーズ」を発売</td>
          </tr>
          <tr>
            <td>2009</td>
            <td>平成21</td>
            <td>評価技術センター設立、JNLAに登録</td>
          </tr>
          <tr>
            <td>2010</td>
            <td>平成22</td>
            <td>
              東京支社開設
              <br />
              片面撥水加工剤「パナペースト類」を発売
              <br />
              SEKマーク対応防カビ加工剤「アモルデンOCF」を発売
            </td>
          </tr>
          <tr>
            <td>2011</td>
            <td>平成23</td>
            <td>非HBCDタイプ防炎加工剤「フランEMシリーズ」を発売</td>
          </tr>
          <tr>
            <td>2012</td>
            <td>平成24</td>
            <td>
              残香性保持増強剤「フレグセル」を発売
              <br />
              モラクセラ菌対応抗菌剤「AA-2100K&#8545;」を発売
            </td>
          </tr>
          <tr>
            <td>2013</td>
            <td>平成25</td>
            <td>
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

export default history;
