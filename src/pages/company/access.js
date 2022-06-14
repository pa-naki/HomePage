import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';

const Access = () => (
  <Layout>
    <Seo title="company_access" />
    <div>
      <div>
        <p>
          大和化学工業株式会社の本社・大阪工場と東京支社・東京工場のアクセスマップをご紹介します。
        </p>
        <div></div>
        <div>
          <h3>本社・大阪工場</h3>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1Pdq3i6rBTBFSqh8_8DS20WtaAfWV1JCg"
            frameBorder={1}
          />
        </div>
        <div>
          <div>
            大和化学工業株式会社（大阪工場）までの道順　（※内環状線、ローソン手前を目印に）
          </div>
          <div>
            ■大阪方面からお越しの場合：
            <br />
            阪急梅田駅から阪急京都線
            <br />
            ・阪急京都線　上新庄駅北出口より徒歩5分
            <br />
            <br />
          </div>
          <p>
            ■新幹線でお越しの場合：
            <br />
            ・ＪＲ新大阪駅から大阪市営地下鉄御堂筋線　西中島南方駅乗換
            <br />
            ・阪急京都線　南方駅より京都方面行きへ乗換
            <br />
            ・阪急京都線　上新庄駅北出口より徒歩5分
            <div>
              ■本社・大阪工場
              <br />
              〒533-0006　大阪府大阪市東淀川区上新庄3-1-11
              <br />
              ＴＥＬ：(06)6328-0500
            </div>
          </p>
          <div></div>
        </div>
        <div></div>
        <div>
          <h3>東京支社・東京工場</h3>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1FhCzyB3bSsv4utgJl-kmo-d76bPy9pZY"
            frameBorder={1}
          />
        </div>
        <div>
          <div>大和化学工業株式会社（東京支社・東京工場）までの道順</div>
          <div>
            ■JR総武線もしくは総武快速　新小岩駅南口より　徒歩15分
            <br />
            ・江戸川区総合文化センターを目印にお越しください
            <br />
            <br />
          </div>
          <p>
            ■新幹線でお越しの場合：
            <br />
            ・東京駅からJR総武快速に乗車
            <br />
            ・新小岩駅南口より徒歩15分
            <div>
              ■東京支社
              <br />
              〒132-0021　東京都江戸川区中央　4-17-19
              <br />
              ＴＥＬ：(03)3653-1171
              <br />
              ■東京工場
              <br />
              〒132-0021　東京都江戸川区中央　4-17-28
              <br />
              ＴＥＬ：(03)3653-1171
            </div>
          </p>

          <div></div>
        </div>
        <br />
        <div>
          <p>
            <b>アクセスマップのダウンロード</b>
          </p>
          <p>
            <a href="img/company_access/osaka_map.pdf" target="_blank">
              <img
                src="img/company_access/pdficon.jpg"
                alt="本社・大阪工場アクセスマップ　ダウンロード"
              />
              本社・大阪工場アクセスマップ　ダウンロード（88KB）
            </a>
          </p>
          <p>
            <a href="img/company_access/tokyo_map.pdf" target="_blank">
              <img
                src="img/company_access/pdficon.jpg"
                alt="東京工場アクセスマップ　ダウンロード"
              />
              東京支社・東京工場アクセスマップ　ダウンロード（57KB）
            </a>
          </p>
          <p>
            <a
              href="http://www.adobe.com/jp/products/acrobat/readstep2.html"
              target="_blank"
            >
              <img
                src="img/company_access/pdficon2.jpg"
                alt="Adobe Acrobat Reader"
              />
              Adobe Acrobat Reader
            </a>
          </p>
          <p>
            PDFファイルをご覧頂くにはAdobe Acrobat
            Readerをインストール必要があります。 最新のAdobe Acrobat
            Readerは無料でAdobeのサイトからダウンロードできます。
          </p>
          <div></div>
        </div>

        <div>
          <div>
            <a href="#top">▲このページの先頭へ</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Access;
