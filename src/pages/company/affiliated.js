import * as React from 'react';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';

const affiliated = ({ location }) => (
  <Layout>
    <Seo title="Affiliated" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <div>
        <div>
          <div>
            <h3>グループ企業</h3>
          </div>
          <div>■関係会社</div>

          <div>
            &bull;&nbsp;
            <a
              href="http://www.lsdaiwa.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              無&#38177;昱大精細化工有限公司
            </a>
          </div>
          <div class="link_box3">
            &bull;&nbsp;
            <a
              href="http://www.wadaikin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              江西和大金実業有限公司
            </a>
          </div>
        </div>

        <div>■国内オー・ジーグループ</div>

        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            オージー株式会社
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/chatani.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            茶谷産業株式会社
          </a>
        </div>
        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/company/group/%E3%82%AA%E3%83%BC%E3%82%B8%E3%83%BC%E3%83%95%E3%82%A3%E3%83%AB%E3%83%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/"
            target="_blank"
          >
            オージーフィルム株式会社
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/yamago.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            山五化成工業株式会社
          </a>
        </div>
        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/ogkagaku.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            オージー化学工業株式会社
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/suzu_kawa.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            鈴川化学工業株式会社
          </a>
        </div>
        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/toakasei.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            東亜化成株式会社
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/daido.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            大同産業株式会社
          </a>
        </div>
        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/fo_tech.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            株式会社エフ・オー・テック
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/ogwakayama.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            オー・ジー和歌山株式会社
          </a>
        </div>
        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/yamato.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            株式会社やまとトレーディング
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/og_nagase.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            オー・ジー長瀬カラーケミカル株式会社
          </a>
        </div>
        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/chuwa.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            中和化学薬品株式会社
          </a>
        </div>
        <div class="link_box3">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/noack.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            株式会社ノアック
          </a>
        </div>

        <div>■海外オー・ジーグループ</div>

        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/oga.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            OSAKAGODO AMERICA INC.
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/ogq.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            青島欧積塑膠製品有限公司
          </a>
        </div>
        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/ogt.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            歐積股&#20221;有限公司
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/ogs.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            上海欧積貿易有限公司
          </a>
        </div>
        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/ogk.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            OSAKAGODO KOREA CORPORATION
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/itc.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            IKE TRADING CO.,LTD
          </a>
        </div>
        <div>
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/melog.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            MELOG SPECIALITY CHEMICALS PVT.LTD.
          </a>
        </div>
        <div class="link_box2">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/ogi.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            OG CORPORATOIN INDIA PVT.LTD.
          </a>
        </div>
        <div class="link_box4">
          &bull;&nbsp;
          <a
            href="http://www.ogcorp.co.jp/group/ogtl.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            OG TRADING(THAILAND) CO.LTD.
          </a>
        </div>
      </div>
    </DisplayTemplate>
  </Layout>
);

export default affiliated;
