import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

import PathTree from '../templates/path-tree';
import DisplayTemplate from '../templates/display-template';

const environment = ({ location }) => (
  <Layout>
    <Seo title="environment" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>

    <div class="catch_text_green_13">
      ●地球環境の未来から、真の快適性を追求していきます。
    </div>
    <div class="r_image">
      <img
        src="./img/environment/image1.jpg"
        alt="環境安全への取り組み"
        width="150"
        height="100"
      />
    </div>
    <p>
      未来の地球環境を考えると、私たちが追い求めた豊かさや便利さが真の快適性といえるのか疑問です。
      それは、温暖化やオゾン層の破壊に見られるように、生活の代償としてもたらされた不利益の上に成り立つ一時の満足に過ぎないのではないでしょうか。
      地球環境問題が叫ばれる今、人として、そして企業としてのあるべき姿、進むべき道が問い直されています。
      私たち大和化学工業も地球の住人として、未来に対する意志を確かな形として具現化、地球環境との調和を考えた快適性に対する答えを出そうとしています。
    </p>
    <div class="clear"></div>
    <div class="subtitle2">
      <h3>環境方針</h3>
    </div>
    <div class="r_image">
      <img
        src="./img/environment/image2.jpg"
        alt="環境安全への取り組み"
        width="200"
        height="150"
      />
    </div>
    <p>
      {' '}
      大和化学工業（株）は地球環境保全が２１世紀における人類の最も重要な課題の一つであることを認識し、経営理念・ビジョンである「優れた技術と創造力で快適・安全・安心な製品を提供し社会に貢献する」ことを環境・安全の方針としてＣＳＲ、コンプライアンスに取組んでいます。{' '}
      <br />
      抗菌防黴剤、消臭剤、安全性の高い防炎剤、害虫忌避剤、VOC・ホルマリンキャッチャー剤、CO2排出対策、クールビス・ウオーマービズ加工剤等、世の中の役に立つ有益な製品の開発に社員一丸となって取組んでまいりました。{' '}
      <br />
      私たちは地球環境に優しい企業として、環境に配慮した技術・製品の開発に努め、より豊かな人間社会の実現を目指します。
    </p>
    <div class="catch_text_green_13">●先見の明と独自の品質管理</div>
    <div class="l_image">
      <img
        src="./img/environment/image3.jpg"
        alt="環境安全への取り組み"
        width="150"
        height="100"
      />
    </div>
    <p>
      “健康”や“清潔”が時代のトレンドとなっていく中、2002年に家電メーカーが相次いで発売したマイナスイオン製品が大ブレイクし、一時、家電販売店の店頭は
      同製品であふれる状況でした。
      その1年前、大和化学工業株式会社では、いち早くニーズを先取りし、繊維製品用のマイナスイオン加工剤を開発し、世に出しました。
    </p>
    <p>
      その際開発担当が重視したのは、同加工剤によるマイナスイオン効果を数値化して評価することでした。
      マイナスイオン測定器を購入し、加工前・加工後の繊維製品、マイナスイオンの発生が多いといわれる滝や森林、さらに駅の構内やデパート、オフィスなどで
      測定したマイナスイオンの数値を比較検討できる評価表を作成し、繊維加工メーカーに提示しました。
    </p>
    <div class="clear"></div>
    <div class="r_image">
      <img
        src="./img/environment/image4.jpg"
        alt="環境安全への取り組み"
        width="200"
        height="150"
      />
    </div>
    <p>
      防虫剤や防黴剤の品質・性質などの評価試験法は大和化学が初めて開発したものです。
      ＪＩＳ職員が規格を作成する際の参考に、当社ラボへ研究に来ることもございました。
    </p>
    <p>
      涼感加工剤、温感加工剤はもとより、消臭剤、防虫剤、防黴剤など大和化学が先駆け開発・世に出した製品は国内外の品質管理をクリアするだけでなく、
      独自の評価試験を行い、「安全」、「高品質」と認めたものだけをお客様にご提供しております。
    </p>
    </DisplayTemplate>
  </Layout>
);

export default environment;
