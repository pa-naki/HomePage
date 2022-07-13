import React from 'react';
import styled from 'styled-components';

export const LinkCards = ({
  href,
  title,
  explanation,
  category,
  icon,
  address,
}) => {
  return (
    <LinkCard category={category}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="linkTitle">
          {icon}
          {title}
        </div>
        <div className="linkExplanation">
          <div>{address}</div>
          <div>{explanation}</div>
        </div>
      </a>
    </LinkCard>
  );
};

const LinkCard = styled.li`
  flex-basis: 350px;
  width: 35%;
  a {
    display: flex;
    flex-direction: column;
    height: 132px;
    justify-content: space-between;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;
    div {
      text-align: left;
      font-size: 1rem;
      svg {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    }
    .linkTitle {
      line-height: 1.7;
      flex: 0 0 auto;
      &:first-child::after {
        content: '';
        display: block;
        width: 80%;
        border-bottom: 1px dotted black;
        margin: 0 auto;
      }
    }
    .linkExplanation {
      flex: 1 0 auto;
      font-size: 0.8rem;
      margin-top: 5px;
    }
  }
`;

const cardsStyle = () => {
  return <div></div>;
};

export default cardsStyle;
