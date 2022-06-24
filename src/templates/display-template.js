import React from 'react';
import styled from 'styled-components';

const DisplayTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  width: 90%;
  margin: 2rem auto 0;
`;

export default DisplayTemplate;
