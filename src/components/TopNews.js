import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { filterByAllCategories } from '../util/filter-by-category';
import { GrFormClose } from 'react-icons/gr';
import { MdSegment } from 'react-icons/md';
import DisplayTemplate from '../templates/display-template';
import EventButton from './share/Event-button';

const query = graphql`
  {
    allMicrocmsNews(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        category
        content
        link
        id
        publishedAt(formatString: "YYYY.MM.DD")
        slug
        title
      }
    }
  }
`;

const TopNews = () => {
  const data = useStaticQuery(query);
  let newsItems = data.allMicrocmsNews.nodes;

  const [newsFilter, setNewsFilter] = useState([]);

  if (newsFilter && newsFilter.length > 0) {
    newsItems = filterByAllCategories(newsItems, newsFilter, 'category');
  }

  const buttonTextArray = [
    {
      buttonText: 'すべて',
      onclick: () => {
        setNewsFilter([]);
      },
    },
    {
      buttonText: '製品情報',
      onclick: () => {
        setNewsFilter(['製品情報']);
      },
    },
    {
      buttonText: '評価技術情報',
      onclick: () => {
        setNewsFilter(['評価技術情報']);
      },
    },
    {
      buttonText: '採用情報',
      onclick: () => {
        setNewsFilter(['採用情報']);
      },
    },
  ];
  return (
    <Wrapper>
      <div className="topMenu">
        <section className="categoryButton">
          <h1>お知らせ</h1>
          <div>
            {buttonTextArray.map((oneNewsCategory, index) => {
              const { buttonText, onclick } = oneNewsCategory;
              return (
                <>
                  <EventButton
                    buttonText={buttonText}
                    onClick={onclick}
                    key={index}
                  />
                </>
              );
            })}
          </div>
        </section>
        <p>
          {newsFilter[0] && (
            <button
              onClick={() => {
                setNewsFilter([]);
              }}
            >
              {newsFilter[0]}
              <GrFormClose />
            </button>
          )}
        </p>
        {newsItems.slice(0, 5).map((news, index) => {
          const { category, content, link, id, publishedAt, slug, title } =
            news;
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
        <div className="goAllNewsPage">
          <Link to="/news">
            一覧を見る
            <MdSegment style={{}} />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0;
  margin-top: -15px;
  padding-top: 40px;
  .topMenu {
    width: 80%;
    margin: 0 auto;
    p {
      width: 80%;
      margin: 0 auto;
      font-size: 1rem;
    }
    .categoryButton {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 15px;
      h1 {
        margin: 0;
        width: 30%;
        text-align: center;
      }
      div {
        margin: 0;
        width: 70%;
        button {
          &:not(:first-child) {
            margin-left: 5px;
          }
        }
      }
    }
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
    .goAllNewsPage {
      padding-top: 1.5rem;
      display: block;
      text-align: right;
      padding-bottom: 30px;
      color: black;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          svg {
            border: 1px solid black;
          }
        }
      }
    }
  }
`;

export default TopNews;
