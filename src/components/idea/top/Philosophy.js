import React from 'react';
import styled from 'styled-components';

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
  );
};

const Wrapper = styled.section`
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin: 0 auto;
  ol {
    li {
      list-style-type: square;
    }
  }
`;

export default Philosophy;
