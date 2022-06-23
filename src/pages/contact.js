import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

import PathTree from '../templates/path-tree';
import DisplayTemplate from '../templates/display-template';
import styled from 'styled-components';

const contact = ({ location }) => (
  <Layout>
    <Seo title="contact" />
    <PathTree pathTree={location.pathname} />
    <DisplayTemplate>
      <Wrapper>
        <p>
          当社では新製品開発･現行製品販売のために新規取引先の開拓を行っています。
        </p>
        <p>以下のリンクよりフォームを入力の上、ご送信ください。</p>
        <p>当社担当者より、ご連絡させて頂きます。</p>
        <p>
          当社製品のお問合せはもとより、当社事業内容に活用できる可能性がある材料・部品・設備及び調達システムもご提案いただいてもかまいません。
        </p>

        <div align="center">
          <a
            href="http://daiwa-kagaku.force.com/InquiryFormPage"
            target="_blank"
          >
            <StaticImage
              src="../images/contact/contactb.jpg"
              alt="お問い合わせはこちら"
              layout="fixed"
              placeholder="blurred"
              formats={['webp', 'avif', 'auto']}
            />
          </a>
        </div>
      </Wrapper>
    </DisplayTemplate>
  </Layout>
);

const Wrapper = styled.section`
  width: 50%;
  margin: 0 auto;
  p {
    margin: 0;
  }
  div {
    margin-top: 2rem;
  }
`;

export default contact;
