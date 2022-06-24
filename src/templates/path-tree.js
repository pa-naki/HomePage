import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PathTree = ({ pathTree }) => {
  const pTree = pathTree.split('/');
  return (
    <Wrapper>
      <div>
        {pTree[1] && <Link to={'/'}>home</Link>}
        {pTree[1] && (
          <>
            {' '}
            <span>&gt;</span> <Link to={`/${pTree[1]}`}>{pTree[1]}</Link>
          </>
        )}
        {pTree[2] && (
          <>
            {' '}
            <span>&gt;</span>{' '}
            <Link to={`/${pTree[1]}/${pTree[2]}`}>{pTree[2]}</Link>
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  font-weight: 11;
  background-color: black;
  padding: 0;
  margin: 0;
  height: auto;
  div {
    width: 90%;
    margin: 0 auto;
    color: white;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export default PathTree;
