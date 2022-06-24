import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import styled from 'styled-components';
import { HeddingSection } from '../../templates/styles';

const access = ({ location }) => (
  <Layout>
    <Seo title="アクセスマップ" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <Wrapper>
        <div>
          <HeddingSection heddingTitle="本社・大阪工場" heddingWidth="100%">
            <div>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1Pdq3i6rBTBFSqh8_8DS20WtaAfWV1JCg"
                frameBorder={1}
                width="100%"
                height="450px"
              />
            </div>
            <section className="ow-access">
              <h4>
                大和化学工業株式会社（大阪工場）までの道順　（※内環状線、ローソン手前を目印に）
              </h4>
              <div className="ow-desc">
                <div className="ow-desc-left">
                  ■大阪方面からお越しの場合：
                  <br />
                  阪急梅田駅から阪急京都線
                  <br />
                  ・阪急京都線　上新庄駅北出口より徒歩5分
                  <br />
                  <br />
                  <div>
                    ■本社・大阪工場
                    <br />
                    〒533-0006　大阪府大阪市東淀川区上新庄3-1-11
                    <br />
                    ＴＥＬ：(06)6328-0500
                  </div>
                </div>
                <p className="ow-desc-right">
                  ■新幹線でお越しの場合：
                  <br />
                  ・ＪＲ新大阪駅から大阪市営地下鉄御堂筋線　西中島南方駅乗換
                  <br />
                  ・阪急京都線　南方駅より京都方面行きへ乗換
                  <br />
                  ・阪急京都線　上新庄駅北出口より徒歩5分
                </p>
              </div>
            </section>
          </HeddingSection>
          <HeddingSection heddingTitle="東京支社・東京工場">
            <div>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1FhCzyB3bSsv4utgJl-kmo-d76bPy9pZY"
                frameBorder={1}
                width="100%"
                height="450px"
              />
            </div>
            <section className="tw-access">
              <h4>大和化学工業株式会社（東京支社・東京工場）までの道順</h4>
              <div className="tw-desc">
                <div className="tw-desc-left">
                  ■JR総武線もしくは総武快速　新小岩駅南口より　徒歩15分
                  <br />
                  ・江戸川区総合文化センターを目印にお越しください
                  <br />
                  <br />
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
                </div>
                <p className="tw-desc-right">
                  ■新幹線でお越しの場合：
                  <br />
                  ・東京駅からJR総武快速に乗車
                  <br />
                  ・新小岩駅南口より徒歩15分
                </p>
              </div>
            </section>
          </HeddingSection>
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
      </Wrapper>
    </DisplayTemplate>
  </Layout>
);

const Wrapper = styled.div`
  .ow-access {
    border: 1px solid black;
    background-color: #def9e7;
    padding: 15px 0;
    h4 {
      width: 80%;
      margin: 0 auto;
    }
    .ow-desc {
      display: flex;
      width: 80%;
      margin: 0 auto;
      .ow-desc-left {
        width: 50%;
      }
      .ow-desc-right {
        width: 50%;
      }
    }
  }
  .tw-access {
    border: 1px solid black;
    background-color: #def9e7;
    padding: 15px 0;
    h4 {
      width: 80%;
      margin: 0 auto;
    }
    .tw-desc {
      display: flex;
      width: 80%;
      margin: 0 auto;
      .tw-desc-left {
        width: 50%;
      }
      .tw-desc-right {
        width: 50%;
      }
    }
  }
`;

export default access;
