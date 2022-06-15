import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PathTree = ({ pathTree }) => {
  const pTree = pathTree.split('/');
  return (
    <Wrapper>
      <div>
        {pTree[1] && <Link to={'/'}>home</Link>}
        {pTree[1] && <Link to={`/${pTree[1]}`}>&gt;{pTree[1]}</Link>}
        {pTree[2] && (
          <Link to={`/${pTree[1]}/${pTree[2]}`}>&gt;{pTree[2]}</Link>
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
    width: 85%;
    margin: 0 auto;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

export default PathTree;
