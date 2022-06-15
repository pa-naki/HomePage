import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const establishment = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="company_establishment" />
    <div>
      <div>
        <p>大和化学工業株式会社の事業所をご紹介します。</p>
        <div>
          <h3>本社・大阪工場</h3>
        </div>
        <table>
          <tr>
            <td>所在地</td>
            <td>
              <div>
                <img
                  src="./img/company_establishment/image1.jpg"
                  alt="本社・大阪工場"
                />
              </div>
              <p>
                本社・大阪工場
                <br />
                〒533-0006
                <br />
                大阪府大阪市東淀川区上新庄3-1-11
                <br />
                &gt;&gt;<a href="./company_access.html#osaka">地図はこちら</a>
                <br />
                ＴＥＬ：(06)6328-0500
                <br />
                ＦＡＸ：(06)6328-2160
              </p>
              <div></div>
            </td>
          </tr>
        </table>

        <div>
          <h3>東京支社</h3>
        </div>
        <table>
          <tr>
            <td>所在地</td>
            <td>
              <div>
                <img
                  src="./img/company_establishment/image2.jpg"
                  alt="東京支社"
                />
              </div>
              東京支社
              <br />
              〒132-0021
              <br />
              東京都江戸川区中央　4-17-19
              <br />
              &gt;&gt;<a href="./company_access.html#tokyo">地図はこちら</a>
              <br />
              ＴＥＬ：(03)3653-1171
              <br />
              ＦＡＸ：(03)3655-9025
            </td>
          </tr>
        </table>

        <div>
          <h3>東京工場</h3>
        </div>
        <table>
          <tr>
            <td>所在地</td>
            <td>
              <div>
                <img
                  src="./img/company_establishment/image3.jpg"
                  alt="東京工場"
                />
              </div>
              東京工場
              <br />
              〒132-0021
              <br />
              東京都江戸川区中央　4-17-28
              <br />
              &gt;&gt;<a href="./company_access.html#tokyo">地図はこちら</a>
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

export default establishment;
