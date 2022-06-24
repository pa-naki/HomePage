import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import DisplayTemplate from '../../templates/display-template';
import PathTree from '../../templates/path-tree';
import AllNews from '../../components/AllNews';

const News = ({ data, location }) => {
  return (
    <Layout>
      <PathTree pathTree={location.pathname} />
      <DisplayTemplate>
        <Wrapper>
          <AllNews />
        </Wrapper>
      </DisplayTemplate>
    </Layout>
  );
};

const Wrapper = styled.div``;

export default News;
