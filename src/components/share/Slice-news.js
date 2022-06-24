import React from 'react';
import styled from 'styled-components';

import EventButton from './Event-button';

const SliceNews = ({ newsArray, sliceLength }) => {
  sliceLength = sliceLength ? sliceLength : newsArray.length;
  return (
    <Wrapper>
      {newsArray.slice(0, 5).map((news, index) => {
        const { category, content, link, id, publishedAt, slug, title } = news;
        return (
          <Link
            to={`/news/${slug}`}
            key={id}
            style={{
              display: 'block',
            }}
            className={`news newsLine-${index + 1}`}
          >
            {category.length > 0 && (
              <EventButton
                buttonText={category}
                onClick={e => {
                  e.preventDefault();
                  setNewsFilter([`${category}`]);
                }}
              />
            )}
            <hgroup>
              <h4>{publishedAt}</h4>
              <h2>{title}</h2>
            </hgroup>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .news {
    margin-top: 10px;
    position: relative;
    &::after {
      position: absolute;
      bottom: 1px;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: black;
      transform: scale(0, 1);
      transform-origin: left top;
      transition: transform 0.3s;
    }
    &:hover::after {
      transform: scale(1, 1);
    }
    button {
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
    hgroup {
      display: flex;
      align-items: center;
      height: auto;
      color: black;
      text-decoration: none;
      opacity: 0.6;
      h4 {
        width: 10%;
        text-align: center;
        margin: 0;
      }
      h2 {
        width: 90%;
        padding-left: 5px;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default SliceNews;
