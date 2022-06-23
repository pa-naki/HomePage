import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const RecruitCards = () => {
  return (
    <Wrapper>
      <div className="recruit-cards">
        <figure>
          <Link to="/recruit/entry">
            <StaticImage
              src="../../images/recruit_entry/entryb.jpg"
              alt="エントリーフォーム"
              layout="fixed"
              placeholder="blurred"
              formats={['webp', 'avif', 'auto']}
            />
          </Link>
        </figure>
        <div>
          <span class="hisu">※</span>受付連絡先
          <br />
          （書類送付先、面接会場など）
          <br />
          ■東京支社：管理部門総務経理部
          <br />
          ・山岸　康之&nbsp;&nbsp;TEL(03)3653-1171
          <br />
          <br />
          <div class="clear"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .recruit-cards {
    width: 70%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin: 20px auto;
    div {
      margin: 10px 0;
    }
    figure {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default RecruitCards;
