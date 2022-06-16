import * as React from 'react';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { Philosophy, Comfort, Quality } from '../../components/idea/company';
import { Link } from 'gatsby';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';

const business = ({ location }) => (
  <Layout>
    <Seo title="Business" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <div>
        <div>
          <p>当社の経営理念をご紹介します。</p>
          <div>
            <h3>経営理念</h3>
          </div>
          <p>
            私ども大和化学工業は、次の4つの理念を使命として、地球に優しい高品質の製品を提供するとともに、人と自然環境の融合を理念においた製品づくりを目指しています。
          </p>

          <div>
            <ol>
              <li>日々挑戦と創造に努力。</li>
              <li>信頼と和、人材育成。</li>
              <li>健康と安全、社員の豊かな暮らし。</li>
              <li>会社の発展と地域社会への貢献。</li>
            </ol>
          </div>
          <div>●地球環境の未来から、真の快適性を追求していきます。</div>
          <div></div>
          <p>
            未来の地球環境を考えると、私たちが追い求めた豊かさや便利さが真の快適性といえるのか疑問です。
            それは、温暖化やオゾン層の破壊に見られるように、生活の代償としてもたらされた不利益の上に成り立つ一時の満足に過ぎないのではないでしょうか。
            地球環境問題が叫ばれる今、人として、そして企業としてのあるべき姿、進むべき道が問い直されています。
            私たち大和化学工業も地球の住人として、未来に対する意志を確かな形として具現化、地球環境との調和を考えた快適性に対する答えを出そうとしています。
          </p>
          <div></div>
          <div>●モノづくりではなく、質づくり</div>
          <div></div>
          <p>
            モノづくりに留まらず、対象となる素材の質を高め、そこから新たに生まれる快適性を追求し続ける――私たち大和化学工業の開発コンセプトです。
            例えば、抗菌剤や防虫剤。繊維などの素材がもつ肌ざわりや風合いはそのままに、抗菌性や防虫性などの新たな機能を付加。そこから生まれた製品を媒介に人や暮らしの快適性を創造する。一方では生分解性のプラスチックの開発など、製品自身の性能を変えることにより地球環境の保護に貢献するなど、生活消費材から工業製品にいたるまで、様々な分野で私たちの化学技術による快適性が実現されています。
          </p>
          <div></div>
          <div>
            未来を見据え、化学業界をリードする独創力と技術力で、
            常に新しい製品開発と新しい分野へのチャレンジを推し進めるなど、大和化学工業は人と地球の快適性を考えた質づくりを常にめざしています。
          </div>

          <div>
            <div>
              <Link href="#top">▲このページの先頭へ</Link>
            </div>
          </div>
        </div>
      </div>
    </DisplayTemplate>
  </Layout>
);

export default business;
