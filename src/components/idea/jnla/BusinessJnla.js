import React from 'react'
import styledComponents from 'styled-components'

const BusinessJnla = () => {
  return (
    <Wrapper>
      <p>～試験依頼からJNLA標章付き試験証明書又は試験報告書発行までの流れ～</p>
      <div>
        <div>
          <h4>1．お問い合わせ</h4>
          <div>
            <p>
            お電話、メールにてお問い合わせください。試験内容、必要な試料の大きさや量、試験料金（お見
積書の発行）等について、ご相談を承ります。当センターの試験依頼書に記載の無い試験でも、対
応可能な場合があります。その際の試験依頼書のご記入方法についても、ご案内いたします。その
他、ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <h4>2．お申し込み</h4>
          <p>
            試験依頼書に必要事項をご記入の上、試験資料と共にお送り下さい。
          </p>
        </div>
        <div>
          <h4>3．受付</h4>
          <div>
            <p>
              試験依頼書及び試験試料が到着後、お電話、メールにて依頼書にご記入の内容、試験試料について、
確認いたします。
            </p>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <h4>4．試験開始</h4>
          <div>
            <p>受付が終了後、お申し込みの内容で各試験を開始します。</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styledComponents.section`

`

export default BusinessJnla
