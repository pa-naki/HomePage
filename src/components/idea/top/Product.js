import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Product = () => {
  return (
    <Wrapper>
      <StaticImage src="../../../images/gatsby-astronaut.png" width={300} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #ffe;
`;

export default Product;
