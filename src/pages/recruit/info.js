import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import PathTree from '../../templates/path-tree';

const info = ({ location }) => (
  <Layout>
    <Seo title="recruit_info" />
    <PathTree pathTree={location.pathname} />
    <div id="mainBox">
      <div id="main">
        <p>
          大和化学工業株式会社では、以下のような人材を幅広く採用し、育成に取り組んでおります。
          下記の要項で募集しております。意欲のある方なら、男性・女性を問わず、やりがいのある職場です。
          ぜひ、自分の力をこの職場で発揮してください。
          次世代の大和化学工業を担う皆様の募集をお待ちしております。{' '}
        </p>
        <div class="rikei_box_u">
          <div class="r_image">
            <img
              src="img/recruit_treatment/image1.jpg"
              alt="理系の仕事"
              width="150"
              height="100"
            />
          </div>
          <span class="catch_text_red_13">
            次世代の大和化学工業を担う新しい風を当社が求める人材は
          </span>
          <br />
          &bull;&nbsp;専門知識を生かし、自分の見解を立証出来る力のある人
          <br />
          &bull;&nbsp;アグレッシブでモチベーションの高い人
          <br />
          &bull;&nbsp;常にベンチャー精神を持ち、新しい物を創造、形に出来る人
          <div class="clear"></div>
        </div>
        <div class="subtitle">
          <h3>募集要領</h3>
        </div>
        <table
          width="645"
          border="0"
          cellspacing="1"
          cellpadding="3"
          bgcolor="#C8C8C8"
        >
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              応募方法
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              自由応募
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              募集対象者
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              2021年3月卒業の方
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              応募資格
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              2020年4月1日現在、大学院修士課程卒26歳以下、並びに大学卒24歳以下で何れも2021年3月卒業見込の者
              <br />
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              募集職種
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              技術系（3ヶ月間各部門研修後正式配属）{' '}
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              募集人数
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              数名
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              選考日
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              当社担当者より通知致します。
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              試験方法
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              1次選考：書類選考
              <br />
              2次選考：筆記試験（専門科目、英語、一般常識、作文）、面接
              <br />
              提出書類：履歴書、卒業見込証明書、成績証明書、健康診断書、レジュメ（学校で研究した事をA4用紙1～2枚程度
              ）{' '}
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              来訪要領
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              当社では大和化学工業をより深く知っていただけるよう、会社見学を受け付けております。
              事前に予約をお願いしております。
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              日時
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              毎週月曜日～金曜日（9:00～16:00）
            </td>
          </tr>
          <tr>
            <td bgcolor="#f9e7e8" width="150" class="tableTitle">
              場所
            </td>
            <td bgcolor="#ffffff" width="495" class="tableText">
              大阪工場又は東京工場
            </td>
          </tr>
        </table>
        <div class="rikei_box_u">
          <div class="r_image">
            <a href="./recruit_entry.html">
              <img
                src="./img/recruit_entry/entryb.jpg"
                alt="エントリーフォーム"
                width="202"
                height="52"
              />
            </a>
          </div>
          <span class="hisu">※</span>受付連絡先：
          <br />
          （書類送付先、面接会場など）
          <br />
          ■東京支社：管理部門総務経理部
          <br />
          ・山岸　康之&nbsp;&nbsp;TEL(03)3653-1171
          <br />
          <br />
          <div class="clear"></div>
        </div>
        <div class="subtitle2">
          <h3>応募から採用まで</h3>
        </div>
        {/* <!-- STEP1 --> */}
        <div class="info_title2">1.会社訪問</div>
        <table border="0" cellpadding="0" cellspacing="0" width="645">
          <tr>
            <td
              width="100"
              valign="bottom"
              background="./img/recruit_info/y_line2.jpg"
            >
              <img
                src="./img/recruit_info/y2.jpg"
                width="100"
                height="28"
                alt=""
                border="0"
              />
            </td>
            <td width="530" valign="top">
              <div class="info_text">
                当社についてより深く理解していただくため、実際に会社内を見ていただきます。
                <br />
                毎週月曜日～金曜日（9:00～16:00）。
                訪問される場合は、事前にご連絡下さい。
                日時をお電話にて決めたいと思います。
                <br />
                <br />
                ■工場訪問の場合
                <br />
                03-3653-1171／管理部門総務経理部　山岸（やまぎし）まで
                <br />
                <br />
                <br />
              </div>
              <img
                src="./img/common/spacer.gif"
                width="2"
                height="30"
                alt=""
                border="0"
              />
            </td>
          </tr>
        </table>
        {/* <!-- // STEP1 -->
                  <!-- STEP2 --> */}
        <div class="info_title2">2.応募方法</div>
        <table border="0" cellpadding="0" cellspacing="0" width="645">
          <tr>
            <td
              width="100"
              valign="bottom"
              background="./img/recruit_info/y_line2.jpg"
            >
              <img
                src="img/recruit_info/y2.jpg"
                width="100"
                height="28"
                alt=""
                border="0"
              />
            </td>
            <td width="530" valign="top">
              <div class="info_text">
                応募必要書類を郵送して下さい。
                <br />
                必要書類の不備の場合、受付できかねます。送付前に再度確認下さい。{' '}
              </div>
              <img
                src="./img/common/spacer.gif"
                width="2"
                height="30"
                alt=""
                border="0"
              />
            </td>
          </tr>
        </table>
        {/* <!-- // STEP2 -->
                  <!-- STEP3 --> */}
        <div class="info_title2">3.採用試験</div>
        <table border="0" cellpadding="0" cellspacing="0" width="645">
          <tr>
            <td width="100" valign="bottom">
              &nbsp;
            </td>
            <td width="530" valign="top">
              <div class="info_text">
                選考日時は、担当者より連絡いたします。
                <br />
                第１次：書類選考
                <br />
                第２次：筆記試験及び面接 <br />
                合否は、書面を郵送します。
              </div>
              <img
                src="./img/common/spacer.gif"
                width="2"
                height="30"
                alt=""
                border="0"
              />
            </td>
          </tr>
        </table>
        {/* <!-- // STEP3 -->
                  <!-- STEP4  */}
        <div class="info_title">4.入社後の研修について</div>
        <table border="0" cellpadding="0" cellspacing="0" width="645">
          <tr>
            <td
              width="100"
              valign="bottom"
              background="./img/recruit_info/y_line.jpg"
            >
              <img
                src="./img/recruit_info/y.jpg"
                width="100"
                height="28"
                alt=""
                border="0"
              />
            </td>
            <td width="530" valign="top">
              <div class="info_text">
                4月に入社式、諸手続を行います。
                <br />
                ４月から３ヶ月工場内各セクションにて研修を行います。{' '}
              </div>
              <img
                src="./img/common/spacer.gif"
                width="2"
                height="30"
                alt=""
                border="0"
              />
            </td>
          </tr>
        </table>
        {/* // STEP4 --> */}
        <div id="pageupBox">
          <div class="pageup">
            <a href="#top">▲このページの先頭へ</a>
          </div>
        </div>
      </div>
      {/* <!--  //main --> */}
    </div>
    {/* <!-- // mainbox --> */}
  </Layout>
);

export default info;
