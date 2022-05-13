import React from 'react'
import styledComponents from 'styled-components'

const Comfort = () => {
  return (
    <Wrapper>
      <h3>地球環境の未来から、真の快適性を追求していきます。</h3>
      <div>
        <img src="" alt="女の人の笑った写真" />
        <p>未来の地球環境を考えると、私たちが追い求めた豊かさや便利さが真の快適性といえるのか疑問です。 それは、温暖化やオゾン層の破壊に見られるように、生活の代償としてもたらされた不利益の上に成り立つ一時の満足に過ぎないのではないでしょうか。 地球環境問題が叫ばれる今、人として、そして企業としてのあるべき姿、進むべき道が問い直されています。 私たち大和化学工業も地球の住人として、未来に対する意志を確かな形として具現化、地球環境との調和を考えた快適性に対する答えを出そうとしています。</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styledComponents.section`

`

export default Comfort
