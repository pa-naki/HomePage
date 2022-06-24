import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import styled from 'styled-components';

const NewsTemplate = ({ data, location }) => {
  const { publishedAt, title, category, content, id } = data.microcmsNews;
  return (
    <Layout>
      <Seo title={title} />
      <PathTree pathTree={location.pathname} />
      <DisplayTemplate>
        <Wrapper>
          <hgroup>
            <h1>{title}</h1>
            <h2>{category}</h2>
            <h3>{publishedAt}</h3>
          </hgroup>
          <div dangerouslySetInnerHTML={{ __html: `${content}` }} />
        </Wrapper>
      </DisplayTemplate>
    </Layout>
  );
};

const Wrapper = styled.section``;

export const query = graphql`
  query newsQuery($slug: String!) {
    microcmsNews(slug: { eq: $slug }) {
      publishedAt(formatString: "YYYY/MM/DD")
      title
      category
      content
      id
      slug
    }
  }
`;

export default NewsTemplate;
