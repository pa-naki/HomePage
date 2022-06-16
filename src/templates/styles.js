import React from 'react';
import styled from 'styled-components';

export const H2Section = ({ h2Title, children, setCase }) => {
  return (
    <H2Wrapper>
      <h2>{h2Title}</h2>
      <hr />
      {children}
    </H2Wrapper>
  );
};

const H2Wrapper = styled.section`
  hr {
    width: 50%;
    color: black;
    border: ridge;
  }
  h2 {
    position: relative;
    padding-left: 35px;
  }
  h2:before {
    position: absolute;
    content: '\f135';
    background: #ffca2c;
    color: white;
    font-weight: 900;
    font-size: 15px;
    border-radius: 50%;
    left: 0;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  h2:after {
    /*吹き出しのちょこんと出た部分*/
    content: '';
    display: block;
    position: absolute;
    left: 20px;
    height: 0;
    width: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 12px solid #ffca2c;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

const styles = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.section`
  color: white;
`;

export default styles;
