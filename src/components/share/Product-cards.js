import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ProductCards = ({firstCardsText, secondCardsText, linkTo}) => {
  return (
    <Wrapper>
      <div className="cards-text">
        <div>
          <p>{firstCardsText}</p>
          <p>{secondCardsText}</p>
        </div>
        <div>
          <button>
            <Link to={linkTo}>詳細はこちら</Link>
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

export default ProductCards;
