import React from 'react'
import styled from 'styled-components'

const RegistJnla = () => {
  return (
    <Wrapper>
      <div>
        <h3>○JNLA登録区分</h3>
        <div>
          <ul>
            <li>JIS L1902 繊維製品の抗菌性試験方法及び抗菌効果</li>
            <li>JIS Z2801 抗菌加工製品－抗菌性試験方法・抗菌効果</li>
            <li>JIS Z2911 かび抵抗性試験方法</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>JNLA標章付き試験証明書の発行例</h3>
        <div>
          <ul>
            <li>（一社）繊維評価技術協議会：ＳＥＫマークの申請・定期サーベイランス</li>
            <li>（一社）抗菌製品技術協議会：ＳＩＡＡマークの申請</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: blue;
`

export default RegistJnla
