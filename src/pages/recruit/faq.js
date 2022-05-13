import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/seo';

const recruit_faq = () => (
  <Layout>
    <Seo title="recruit_faq" />
    <div id="mainBox">
      <div id="main">
        <p>
          弊社の採用情報について、よくある質問をまとめました。募集要領と併せてご覧ください。
          <br />
          <a href="./recruit_info.html">&gt;&gt;&nbsp;募集要領はこちら</a>
        </p>

        <div class="faq_title">
          <h3>Q1　応募方法について教えてください。</h3>
        </div>
        <div class="faq_box">
          <span class="atitle">A1.</span>
          <p>
            エントリーは、電話・メールから受け付けております。詳細は
            <a href="./recruit_info.html">募集要領</a>をご覧下さい。
          </p>
        </div>
        <div class="faq_title2">
          <h3>Q2　採用スケジュールについて教えてください。</h3>
        </div>
        <div class="faq_box">
          <span class="atitle">A2.</span>
          <p>
            今年度の採用活動のプロセスは、
            <a href="./recruit_info.html">募集要領</a>をご覧ください。
            <br />
            会社説明会は、事前に連絡をいただいて日程を調整します。採用試験は会社説明会の時にお知らせします
          </p>
        </div>

        <div class="faq_title2">
          <h3>Q3　選考について教えてください。</h3>
        </div>
        <div class="faq_box">
          <span class="atitle">A3.</span>
          <p>
            技術系の筆記試験は基本的な学力が身についているかどうかの確認程度の内容です。
            <br />
            面接は、今までの研究内容と人物を総合的に見ます。
          </p>
        </div>

        <div class="faq_title2">
          <h3>Q4　寮や社宅へは入居できますか？</h3>
        </div>
        <div class="faq_box">
          <span class="atitle">A4.</span>
          <p>実家から勤務地が遠い方の為に独身寮は備えています。</p>
        </div>

        <div class="faq_title2">
          <h3>
            Q5　現在大阪の大学で学んでおりますが、卒業後は実家のある東京での勤務を希望していますが、勤務地は選べますか？
          </h3>
        </div>
        <div class="faq_box">
          <span class="atitle">A5.</span>
          <p>
            弊社では、勤務地別（大阪・東京）に採用を行なっています。
            <br />
            毎年、募集している勤務地が異なる場合がありますので、募集要領でご確認下さい。
          </p>
        </div>

        <div class="faq_title2">
          <h3>Q6　教育体制はどのようなものですか？</h3>
        </div>
        <div class="faq_box">
          <span class="atitle">A6.</span>
          <p>
            入社後3ヶ月の間は、各部署で新入社員研修を行ないます。
            <br />
            その後、配属部署で必要に応じて社外研修・講習会を受講していただきます。
          </p>
        </div>

        <div id="pageupBox">
          <div class="pageup">
            <a href="#top">▲このページの先頭へ</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default recruit_faq;
