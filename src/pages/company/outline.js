import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const outline = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="company_outline" />
    <div>
      <div>
        <p>大和化学工業株式会社の会社概要をご紹介します。</p>
        <div>
          <h3>会社概要</h3>
        </div>
        <table>
          <tr>
            <td>商　号</td>
            <td>
              大和化学工業株式会社
              <br />
              DAIWA CHEMICAL INDUSTRIES CO.,LTD.
            </td>
          </tr>
          <tr>
            <td>設　立</td>
            <td>1958年6月（昭和33年）</td>
          </tr>
          <tr>
            <td>資本金</td>
            <td>１億５千万円</td>
          </tr>
          <tr>
            <td>代表者</td>
            <td>代表取締役社長　田中　寛人</td>
          </tr>
          <tr>
            <td>従業員数</td>
            <td>104名</td>
          </tr>
          <tr>
            <td>事業内容</td>
            <td>
              ファインケミカル品、製紙用薬剤、繊維用染色助剤、繊維用機能薬剤
              <br />
              防炎剤、工業用殺菌剤、消臭剤（４大消臭）、防カビ剤、防虫剤、医薬品等
            </td>
          </tr>
          <tr>
            <td>取引銀行</td>
            <td>みずほ銀行、三菱東京ＵＦＪ銀行</td>
          </tr>
          <tr>
            <td>所在地</td>
            <td>
              <div>
                <img src="" alt="本社・大阪工場" />
              </div>
              本社・大阪工場
              <br />
              〒533-0006
              <br />
              大阪府大阪市東淀川区上新庄3-1-11&nbsp;&nbsp;&gt;&gt;
              <a href="./company_access.html#osaka">地図はこちら</a>
              <br />
              ＴＥＬ：(06)6328-0500
              <br />
              ＦＡＸ：(06)6328-2160
              <br />
              <br />
              <div class="outline_r_image">
                <img
                  src="./img/company_outline/bill2.jpg"
                  alt="東京支社"
                  width="150"
                  height="100"
                />
              </div>
              東京支社
              <br />
              〒132-0021
              <br />
              東京都江戸川区中央　4-17-19&nbsp;&nbsp;&gt;&gt;
              <a href="./company_access.html#tokyo">地図はこちら</a>
              <br />
              ＴＥＬ：(03)3653-1171
              <br />
              ＦＡＸ：(03)3655-9025
              <br />
              <br />
              <div class="outline_r_image">
                <img
                  src="./img/company_outline/bill3.jpg"
                  alt="東京工場"
                  width="150"
                  height="100"
                />
              </div>
              東京工場
              <br />
              〒132-0021
              <br />
              東京都江戸川区中央　4-17-28&nbsp;&nbsp;&gt;&gt;
              <a href="./company_access.html#tokyo">地図はこちら</a>
              <br />
              ＴＥＬ：(03)3653-1171
              <br />
              ＦＡＸ：(03)3653-1176
            </td>
          </tr>
        </table>
      </div>
    </div>
  </Layout>
);

export default outline;
