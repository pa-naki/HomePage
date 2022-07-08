import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Video = () => {
  const [visibleHeader, setVisibleHeader] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setVisibleHeader(false);
    });
    return window.removeEventListener('scroll', () => {
      setVisibleHeader(true);
    });
  }, []);

  return (
    <Wrapper visibleHeader={visibleHeader}>
      <iframe
        src="https://www.youtube.com/embed/QLxtsNOtKqs?autoplay=1&mute=1"
        title="難燃剤"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowfullscreen
        id="topVideo"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: ${props => (props.visibleHeader === true ? '10' : '999')};
  position: relative;
  iframe {
    width: 100vw;
    height: 100vh;
  }
`;

export default Video;
