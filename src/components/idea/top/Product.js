import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import ProductCards from '../../share/Product-cards';
const Product = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../../images/1920-1080.png"
        width={480}
        placeholder="blurred"
        layout="constrained"
        alt="大和化学製品についての写真"
      />
      <ProductCards
        firstCardsText="コツコツと技を磨き続けて1つ1つ積み上げたこの実績"
        secondCardsText="大和化学での取得特許数は70以上!"
        linkTo="/search/"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 480px;
  border: 1px solid black;
  border-radius: 10%;
`;

export default Product;
