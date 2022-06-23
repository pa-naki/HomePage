import React, { useState } from 'react';
import styled from 'styled-components';
import { HeddingSection } from '../../../templates/styles';
import Assessment from './Assessment';
import Product from './Product';

const Promotion = () => {
  return (
    <Wrapper>
      <HeddingSection
        heddingTitle="大和化学の製品"
        styleTemplate="title"
        className="topAllProduct"
      >
        <div className="product-cards">
          <Product />
          <Assessment />
        </div>
      </HeddingSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .product-cards {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export default Promotion;
