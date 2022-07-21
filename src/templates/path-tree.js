import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PathTree = ({ pathTree }) => {
  const pTree = pathTree.split('/');
  if (pTree.length < 2) {
    return;
  }
  return (
    <Wrapper>
      <nav>
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
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  font-weight: 11;
  background-color: black;
  padding: 0;
  margin: 0;
  height: auto;
  nav {
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
