import React from 'react';
import styled from 'styled-components';

const Rdefforts = () => {
  return (
    <Wrapper>
      <h2>研究開発への取り組み</h2>
      <p>固有技術を深耕し、特殊化した高機能製品を開発</p>
      <div>
        <ol>
          <li>事業戦略に基づいた新規製品開発</li>
          <li>コア技術の育成による事業基盤強化</li>
          <li>重点化とフレキシブルな運営による研究効率の向上</li>
        </ol>
        <p>
          持続的に発展できる研究開発型企業として、顧客満足の向上につながる研究開発を継続推進
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: black;
  div {
    color: red;
    ol {
      li {
        box-sizing: border-box;
        list-style: none;
      }
    }
  }
`;

export default Rdefforts;
