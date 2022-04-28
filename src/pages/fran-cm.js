import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const franCM = () => (
  <Layout>
    <Seo title="franCM" />
    <div id="main">
      <img
        src="images/main.png"
        alt="フランCMシリーズ　強炭化革命"
        class="pc"
      />
      <img
        src="images/main_sp.png"
        alt="フランCMシリーズ　強炭化革命"
        class="sp"
      />
    </div>

    <section class="intro">
      <div class="inner">
        <h2 class="copy">
          未知の分野へ、
          <br class="sp" />
          フランCMシリーズ
        </h2>
        <div class="text">
          <p class="ma_b20">
            大和化学工業株式会社は、現在、そしてこれからの時代にマッチした製品開発を積極的に行っています。
          </p>
          <p class="ma_b20">
            今回、新たに「超強炭化型・高難燃性」を持つリン系ノンハロゲン難燃剤「フランCMシリーズ」の展開を本格始動しました。
          </p>
          <p class="ma_b20">
            「超強炭化性」という特徴から、樹脂の変形防止と燃焼ガスを発生しにくくすることに成功しています。
            <br />
            この超強炭化性に加え、耐熱性や耐水性もあるためベタつかないうえ、物性低下も起こしにくいことから、合成皮革やウレタン樹脂、塩ビ樹脂、不織布等、多様な業界・素材で販路を広げています。
          </p>
          <p class="ma_b20">
            合成皮革では、炭化により炎の貫通を抑えられるため、ソファーや航空機向けに期待でき、複合された不織布ではUL94V-0を狙え、塩ビでは三酸化アンチモン代替実績もあります。また、硬質ウレタンフォーム対象のコーンカロリーメーター試験で、非常に良好な結果を得られています。
          </p>
          フランCMシリーズの強炭化により、未知の分野へ皆様をご案内します。
        </div>
      </div>
    </section>

    <section class="movie">
      <h3 class="title">
        <p>MOVIE</p>
      </h3>

      <div class="inner">
        <div class="st">軟質PVC樹脂 燃焼試験</div>

        <div class="mv1 clearfix">
          <div class="mv">
            <div class="inn">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/QLxtsNOtKqs?rel=0&amp;controls=0&amp;showinfo=0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
            <p>
              <strong>CM-6R vs 他社難燃剤 トーチバーナー</strong>
              <br />
              強炭化性による難燃性が非常に良好
            </p>
          </div>

          <div class="mv">
            <div class="inn">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uCNIMYorJKw?rel=0&amp;controls=0&amp;showinfo=0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
            <p>
              <strong>CM-6R vs アンチモン トーチバーナー</strong>
              <br />
              フランCM-6Rは、圧倒的に発煙・煤が少ない
            </p>
          </div>

          <div class="mv">
            <div class="inn">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mDkcr8SntqI?rel=0&amp;controls=0&amp;showinfo=0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
            <p>
              <strong> CM-6R vs 他社難燃剤 UL94 V法</strong>
              <br />
              ノンドリップでのV-0を達成
            </p>
          </div>
        </div>

        <div class="st">TPU樹脂 燃焼試験</div>

        <div class="mv1 clearfix">
          <div class="mv">
            <div class="inn">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/M1_nyFUIJNo?rel=0&amp;controls=0&amp;showinfo=0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
            <p>
              <strong> CM-6R vs 他社難燃剤　トーチバーナー</strong>
              <br />
              難燃性を持たないTPUに、強炭化性を付与可能
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="catalog">
      <div class="inner">
        <h3 class="title">カタログダウンロード</h3>

        <div class="download clearfix">
          <div class="ctlg">
            <a href="pdf/synthetic-skin.pdf" target="_blank">
              <div>
                <img src="images/pdf_img03.jpg" alt="" />
              </div>
              <div class="text">
                合成皮革向け
                <br class="pc" />
                フランＣＭシリーズカタログ
              </div>
            </a>
          </div>

          <div class="ctlg">
            <a href="pdf/pvc.pdf" target="_blank">
              <div>
                <img src="images/pdf_img02.jpg" alt="" />
              </div>
              <div class="text">
                塩ビ・エラストマー向け
                <br class="pc" />
                フランＣＭシリーズ カタログ
              </div>
            </a>
          </div>

          <div class="ctlg">
            <a href="pdf/fran-cm.pdf" target="_blank">
              <div>
                <img src="images/pdf_img01.jpg" alt="" />
              </div>
              <div class="text">
                FRAN CM series catalog
                <br class="pc" />
                for PVC, Elastomer (TPU etc.)
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default franCM;
