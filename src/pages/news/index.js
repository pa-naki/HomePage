import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import DisplayTemplate from '../../templates/display-template';
import PathTree from '../../templates/path-tree';

const News = ({ data, location }) => {
  return (
    <Layout>
      <PathTree pathTree={location.pathname} />
      <DisplayTemplate>
        <Wrapper>
          {data.allMicrocmsNews.nodes.map((node, index) => {
            const { category, content, link, id, publishedAt, slug, title } =
              node;
            return (
              <Link to={`/news/${slug}`} key={id} className="newsItem">
                <div className="subInfo">
                  {category && <button>{category}</button>}
                  <div>投稿日: {publishedAt}</div>
                </div>
                <h2>{title}</h2>
              </Link>
            );
          })}
        </Wrapper>
      </DisplayTemplate>
    </Layout>
  );
};

const Wrapper = styled.div`
  .newsItem {
    display: block;
    .subInfo {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default News;

export const query = graphql`
  {
    allMicrocmsNews(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        category
        content
        link
        id
        publishedAt(formatString: "YYYY/MM/DD")
        slug
        title
      }
    }
  }
`;
