import React from 'react';
import styled from 'styled-components';

export const LinkCards = ({ href, title, explanation }) => {
  return (
    <LinkCard>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="linkTitle">{title}</div>
        <div className="linkExplanation">{explanation}</div>
      </a>
    </LinkCard>
  );
};

const LinkCard = styled.li`
  width: 40%;
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      text-align: center;
    }
    .linkTitle {
    }
    .linkExplanation {
    }
  }
`;

const cardsStyle = () => {
  return <div></div>;
};

export default cardsStyle;
