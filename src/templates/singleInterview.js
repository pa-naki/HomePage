import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const SingleInterview = props => {
  const {
    title,
    department,
    episode1_question,
    episode1_text,
    episode1_title,
    episode2_question,
    episode2_text,
    episode2_title,
    episode3_question,
    episode3_text,
    episode3_title,
    episode4_question,
    episode4_text,
    episode4_title,
    episode5_question,
    episode5_text,
    episode5_title,
    episode_image2,
    hireDate,
    id,
    name,
  } = props.data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Wrapper>
        <img src="" alt="顔写真" />
        <hgroup>
          <h1>{title}</h1>
          <h2>{name}</h2>
          <h3>{department}</h3>
          <h4>{hireDate}</h4>
        </hgroup>
        <section>
          <h4>{episode1_question}</h4>
          <h3>{episode1_title}</h3>
          <p>{episode1_text}</p>
        </section>
        <section>
          <h4>{episode2_question}</h4>
          <h3>{episode2_title}</h3>
          <p>{episode2_text}</p>
        </section>
        <section>
          <h4>{episode3_question}</h4>
          <h3>{episode3_title}</h3>
          <p>{episode3_text}</p>
        </section>
        <section>
          <h4>{episode4_question}</h4>
          <h3>{episode4_title}</h3>
          <p>{episode4_text}</p>
        </section>
        <section>
          <h4>{episode5_question}</h4>
          <h3>{episode5_title}</h3>
          <p>{episode5_text}</p>
        </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.article`
  font-family: sans-serif;
`;

export default SingleInterview;

export const query = graphql`
  query SingleInterviewQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        department
        episode1_question
        episode1_text
        episode1_title
        episode2_question
        episode2_text
        episode2_title
        episode3_question
        episode3_text
        episode3_title
        episode4_question
        episode4_text
        episode4_title
        episode5_question
        episode5_text
        episode5_title
        episode_image2
        hireDate
        id
        name
        title
      }
    }
  }
`;
