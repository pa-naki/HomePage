import React from 'react';
import styled from 'styled-components';

const EventButton = ({ buttonText, onClick }) => {
  return <Wrapper onClick={onClick}>{buttonText}</Wrapper>;
};

const Wrapper = styled.button`
  font-size: 20px;
`;

export default EventButton;
