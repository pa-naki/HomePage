import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const download = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="company_download" />
    <div id="mainBox">
      <div id="main">
        <p>
          会社案内をダウンロードしてご覧いただけます。
          <br />
          下記からダウンロード出来ます。
        </p>
        <div>
          <img
            src="./img/company_download/line.jpg"
            alt=""
            width="645"
            height="21"
          />
        </div>
        <div class="download_box">
          <div class="l_image">
            <img
              src="./img/company_download/catalogue.jpg"
              alt="会社案内ダウンロード"
              width="98"
              height="138"
            />
          </div>
          <p>
            <b>会社案内</b>
            <br />
            <a href="img/company_download/catalog.pdf" target="_blank">
              <img
                src="./img/company_download/pdficon.jpg"
                alt="会社案内ダウンロード"
                width="20"
                height="16"
              />
              ダウンロード（2.15MB）
            </a>
          </p>
          <p>
            <a
              href="http://www.adobe.com/jp/products/acrobat/readstep2.html"
              target="_blank"
            >
              <img
                src="./img/company_download/pdficon2.jpg"
                alt="会社案内ダウンロード"
                width="21"
                height="18"
              />
              Adobe Acrobat Reader
            </a>
          </p>
          <p>
            PDFファイルをご覧頂くにはAdobe Acrobat
            Readerをインストール必要があります。最新のAdobe Acrobat
            Readerは無料でAdobeのサイトからダウンロードできます。
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default download;
