import React from 'react';
import styled from 'styled-components';

import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

export const HeddingSection = ({
  children,
  heddingTitle,
  styleTemplate,
  heddingWidth,
  HeddingTag,
  SecondTag,
  secondTitle,
  className,
}) => {
  HeddingTag = HeddingTag ? HeddingTag : 'h2';
  const styleWidth = heddingWidth ? heddingWidth : '50%';
  SecondTag = SecondTag ? SecondTag : false;
  switch (styleTemplate) {
    case 'title':
      return (
        <H2Wrapper className={className}>
          <HeddingTag
            style={{
              textShadow: `0 0 5px black`,
              padding: `5rem`,
              textAlign: `center`,
              borderTop: `5px dotted green`,
              borderBottom: `5px dotted green`,
              width: `80%`,
              margin: `100px auto`,
            }}
          >
            {heddingTitle}
          </HeddingTag>
          {SecondTag && <SecondTag style={{}}>{secondTitle}</SecondTag>}
          {children}
        </H2Wrapper>
      );
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
          {SecondTag && <SecondTag style={{}}>{secondTitle}</SecondTag>}
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
          {SecondTag && (
            <SecondTag
              style={{
                width: `calc(${styleWidth} - 10%)`,
                marginLeft: `5%`,
                color: `#6a6a70`,
              }}
            >
              {secondTitle}
            </SecondTag>
          )}
          {children}
        </H2Wrapper>
      );
  }
};

const H2Wrapper = styled.section`
  h2 {
  }
`;

export const CheckButton = ({ TorFProperty, buttonText, clickFunction }) => {
  return (
    <>
      <button
        onClick={() => {
          clickFunction(preProperty => !preProperty);
        }}
      >
        {TorFProperty ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {buttonText}
      </button>
    </>
  );
};

const styles = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.section`
  color: white;
`;

export default styles;
