import React, { useState } from 'react';
import styled from 'styled-components';

const Philosophy = () => {
  // const changeImageUrl = () => {
  //   setImageUrl();
  // };
  return (
    <Wrapper>
      <div className="title">
        <h1>心がけていること</h1>
      </div>
      <div className="main">
        <div>
          <p>約70年に渡ってこだわり抜いてきた品質</p>
          <p>私たちの礎となっている考え方です</p>
        </div>
        <ul>
          <li>
            <h3>日々挑戦と創造に努力</h3>
          </li>

          <li>
            <h3>信頼と和、人材育成</h3>
          </li>

          <li>
            <h3>健康と安全、社員の豊かな暮らし</h3>
          </li>

          <li>
            <h3>会社の発展と地域社会への貢献</h3>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: black;
  color: white;
  padding-top: 6rem;
  padding-bottom: 6rem;
  .title {
    height: 7rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    h1 {
      margin: 0;
    }
  }
  .main {
    display: flex;
    padding: 5rem;
    div {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        font-size: 1.7rem;
        color: white;
      }
    }
    ul {
      width: 40%;
      li {
        &:not(:first-child) {
          margin-top: 30px;
        }
        padding: 15px;
        h3 {
          margin: 0;
          text-align: right;
        }
      }
    }
  }
`;

export default Philosophy;
