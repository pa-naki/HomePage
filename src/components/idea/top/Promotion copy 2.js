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

const Wrapper = styled.section``;

export default Promotion;
