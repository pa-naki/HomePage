import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/Seo';

const contact = () => (
  <Layout>
    <Seo title="contact" />
    <p>
      当社では新製品開発のため、また現行製品販売のために新規取引先の開拓を行っています。
    </p>
    <p>
      以下のフォームに必要事項を入力の上、ご送信ください。当社担当者より、ご連絡させて頂きます。
    </p>
    <p>
      当社製品のお問合せはもとより、当社事業内容に活用できる可能性がある材料・部品・設備及び調達システムもご提案いただいてもかまいません。
    </p>

    <div align="center">
      <a href="http://daiwa-kagaku.force.com/InquiryFormPage" target="_blank">
        <img
          src="./img/contact/contactb.jpg"
          alt="お問い合わせはこちら"
          width="300"
          height="52"
        />
      </a>
    </div>
  </Layout>
);

export default contact;
