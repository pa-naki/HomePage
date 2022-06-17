import React from 'react';
import Layout from '../components/Layout';
import { AboutJnla, QualityPolicy, RegistJnla } from '../components/idea/jnla';
import { StaticImage } from 'gatsby-plugin-image';

import SEO from '../components/Seo';
import PathTree from '../templates/path-tree';
import DisplayTemplate from '../templates/display-template';

const AboutPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="評価技術センター" />
      <StaticImage
        src="../images/about/title.jpg"
        layout="fullWidth"
        placeholder="blurred"
      />
      <PathTree pathTree={location.pathname} />
      <DisplayTemplate>
        <div id="mainBox">
          <div id="main">
            <div class="subtitle">
              <h3>評価技術センターについて</h3>
            </div>
            <div class="center_catch">
              <div id="catch01">
                <img
                  src="img/about/catch.png"
                  width="493"
                  height="56"
                  alt="近年、清潔で快適な生活・衛生面への関心等で抗菌製品の需要が高まっています。"
                />
              </div>
              <div id="catch02">
                <p>
                  それにより、抗菌効果の信頼性も重要となってきました。
                  <br />
                  当社は、より一層の抗菌試験及び、防かび試験の信頼性を高めるため、独立した試験部門として評価技術センターを設立しました。
                  評価技術センターは、工業標準化法（JIS法）に基づく試験事業者登録制度
                  （JNLA：Japan National Laboratory
                  Accreditation　system）の試験事業者として登録されています。（登録番号090289JP）
                  <br />
                  また、一般社団法人
                  繊維評価技術協議会（JTETC）の指定検査機関、及び一般社団法人
                  日本衛生材料工業連合会（JHPIA）の認定試験機関（ウェットワイパー類の除菌性能試験、衛生用品の抗菌性能試験）としても登録されています。下記の試験項目についてはJNLA標章付き試験証明書を第３者の立場で発行することができます。
                  <br />
                  抗菌性試験、かび抵抗性試験以外についても対応致しますのでお気軽に御相談下さい。
                </p>
              </div>
              <div id="catch03">
                <p>○JNLA登録区分</p>
              </div>
              <div id="catch04">
                <p>
                  ・JIS L1902 　繊維製品の抗菌性試験方法及び抗菌効果
                  <br />
                  ・JIS Z2801 　抗菌加工製品－抗菌性試験方法・抗菌効果
                  <br />
                  ・JIS Z2911 　かび抵抗性試験方法
                </p>
              </div>
              <div id="catch05">
                <p>○JNLA標章付き試験証明書の発行例</p>
              </div>
              <div id="catch06">
                <p>
                  ・（一社）繊維評価技術協議会：ＳＥＫマークの申請・定期サーベイランス
                  <br />
                  ・（一社）抗菌製品技術協議会：ＳＩＡＡマークの申請
                </p>
              </div>
            </div>
            <p>
              それにより、抗菌効果の信頼性も重要となってきました。
              <br />
              当社は、より一層の抗菌試験及び、防かび試験の信頼性を高めるため、研究開発統括部から独立した試験部門として評価技術センターを設立しました。評価技術センターは、独立行政法人　製品評価技術基盤機構の認定センターが認定する工業標準化法に基づく試験事業者認定制度
              JNLA（Japan National Laboratory Accreditation
              System）の試験所として登録されました。また、一般社団法人　繊維製品評価技術協議会（JTECT）の指定検査機関としても登録されました。下記試験項目についてJNLA標章付試験証明を第３者の立場で発行することができます。
              <br />
              その他、御希望の試験についても対応を致しますのでお気軽に御相談下さい。
              <br />
            </p>
            <div class="center_box01">
              ○試験対象項目
              <br />
              ・JIS L1902 　繊維製品の抗菌性試験　　　　　　　　
              <br />
              ・JIS Z2801 　抗菌加工製品の抗菌性試験
              <br />
              ・JIS Z2911 　かび抵抗性試験
              <div class="clear"></div>
            </div>
            <div class="catch_text">～ 顧客の満足と信頼を得るために ～</div>
            <div class="center_box02">
              ＜品質方針＞
              <br />
              「規格要求事項の遵守により、顧客に信頼される試験活動及び品質サービスの提供を行い、顧客との安定した信頼関係を確保する。」{' '}
            </div>
            <div class="subtitle">
              <h3>業務のご案内</h3>
            </div>
            <div class="catch_text ma_b10">
              ～試験依頼からJNLA標章付き試験証明書又は試験報告書発行までの流れ～
            </div>
            <div>
              <dl class="center_flow clearfix">
                <dt>1．お問い合わせ</dt>
                <dd>
                  <img
                    src="img/about/arrow01.png"
                    width="36"
                    height="37"
                    alt=""
                  />
                  お電話、メールにてお問い合わせください。試験内容、必要な試料の大きさや量、試験料金（お見
                  <br />
                  積書の発行）等について、ご相談を承ります。当センターの試験依頼書に記載の無い試験でも、対
                  <br />
                  応可能な場合があります。その際の試験依頼書のご記入方法についても、ご案内いたします。その
                  <br />
                  他、ご不明な点がございましたら、お気軽にお問い合わせください。
                </dd>
              </dl>
              <dl class="center_flow">
                <dt>2．お申し込み</dt>
                <dd>
                  <img
                    src="img/about/arrow02.png"
                    width="36"
                    height="113"
                    alt=""
                  />
                  <p>
                    試験依頼書に必要事項をご記入の上、試験資料と共にお送り下さい。
                  </p>
                  <div class="dlbox">
                    &bull;試験依頼書様式　ダウンロード
                    <div id="word_data2">
                      <a href="request2.doc" target="_blank">
                        微生物試験依頼書(JNLA標章付き試験証明書用){' '}
                      </a>
                    </div>
                    <div id="word_data">
                      <a href="request1.doc" target="_blank">
                        微生物試験依頼書(試験報告用)
                      </a>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl class="center_flow clearfix">
                <dt>3．受付</dt>
                <dd>
                  <img
                    src="img/about/arrow01.png"
                    width="36"
                    height="37"
                    alt=""
                  />
                  試験依頼書及び試験試料が到着後、お電話、メールにて依頼書にご記入の内容、試験試料について、
                  <br />
                  確認いたします。
                </dd>
              </dl>
              <dl class="center_flow clearfix">
                <dt>4．試験開始</dt>
                <dd>
                  <img
                    src="img/about/arrow01.png"
                    width="36"
                    height="37"
                    alt=""
                  />
                  受付が終了後、お申し込みの内容で各試験を開始します。
                </dd>
              </dl>
              <dl class="center_flow clearfix">
                <dt>5．JNLA標章付き試験証明書又は、試験報告書の発行</dt>
                <dd>
                  <img
                    src="img/about/arrow01.png"
                    width="36"
                    height="37"
                    alt=""
                  />
                  試験の終了後、JNLA標章付き試験証明書又は、試験報告書を作成し、郵送いたします。
                  <br />
                  速報が必要な場合は、メール又はファクシミリにて、お送りいたします。
                </dd>
              </dl>
              <dl class="center_flow clearfix">
                <dt>6．ご請求</dt>
                <dd class="last_step">
                  <p>
                    JNLA標章付き試験証明書又は、試験報告書を郵送の際に、請求書と納品書を同封いたしますので、記載の銀行口座に試験料金をお振込み下さい。
                  </p>
                  <p>
                    <span class="atten">
                      その他ご不明な点がございましたら、お気軽にお問合せ下さい。
                    </span>
                  </p>
                </dd>
              </dl>
            </div>
            近年、清潔と安全に対する消費者の意識が高まり、抗菌製品が日常生活に浸透しています。当評価技術センターは、公平な立場で抗菌性能を評価し、消費者保護を第一の目的と考え、独立行政法人製品評価技術基盤機構よりJNLA登録試験事業者として認証を受けております。
            <br />
          </div>

          <div class="subtitle">
            <h3>JNLA登録証</h3>
          </div>
          <div class="center_box03">
            <div class="clearfix center_photobox">
              <div class="fl ma_l20">
                <img
                  src="img/about/img04.jpg"
                  width="217"
                  height="328"
                  alt="JNLA登録証"
                />
              </div>
              <div class="fr">
                <img
                  src="img/about/img01.jpg"
                  width="216"
                  height="160"
                  alt="JNLA登録試験"
                />
              </div>
            </div>
          </div>

          <div class="subtitle">
            <h3>試験サービス一覧</h3>
          </div>
          <div class="center_box03">
            <ul class="ser-list">
              <li>
                ●日本産業規格（JIS）　<span class="icon-jnla">JNLA</span>
                ：　JNLA標章付 試験証明書の発行が可能
              </li>
              <li class="indent">
                ○JIS L 1902　 繊維製品の抗菌性試験方法及び効果　
                <span class="icon-jnla">JNLA</span>
              </li>
              <li class="indent">
                ○JIS Z 2801　 抗菌加工製品-抗菌性試験方法・抗菌効果　
                <span class="icon-jnla">JNLA</span>
              </li>
              <li class="indent">
                ○JIS Z 2911　 かび抵抗性試験方法　
                <span class="icon-jnla">JNLA</span>
              </li>
              <li class="indent">
                ○JIS L 1921 　繊維製品の抗かび性試験方法及び抗かび効果
              </li>
            </ul>
            <ul class="ser-list">
              <li>●(一社)日本衛生材料工業連合会　自主基準</li>
              <li class="indent">○JHPIA抗菌マーク 試験方法</li>
              <li class="indent">○ウエットワイパー類の除菌性能試験</li>
            </ul>
            <ul class="ser-list">
              <li>●大和化学工業（株）　試験方法 </li>
              <li class="indent">
                <span class="icon-new">New</span>○防ダニ性試験
                <br />
                ダニ忌避（きひ）試験（侵入阻止法,　ガラス管Ａ法）{' '}
                <strong>※近日依頼受入れ開始</strong>
              </li>
              <li class="indent">
                <span class="icon-new">New</span>○防蚊(ぼうぶん)性試験
                <br />
                蚊忌避試験
              </li>
              <li class="indent">
                <span class="icon-new">New</span>
                ○アレルゲン低減化性能試験（ＥＬＩＳＡ法）
              </li>
            </ul>
            <ul class="ser-list">
              <li>
                ●(一社)繊維評価技術協議会 SEKマーク繊維製品認証基準に準じた方法
              </li>
              <li class="indent">
                <span class="icon-new">New</span>
                ○消臭性試験（検知管法、ガスクロマトグラフ法）
              </li>
            </ul>
          </div>

          <div class="subtitle">
            <h3>試験項目</h3>
          </div>
          <div class="center_box03">
            <div class="ab-sttl">&lt;試験項目&gt;</div>
            <ul class="ad-box ad-box1">
              <li class="st">◇抗菌性試験</li>
              <li class="indent">
                ○JIS L 1902　「繊維製品の抗菌性試験方法及び抗菌効果」
                <br />
                不織布を含む全ての抗菌性繊維製品の抗菌活性を評価する方法。
                <br />
                菌液吸収法（定量試験）、ハロー法（定性試験）等。SEKマーク
                試験方法
              </li>
              <li class="indent">
                ○JIS Z 2801「抗菌加工製品-抗菌性試験方法・抗菌効果」
                <br />
                繊維製品及び光触媒抗菌加工製品を除く、プラスチック製品、金属製品、セラミック製品など
                <br />
                抗菌加工を施した製品の表面における細菌に対する抗菌性試験の方法。
                <br />
                SIAAマーク 試験方法
              </li>
              <li class="indent">
                ○(一社)日本衛生材料工業連合会 「抗菌自主基準」で規定する試験方法
                <br />
                JHPIA抗菌マーク 試験方法
              </li>
            </ul>
            <ul class="ad-box ad-box1">
              <li class="st">◇除菌性能試験</li>
              <li class="indent">
                ○「ウエットワイパー類の除菌性能試験」
                <br />
                (一社)日本衛生材料工業連合会
                「除菌を標榜するウエットワイパー類の自主基準」で規定する試験方法。{' '}
                <br />
                JHPIA除菌マーク 試験方法
              </li>
            </ul>
            <ul class="ad-box ad-box2">
              <li class="st">◇防かび性試験</li>
              <li class="indent">
                ○JIS Z 2911　「かび抵抗性試験」
                <br />
                かび抵抗性を必要とする工業製品又は工業材料のかびに対する抵抗性の試験方法。
                <br />
                一般工業製品の試験、繊維製品の試験、塗料の試験、皮革及び皮革製品の試験、プラスチック製品の試験等
              </li>
              <li class="indent">○ハロー試験</li>
            </ul>
            <div class="clearfix ma_b30">
              <div class="fl">
                <img
                  src="img/about/191108_img01.jpg"
                  width="300"
                  height="184"
                  alt=""
                />
              </div>
              <div class="fr">
                <img
                  src="img/about/191108_img02.jpg"
                  width="300"
                  height="184"
                  alt=""
                />
              </div>
            </div>
            <ul class="ad-box ad-box2">
              <li class="st">
                ◇防ダニ性試験
                <br />
                ダニ忌避試験（侵入阻止法, ガラス管A法）「JIS L 1920
                繊維製品の防ダニ性能試験方法」
              </li>
              <li class="indent">
                ○侵入阻止法
                <br />
                内径90ｍｍのシャーレに生存ダニ約10000匹を含むダニ培地を均一にまきます。これに試験試料（外径　45mmのシャーレに同じ大きさに切った試料を敷き込んだもの）を置きます。試験試料の中央には誘因試料（0.05g）を置き、25&plusmn;2℃、75&plusmn;5％RH,
                暗条件で24時間放置します。
                <br />
                24時間後、試験試料と誘導飼料、外径45㎜シャーレ内側のダニ数を数えます。
                <br />
                加工試料と未加工試料のダニ数を比較し、忌避率を算出します。
              </li>
            </ul>
            <div class="clearfix ma_b30">
              <img
                src="img/about/191108_img03.jpg"
                width="500"
                height="auto"
                alt=""
              />
            </div>
            <ul class="ad-box ad-box1">
              <li class="indent">
                ○ガラス管A法
                <br />
                ガラス管の一方に粘着テープを張り付け、誘引飼料0.01gを均一に付着させた後、この端から5ｍｍの厚さにダニ計数用わた0.025ｇを入れ、さらに0.4ｇの試験試料を20ｍｍの厚みにつめこみ、合計の厚さを25ｍｍにします。
                <br />
                ガラス管のもう一方の端から約40ｍｍまでの間に、生存ダニ約10000匹を含むダニ培地を入れて、高密度織物で口をふさいで輪ゴムで固定し、25&plusmn;2℃、75&plusmn;5％RH,暗条件で48時間放置します。
                <br />
                48時間後、粘着テープと粉末飼料、ダニ計数用わたの部分のダニ数を数えす。
                <br />
                加工試料と未加工試料のダニ数を比較し、忌避率を算出します。
              </li>
            </ul>
            <div class="clearfix ma_b30">
              <div class="fl">
                <img src="img/about/191108_img04.jpg" width="370" alt="" />
              </div>
              <div class="fr">
                <img src="img/about/191108_img05.jpg" width="230" alt="" />
              </div>
            </div>
            <ul class="ad-box ad-box2">
              <li class="st">◇防蚊（ぼうぶん）性試験</li>
              <li class="indent">
                〇蚊忌避（きひ）試験「大和化学工業（株）試験方法」
                <br />
                メスの蚊が30匹入ったケージに腕を入れ、2分間で腕に巻いた加工試料（未加工試料）に静止、吸血した蚊の数を計数し、忌避率（％）を求めます。
              </li>
            </ul>
            <div class="clearfix ma_b30">
              <img
                src="img/about/191108_img06.jpg"
                width="300"
                height="auto"
                alt=""
              />
            </div>
            <ul class="ad-box ad-box2">
              <li class="st">
                ◇アレルゲン低減化性能試験
                <span>「大和化学工業（株）試験方法」</span>
              </li>
              <li class="indent">
                〇ＥＬＩＳＡ法（アレルゲン：ダニ、スギ花粉）
                <br />
                ＊アレルゲン：アレルギーを引き起こす原因となる物質
                <br />
                規定の大きさの試験試料1枚を、アレルゲン溶液中に入れ、室温で２４時間静置。
                <br />
                その後、残存アレルゲン濃度をサンドイッチＥＬＩＳＡ法により定量し、アレルゲン低減化率（％）を算出。
              </li>
            </ul>
            <div class="clearfix ma_b30">
              <img
                src="img/about/191108_img07.jpg"
                width="300"
                height="auto"
                alt=""
              />
            </div>
            <ul class="ad-box ad-box1">
              <li class="st">
                ◇消臭性試験「（一社）繊維評価技術協議会
                SEKマーク繊維製品認証基準に準じた方法」（官能試験を除く）
              </li>
              <li class="indent">〇検知管法</li>
              <li class="indent">
                〇ガスクロマトグラフ法
                <br />
                試験対象臭気成分 アンモニア、酢酸、イソ吉草酸、ノネナール
              </li>
            </ul>
          </div>

          <p>
            <strong>SEKマーク（一般社団法人　繊維評価技術協議会）</strong>
          </p>

          <table class="sek_box">
            <tr>
              <th colspan="2" rowspan="2" scope="col">
                &nbsp;
              </th>
              <th rowspan="2" scope="col">
                抗菌防臭加工
              </th>
              <th colspan="2" scope="col">
                制菌加工
              </th>
            </tr>
            <tr>
              <th scope="col">一般用途</th>
              <th scope="col">特定用途</th>
            </tr>
            <tr>
              <th colspan="2" class="side" scope="row">
                SEKマークとカラー表示
              </th>
              <td>
                <img src="img/about/sek01.jpg" width="92" height="91" alt="" />
              </td>
              <td>
                <img src="img/about/sek02.jpg" width="92" height="91" alt="" />
              </td>
              <td>
                <img src="img/about/sek03.jpg" width="92" height="92" alt="" />
              </td>
            </tr>
            <tr>
              <th rowspan="5" class="side_taleft" scope="row">
                試験対象
                <br />
                菌種
              </th>
              <th class="side_taleft" scope="row">
                黄色ブドウ球菌
              </th>
              <td>●</td>
              <td>●</td>
              <td>●</td>
            </tr>
            <tr>
              <th class="side_taleft" scope="row">
                肺炎桿菌
              </th>
              <td>-</td>
              <td>●</td>
              <td>●</td>
            </tr>
            <tr>
              <th class="side_taleft" scope="row">
                緑膿菌
              </th>
              <td>-</td>
              <td>○</td>
              <td>○</td>
            </tr>
            <tr>
              <th class="side_taleft" scope="row">
                大腸菌
              </th>
              <td>-</td>
              <td>○</td>
              <td>○</td>
            </tr>
            <tr>
              <th class="side_taleft" scope="row">
                MRSA
              </th>
              <td>-</td>
              <td>-</td>
              <td>●</td>
            </tr>
            <tr>
              <th colspan="2" class="side" scope="row">
                試験方法：JIS L 1902(菌液吸収法）と評価基準
              </th>
              <td>抗菌活性値(A)≧2.2</td>
              <td colspan="2">
                抗菌活性値(A)≧F（一般用途）
                <br />
                抗菌活性値(A)＞F（特定用途）
                <br />
                ※F：標準布の増殖値
              </td>
            </tr>
            <tr>
              <th colspan="2" rowspan="2" class="side" scope="row">
                対象製品（繊維）
              </th>
              <td colspan="3">
                衣料品、寝装品、インテリア製品、ディスポ製品等
              </td>
            </tr>
            <tr>
              <td>
                一般消費者向けの
                <br />
                製品
              </td>
              <td colspan="2">
                医療機関、介護施設、行政機関向けの製品
                <br />
                （一般消費者に販売されない。）
              </td>
            </tr>
            <tr>
              <th colspan="2" class="side" scope="row">
                対象とならない繊維製品
              </th>
              <td colspan="3">
                生後24カ月未満の乳幼児製品
                <br />
                医療機器、医薬部外品、化粧品に該当するもの等
              </td>
            </tr>
          </table>
          <div class="tr ma_b10">
            <p>●印は試験対象の必須菌 ○印はオプション菌</p>
          </div>

          <div class="ma_l10">
            <p class="indents">
              <strong>・洗濯方法及び回数</strong>
              <br />
              抗菌防臭加工、制菌加工（一般用途）：
              家庭用洗濯機で標準配合洗剤を使用し、品目別に0～10回洗濯する。
              <br />
              制菌加工（特定用途）：
              ワッシャー洗濯機で、標準配合洗剤を使用し、品目別に0～50回洗濯する。
            </p>
          </div>
          <div class="ma_l10 ma_b30">
            <p class="indents">
              <strong>・試験方法</strong>
              <br />
              JIS L1902 繊維製品の抗菌性試験方法（定量試験）による。
            </p>
          </div>

          <p>
            <strong>SIAAマーク（抗菌製品技術協議会）</strong>
            <br />
            <strong>・抗菌試験対象品目</strong>{' '}
          </p>

          <table class="sek_box ma_b15">
            <tr>
              <th colspan="2" scope="col">
                生活用品全般（プラスチック・金属・セラミック製品）
              </th>
            </tr>
            <tr>
              <th class="side_taleft" scope="row">
                台所用品
              </th>
              <td class="taleft">まな板、たわし、三角コーナー</td>
            </tr>
            <tr>
              <th class="side_taleft" scope="row">
                文房具
              </th>
              <td class="taleft">ボールペン、下敷き、紙、ファイル</td>
            </tr>
            <tr>
              <th class="side_taleft" scope="row">
                サニタリー・トイレタニー用品
              </th>
              <td class="taleft">
                洗面台、浴槽、タイル、コップ、風呂の椅子、便器、便座
              </td>
            </tr>
            <tr>
              <th class="side_taleft" scope="row">
                家電製品
              </th>
              <td class="taleft">冷蔵庫、洗濯機、乾燥機、掃除機など</td>
            </tr>
            <tr>
              <th class="side_taleft" scope="row">
                日用雑貨
              </th>
              <td class="taleft">カード、ベルト、財布など</td>
            </tr>
          </table>

          <div class="ma_l10 ma_b10">
            <p class="indents">
              <strong>・試験方法</strong>
              <br />
              JIS Z2801 抗菌加工製品－抗菌性試験法による
              <br />
              試験菌種 ： 黄色ブドウ球菌、大腸菌
            </p>
          </div>

          <div class="ma_l10 ma_b30">
            <p class="indents">
              <strong>・評価基準</strong>
              <br />
              抗菌活性値　2.0以上
            </p>
          </div>

          <p>
            <strong>
              JHPIA抗菌マーク（一般社団法人　日本衛生材料工業連合会）
            </strong>
          </p>

          <div class="ma_l10 ma_b10">
            <p class="indents">
              <strong>・対象製品</strong>　(一社)日本衛生材料工業連合会
              抗菌自主基準で規定する製品に適用される。
            </p>
            <div class="clearfix">
              <p class="fl">
                紙おむつ
                <br />
                パンティーライナー&nbsp;&nbsp;&nbsp;&nbsp;
                <br />
                包帯
                <br />
                三角巾
                <br />
                T字帯
                <br />
              </p>
              <p class="fl">
                さらし
                <br />
                お産用パット
                <br />
                マスク
                <br />
                紙おしぼり、ウェットティシュ
                <br />
                綿棒
              </p>
            </div>
          </div>

          <div class="ma_l10 ma_b10">
            <p class="indents">
              <strong>・試験方法</strong>
              <br />
              （一社）日本衛生材料工業連合会「抗菌自主基準」で定める試験方法
            </p>
          </div>

          <div class="ma_l10 ma_b10">
            <p class="indents">
              <strong>・試験菌種</strong>
              <br />
              黄色ブドウ球菌、大腸菌
            </p>
          </div>

          <div class="ma_l10 ma_b30">
            <p class="indents">
              <strong>・評価基準</strong>
              <br />
              静菌活性値 2.0以上
              <br />
              殺菌活性値 0.0以上
            </p>
          </div>

          <p>
            <strong>
              JHPIA 除菌マーク（一般社団法人 日本衛生材料工業連合会）
            </strong>
          </p>

          <div class="ma_l10 ma_b10">
            <p class="indents">
              <strong>・対象製品</strong>
              <br />
              (一社)日本衛生材料工業連合会が「除菌を標榜するウエットワイパー類の自主基準」で規定する「除菌を標榜するウエットワイパー類」に適用される。
            </p>
          </div>

          <div class="ma_l10 ma_b10">
            <p class="indents">
              <strong>・試験方法</strong>
              <br />
              (一社)日本衛生材料工業連合会
              「除菌を標榜するウエットワイパー類の自主基準」で規定する「ウエットワイパー類の除菌性能試験方法」
            </p>
          </div>

          <div class="ma_l10 ma_b10">
            <p class="indents">
              <strong>・試験菌種</strong>
              <br />
              黄色ぶどう球菌、大腸菌
            </p>
          </div>

          <div class="ma_l10 ma_b30">
            <p class="indents">
              <strong>・評価基準</strong>
              <br />
              除菌活性値 2.0以上
            </p>
          </div>

          <div class="subtitle">
            <h3>お問い合わせ</h3>
          </div>
          <p>試験のご相談・ご依頼は、下記へお気軽に問い合わせください。</p>

          <div class="center_box03">
            <strong>大和化学工業(株)　評価技術センター</strong>
            <br />
            担当：　井田 世志子
            <br />
            〒533-0006　大阪市東淀川区上新庄3丁目1番11号
            <br />
            TEL：<a href="tel:0663280500">06-6328-0500</a>　FAX：06-6328-2160
            <br />
            E-mail：
            <a href="mailto:hyouka@daiwakagaku.co.jp">
              hyouka@daiwakagaku.co.jp
            </a>
            <br />
          </div>
        </div>
      </DisplayTemplate>
    </Layout>
  );
};

export default AboutPage;
