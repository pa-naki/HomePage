import React from 'react';
import styled from 'styled-components';

const Video = () => {
  return (
    <Wrapper>
      <iframe
        src="https://www.youtube.com/embed/QLxtsNOtKqs?autoplay=1&mute=1"
        title="難燃剤"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowfullscreen
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: -70px;
  z-index: 998;
  position: relative;
  iframe {
    width: 100vw;
    height: 100vh;
  }
`;

export default Video;
