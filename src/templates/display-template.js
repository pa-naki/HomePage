import React from 'react';
import styled from 'styled-components';

const DisplayTemplate = ({ children, displayWidth }) => {
  return <Wrapper displayWidth={displayWidth}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: ${props => (props.displayWidth ? props.displayWidth : '90%')};
  margin: 0 auto;
`;

export default DisplayTemplate;
