import React from 'react';
import styled from 'styled-components';

export const HeddingSection = ({
  children,
  heddingTitle,
  styleTemplate,
  heddingWidth,
  HeddingTag,
}) => {
  HeddingTag = HeddingTag ? HeddingTag : 'h2';
  const styleWidth = heddingWidth ? heddingWidth : '50%';
  switch (styleTemplate) {
    case 'stripe':
      return (
        <H2Wrapper>
          <HeddingTag
            style={{
              color: `#010079`,
              textShadow: `0 0 5px white`,
              padding: `0.3em 0.5em`,
              background: `-webkit-repeating-linear-gradient(-45deg, #cce7ff, #cce7ff 3px,#e9f4ff 3px, #e9f4ff 7px)`,
              background: `repeating-linear-gradient(-45deg, #cce7ff, #cce7ff 3px,#e9f4ff 3px, #e9f4ff 7px)`,
              backgroundSize: `cover`,
              width: `${styleWidth}`,
            }}
          >
            {heddingTitle}
          </HeddingTag>
          {children}
        </H2Wrapper>
      );
    default:
      return (
        <H2Wrapper>
          <HeddingTag
            style={{
              borderBottom: `solid 3px black`,
              padding: `0.3em 0.5em`,
              width: `${styleWidth}`,
            }}
          >
            {heddingTitle}
          </HeddingTag>
          {children}
        </H2Wrapper>
      );
  }
};

const H2Wrapper = styled.section`
  margin-top: 2rem;
  h2 {
  }
`;

const styles = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.section`
  color: white;
`;

export default styles;
