import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
        <StaticImage
          src="../../../images/daiwa_logo2.png"
          alt="daiwakagaku logo"
          placeholder="tracedSVG"
          formats={['auto', 'webp', 'avif']}
          layout="fixed"
          className="logoImage"
        />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  text-align: center;
  margin-left: 1.5rem;
  .logoImage {
    font-size: 30px;
    text-decoration: none;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-left: 1rem;
  }
`;

export default Logo;
