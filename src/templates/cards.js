import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const cards = ({ arrayItems }) => {
  return (
    <Wrapper>
      {arrayItems.map((item, index) => {
        const { id, path, imgSrc, title, explanation } = item;
        return (
          <Link to={path} key={index}>
            <div>
              <p>{title}</p>
              <p>{explanation}</p>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  a {
    width: 40%;
    margin: 15px auto;
    height: 300px;
    border: 1px solid black;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    div {
      width: 100%;
    }
  }
`;

export default cards;
