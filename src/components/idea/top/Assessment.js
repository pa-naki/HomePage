import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const Assessment = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../../images/gatsby-icon.png"
        width={400}
        alt="image"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #edb;
`;

export default Assessment;
