import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Product = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../../images/1920-1080.png"
        width={480}
        placeholder="blurred"
        layout="constrained"
        alt="image2"
      />
      <div className="cards-text">
        <div>
          <p>コツコツと技を磨き続けて1つ1つ積み上げたこの実績</p>
          <p>大和化学での取得特許数は70以上!</p>
        </div>
        <div>
          <button>
            <Link to="/search">詳細はこちら</Link>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 480px;
  .cards-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      padding: 15px 0;
      p {
        text-align: center;
        margin: 0;
      }
    }
  }
`;

export default Product;
