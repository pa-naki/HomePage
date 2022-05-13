import React from 'react'
import styledComponents from 'styled-components'

const QualityPolicy = () => {
  return (
    <Wrapper>
      <h3>～ 顧客の満足と信頼を得るために ～</h3>
      <div>
        <p>＜品質方針＞</p>
        <p>「規格要求事項の遵守により、顧客に信頼される試験活動及び品質サービスの提供を行い、顧客との安定した信頼関係を確保する。」</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styledComponents.section`
  background-color: yellow;
`

export default QualityPolicy
