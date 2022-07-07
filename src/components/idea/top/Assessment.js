import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import ProductCards from '../../share/Product-cards';

const Assessment = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../../images/1920-1080.png"
        width={480}
        alt="評価技術センターの写真"
        layout="constrained"
        placeholder="blurred"
      />
      <ProductCards
        firstCardsText="近年、注目を浴びている事業はこの事業"
        secondCardsText="SEKやJNLA,大和化学独自の試験方法も"
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

export default Assessment;
