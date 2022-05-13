import React from 'react'
import styledComponents from 'styled-components'

const Philosophy = () => {
  return (
    <Wrapper>
      <ol>
        <li>日々挑戦と創造に努力。</li>
        <li>信頼と和、人材育成。</li>
        <li>健康と安全、社員の豊かな暮らし。</li>
        <li>会社の発展と地域社会への貢献。</li>
      </ol>
    </Wrapper>
  )
}

const Wrapper = styledComponents.section`

`

export default Philosophy
