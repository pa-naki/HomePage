import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

const query = graphql`
  {
    allMicrocmsNews(sort: { fields: publishedAt, order: DESC }, limit: 3) {
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

const TopNews = () => {
  const data = useStaticQuery(query);
  return (
    <Wrapper>
      <h1>お知らせ</h1>
      <Link to="/news">すべてのお知らせへ</Link>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default TopNews;
