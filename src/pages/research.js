import * as React from 'react';
import { Rdefforts, RelateCouncil } from '../components/idea/development';
import styledComponents from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Research = ({ location }) => (
  <Layout pathName={location.pathname}>
    <Seo title="research" />
    <div>
      <h1>フィールドは世界！</h1>
      <div>人と地球に優しい高品質のオンリーワン</div>
      <img src="" alt="実験写真" />
      <p>
        独自の技術と品質で世界にむけて発進。
        <br />
        大和化学工業は東京工場、大阪工場にそれぞれ研究開発部門を設置、人々に「安心と快適性」を提供するため、全員が情熱に燃えて日々挑戦しています。
        <br />
        ユーザーが今何を求め、何を欲しているかを直接キャッチ、「グローバル」「ニッチ」を
        スローガンに、ユーザーと一体になって製品開発を進める。－－－私たち大和化学工業の化学技術は、そんな開発コンセプトに支えられています。
        <br />
        挑戦、創造、スピードを合言葉に、大和化学工業は日々激しく変化する世の中のニーズを
        的確に捉え、化学業界をリードする独走力と技術力で、つねに新しい製品開発と、新しい分野へのチャレンジを推し進めるなど、人と地球に優しい高品質のオンリーワンを目指し、社会に貢献し続けます。
      </p>
      <Rdefforts />
      <RelateCouncil />
    </div>
  </Layout>
);

export default Research;
