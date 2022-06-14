import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Product = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../../images/gatsby-astronaut.png"
        width={500}
        placeholder="blurred"
        alt="image2"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #ffe;
`;

export default Product;
