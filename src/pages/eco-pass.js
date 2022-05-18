import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/Seo';

const eco_pass = () => (
  <Layout>
    <Seo title="eco_pass" />
    <div id="main">
      <div class="logo">
        <img src="images/main_logo.png" alt="エコパスポート" />
      </div>
    </div>

    <section class="intro">
      <div class="inner">
        <h2 class="copy">大和化学のエコパスポート認証加工剤</h2>
        <div class="text">
          繊維製品の安全認証「エコテックス&reg;スタンダード100」が開始してから25年以上が経過し、
          <br class="pc" />
          アパレル業界、消費者の安心・安全、地球環境への意識も着実に高まってきています。
          <br />
          欧州のREACH規制やBPR等、加工薬剤に対する安全性に関する要望なども
          <br class="pc" />
          頻繁によせられるようになってきました。弊社でも消費者に安心・安全を提供すべく、
          <br class="pc" />
          人と地球の未来に優しい加工剤エコパスポート認証加工剤を上市いたしました。
        </div>
      </div>
    </section>

    <div class="cate-btn">
      <div class="btn">
        <a href="pdf/catalog.pdf" target="_blank">
          エコパスポート
          <br />
          認証加工剤
          <br />
          カタログダウンロード
        </a>
      </div>
      <div class="btn">
        <a href="pdf/catalog_en.pdf" target="_blank">
          英語版
          <br />
          エコパスポート 認証加工剤 <br />
          カタログダウンロード
        </a>
      </div>
      <div class="btn">
        <a href="pdf/catalog_ch.pdf" target="_blank">
          中国語版
          <br />
          エコパスポート 認証加工剤 <br />
          カタログダウンロード
        </a>
      </div>
    </div>

    <div class="sec-lineup">
      <div class="sttl">
        エコパスポート認証加工剤 <br class="sp" />
        製品ライナップ
      </div>

      <div class="lineup">
        <table>
          <thead>
            <tr>
              <th>製品名</th>
              <th>効果・特徴</th>
              <th>成分</th>
              <th>イオン性</th>
              <th>pH</th>
              <th>荷姿</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ザオバタックＮＡＮＯ-２０（Ｅ）</td>
              <td>ＳＥＫ汗消臭対応消臭剤</td>
              <td>無機金属酸化物</td>
              <td>アニオン</td>
              <td>弱ｱﾙｶﾘ性</td>
              <td>18kg</td>
            </tr>
            <tr>
              <td>ＵＶＳ－３２７（Ｅ）</td>
              <td>ＵＶカット剤、汗耐光向上剤</td>
              <td>ベンゾトリアゾール系</td>
              <td>ノニオン</td>
              <td>弱酸性～中性</td>
              <td>18kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="sec-onlyone">
      <div class="sttl">大和化学の認証加工剤はオンリーワン</div>
      <p class="text">
        極東地区の５社の中で消臭剤を上市しているのは２社で、その１社が当社です。
        <br />
        さらに日本で権威のある繊維評価技術協議会(ＳＥＫ)の汗消臭を対象にした消臭剤で、
        <br class="pc" />
        エコパスポート認証を受けているのは、
        <span>当社の「ザオバタックＮＡＮＯ－２０（Ｅ）」の１製品のみ</span>
        となります。
        <br />
        <span>ＵＶカット剤</span>
        においては、エコパスポート認証を取得しているのは、
        <br class="pc" />
        <span>世界で当社の製品「ＵＶＳ－３２７（Ｅ）」だけです。</span>
      </p>
    </div>

    <div class="sttl">エコパスポート認証薬剤の大きなメリット</div>

    <div class="box">
      <p class="copy">
        人体や環境に有害な物質を含んでいないので、安心・安全です。
        <br />
        スタンダード100のクラスⅠ(乳幼児製品)の基準も満たしています。
      </p>
    </div>

    <div class="box">
      <p class="copy">
        スタンダード１００の認証を受けている繊維に機能性を付与したい場合、
        <br class="pc" />
        エコパスポート認証薬剤であれば、
        <br class="pc" />
        無試験でスタンダード１００の認証が受けられます。
      </p>
      <p class="text">
        エコパスポート認証を受けていない薬剤を加工した場合は、
        <br class="pc" />
        再度試験してスタンダード１００の認証を受ける必要がありますので、
        <br class="pc" />
        費用を軽減することができます。
      </p>
    </div>

    <div class="box">
      <p class="copy">
        加工場で繊維に加工した際、排水などで有害物が環境に排出される心配がありません。
      </p>
    </div>

    <p class="copy">
      エコパスポート認証薬剤を加工している最終製品に、
      <br class="pc" />
      薬剤名称を記載することができます。
    </p>
    <div class="rels clearfix">
      <div class="left">
        <p>
          <strong>記載例</strong>
          「エコパスポート認証薬剤の（薬剤名称）を加工しています。」
        </p>
        <ul>
          <li>
            ＊１：表記の仕方につきましては、エコテックス共同体にチェックしてもらう必要があります。文面をお送りいただければ、弊社よりチェックを依頼し、回答させていただきます。
          </li>
          <li>
            ＊２：最終製品へのエコパスポートのロゴマークの使用はできません。
          </li>
        </ul>
      </div>

      <div class="img">
        <img src="images/img_qr.jpg" alt="" />
        <p>QRコードよりエコテックスによる認証をご確認いただけます。</p>
      </div>
    </div>

    <div class="cate-btn">
      <div class="btn">
        <a href="pdf/catalog.pdf" target="_blank">
          エコパスポート
          <br />
          認証加工剤
          <br />
          カタログダウンロード
        </a>
      </div>
      <div class="btn">
        <a href="pdf/catalog_en.pdf" target="_blank">
          英語版
          <br />
          エコパスポート 認証加工剤 <br />
          カタログダウンロード
        </a>
      </div>
      <div class="btn">
        <a href="pdf/catalog_ch.pdf" target="_blank">
          中国語版
          <br />
          エコパスポート 認証加工剤 <br />
          カタログダウンロード
        </a>
      </div>
    </div>
  </Layout>
);

export default eco_pass;
