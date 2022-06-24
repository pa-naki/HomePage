import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ContactCard = () => {
  return (
    <Wrapper>
      <button>
        <Link to="/contact/">お問い合わせ</Link>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  margin: 100px auto;
  text-align: center;
  button {
    font-size: 4rem;
    padding: 3rem 5rem;
    a {
      text-decoration: none;
      color: black;
    }
  }
`;

export default ContactCard;
