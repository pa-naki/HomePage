import styled from 'styled-components';

const Sticky = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 5;
  background: #ffffff;
  button {
    width: 100%;
    font-size: 3rem;
  }
`;

export default Sticky;
