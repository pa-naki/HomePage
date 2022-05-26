import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import styled from 'styled-components';
import backGroundImage from 'gatsby-background-image';

const Philosophy = () => {
  const [imageUrl, setImageUrl] = useState('../../../images/slide02.jpg');
  // const changeImageUrl = () => {
  //   setImageUrl();
  // };
  return (
    <Wrapper>
      <div>
        <h1>私たちが目指していること</h1>
        <ol>
          <li>
            <button
              onClick={() => {
                setImageUrl('../../../images/gatsby-astronaut.png');
              }}
            >
              日々挑戦と創造に努力
            </button>
          </li>

          <li>
            <button>信頼と和、人材育成</button>
          </li>

          <li>
            <button>健康と安全、社員の豊かな暮らし</button>
          </li>

          <li>
            <button>会社の発展と地域社会への貢献</button>
          </li>
        </ol>
      </div>
      <StaticImage src={`${imageUrl}`} className="image" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  position: relative;
  div {
    position: absolute;
    z-index: 4;
    top: 10px;
    right: 100px;
    h1 {
      margin-top: 3rem;
    }
    ol {
      height: 80vh;
      width: 50vw;
      margin: 0 45% 5%;
      list-style: none;
      li {
        height: 25%;
        display: flex;
        button {
          display: inline-block;
          width: 100%;
          font-size: 2.5rem;
          justify-content: center;
          text-align: right;
        }
      }
    }
  }
  .image {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export default Philosophy;
