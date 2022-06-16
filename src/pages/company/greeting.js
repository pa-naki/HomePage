import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';

const greeting = ({ location }) => (
  <Layout>
    <Seo title="company_greeting" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <div>
        <div>
          <p>
            当社代表取締役社長　田中　寛人のご挨拶と、当社の核となる4つの企業理念をご紹介します。
          </p>
          <div>
            <h3>ご挨拶</h3>
          </div>
          <div>
            <img alt="ご挨拶" />
          </div>
          <p>
            当社は1958年6月、当時の大阪合同株式会社（現オー・ジー株式会社）の製造会社として創業以来オー・ジーグループの一員として、繊維・紙・樹脂業界向け製品の開発・製造を行い、お取引先様と共に成長してまいりました。おかげさまで2018年に60周年を迎える事が出来ました。これはひとえにお取引先様、皆様の当社及び当社製品への信頼の賜物であると深く感謝しております。
          </p>
          <p>
            現在当社は、繊維・紙・樹脂・建材等様々な分野に対応した「抗菌剤」「防炎剤」「特殊機能剤」「防虫剤」等の製造を行っていますが、より安全で環境にやさしい製品の開発に全力で取り組んでおります。また、当社の強みである「性能評価機能」のレベルアップを図り、更なる顧客満足度アップを目指しております。{' '}
          </p>
          <p>
            新規分野への取組におきましては、「天敵昆虫」「スマートセル」をはじめとした新しい発想を形にし、事業化に向けて当社の次世代の柱に育てる予定です。{' '}
          </p>
          <p>
            当社は、全ての従業員がそれぞれの分野で「プロフェッショナル」として、お取引先様のご要望に応じ、最適処方の提案・きめ細かいサービスと共に製品を提供し、ご期待にお応えしていきます。
          </p>
          <p>
            今後とも、皆様の快適な生活を支える製品・サービスの提供を行ってまいりますので、変わらぬご支援とご鞭撻を賜りますようお願いいたします。
          </p>
          <div class="name">
            大和化学工業株式会社
            <br />
            代表取締役社長　田中　寛人
          </div>
        </div>
      </div>
    </DisplayTemplate>
  </Layout>
);

export default greeting;
