import React from 'react'
import styledComponents from 'styled-components'

const Quality = () => {
  return (
    <Wrapper>
      <h3>モノづくりではなく、質づくり</h3>
      <div>
        <img src="" alt="大和化学桜の写真" />
        <p>モノづくりに留まらず、対象となる素材の質を高め、そこから新たに生まれる快適性を追求し続ける――私たち大和化学工業の開発コンセプトです。 例えば、抗菌剤や防虫剤。繊維などの素材がもつ肌ざわりや風合いはそのままに、抗菌性や防虫性などの新たな機能を付加。そこから生まれた製品を媒介に人や暮らしの快適性を創造する。一方では生分解性のプラスチックの開発など、製品自身の性能を変えることにより地球環境の保護に貢献するなど、生活消費材から工業製品にいたるまで、様々な分野で私たちの化学技術による快適性が実現されています。</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styledComponents.section`

`

export default Quality
