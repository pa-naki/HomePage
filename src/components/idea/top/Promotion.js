import React, { useState } from 'react';
import styled from 'styled-components';
import Assessment from './Assessment';
import Product from './Product';

const Promotion = () => {
  const [viewProduct, setViewProduct] = useState(false);
  const trueViewProduct = () => {
    setViewProduct(false);
  };
  const falseViewProduct = () => {
    setViewProduct(true);
  };
  return (
    <Wrapper>
      <div className="container">
        <button onClick={trueViewProduct}>
          <h2>大和化学の製品</h2>
        </button>
        <button onClick={falseViewProduct}>
          <h2>評価技術センター</h2>
        </button>
      </div>
      {viewProduct ? <Assessment /> : <Product />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  margin-top: 20px;
  background-color: #ffd;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    button {
      height: 100%;
      h2 {
        margin: 5px auto;
      }
    }
  }
`;

export default Promotion;
