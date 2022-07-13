import * as React from 'react';
import styled from 'styled-components';
import {
  affiliates,
  ogGroupAffiliates,
} from '../../components/share/affiliates';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import { HeddingSection } from '../../templates/styles';
import { LinkCards } from '../../styles/cardsStyle';

const affiliated = ({ location }) => {
  return (
    <Layout>
      <Seo title="Affiliated" />
      <PathTree pathTree={location.pathname} />
      <>
        <DisplayTemplate>
          <HeddingSection
            heddingTitle="グループ企業"
            HeddingTag="h1"
            heddingWidth="100%"
          >
            <HeddingSection
              heddingTitle="■関係会社"
              styleTemplate="stripe"
              heddingWidth="75%"
            >
              <Wrapper>
                {affiliates.map((link, index) => {
                  const { category, href, icon, title, explanation, address } =
                    link;
                  return (
                    <LinkCards
                      key={index}
                      href={href}
                      icon={icon}
                      category={category}
                      title={title}
                      address={address}
                      explanation={explanation}
                    />
                  );
                })}
              </Wrapper>
            </HeddingSection>
            <HeddingSection
              heddingTitle="■国内オー・ジーグループ"
              styleTemplate="stripe"
              heddingWidth="75%"
            >
              <Wrapper>
                {ogGroupAffiliates.map((link, index) => {
                  const { category, href, icon, title, explanation, address } =
                    link;
                  return (
                    <LinkCards
                      key={index}
                      href={href}
                      icon={icon}
                      category={category}
                      title={title}
                      address={address}
                      explanation={explanation}
                    />
                  );
                })}
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/yamago.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    山五化成工業株式会社
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/ogkagaku.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    オージー化学工業株式会社
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/suzu_kawa.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    鈴川化学工業株式会社
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/toakasei.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    東亜化成株式会社
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/daido.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    大同産業株式会社
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/fo_tech.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    株式会社エフ・オー・テック
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/ogwakayama.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    オー・ジー和歌山株式会社
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/yamato.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    株式会社やまとトレーディング
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/og_nagase.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    オー・ジー長瀬カラーケミカル株式会社
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/chuwa.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    中和化学薬品株式会社
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/noack.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    株式会社ノアック
                  </a>
                </li>
              </Wrapper>
            </HeddingSection>
            <HeddingSection
              heddingTitle="■海外オー・ジーグループ"
              styleTemplate="stripe"
              heddingWidth="75%"
            >
              <ul>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/oga.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OSAKAGODO AMERICA INC.
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/ogq.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    青島欧積塑膠製品有限公司
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/ogt.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    歐積股&#20221;有限公司
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/ogs.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    上海欧積貿易有限公司
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/ogk.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OSAKAGODO KOREA CORPORATION
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/itc.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IKE TRADING CO.,LTD
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/melog.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MELOG SPECIALITY CHEMICALS PVT.LTD.
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/ogi.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OG CORPORATOIN INDIA PVT.LTD.
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.ogcorp.co.jp/group/ogtl.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OG TRADING(THAILAND) CO.LTD.
                  </a>
                </li>
              </ul>
            </HeddingSection>
          </HeddingSection>
        </DisplayTemplate>
      </>
    </Layout>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
`;

export default affiliated;
