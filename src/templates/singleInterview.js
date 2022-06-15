import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const SingleInterview = (props, { location }) => {
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
    hireDate,
    name,
    episodeFullimage1,
    faceupPath,
    episodeImage1,
    episodeImage2,
    schedule,
  } = props.data.markdownRemark.frontmatter;

  const fullImage = getImage(episodeFullimage1.childImageSharp.gatsbyImageData);
  const faceupImage = getImage(faceupPath.childImageSharp.gatsbyImageData);
  const Image1 = getImage(episodeImage1.childImageSharp.gatsbyImageData);
  const Image2 = getImage(episodeImage2.childImageSharp.gatsbyImageData);
  const scheduleImage = getImage(schedule.childImageSharp.gatsbyImageData);

  return (
    <Layout pathName={location.pathname}>
      <Wrapper>
        <div className="headerInterview">
          <GatsbyImage image={faceupImage} />
          <h1>{title}</h1>
        </div>
        <hgroup className="headerDetail">
          <h2>{name}</h2>
          <h3>{department}</h3>
          <h4>{hireDate}</h4>
        </hgroup>
        <div className="firstBlock">
          <div>
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
          </div>
          <GatsbyImage image={Image1} />
        </div>
        <section className="secondBlock">
          <h4>{episode3_question}</h4>
          <h3>{episode3_title}</h3>
          <p>{episode3_text}</p>
        </section>
        <GatsbyImage image={fullImage} />
        <div className="thirdBlock">
          <GatsbyImage image={Image2} />
          <div>
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
          </div>
        </div>
        <div className="scheduleBlock">
          <GatsbyImage image={scheduleImage} />
          <h1>1日のスケジュール</h1>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.article`
  .headerInterview {
    position: relative;
    display: flex;
    h1 {
      position: absolute;
      top: 20%;
    }
  }
  .headerDetail {
    width: 90%;
    margin: 40px 80px auto;
  }
  .firstBlock {
    display: flex;
    div {
      width: 55%;
      line-height: 2;
      font-weight: 20;
      margin-top: 20px;
      section {
        margin: 30px auto auto;
        width: 80%;
        height: auto;
      }
    }
    img {
      width: auto;
      margin: 0 auto;
    }
  }
  .secondBlock {
    margin: 100px auto auto;
    width: 80%;
  }
  .thirdBlock {
    margin-top: 100px;
    display: flex;
    img {
      width: auto;
      margin: 0 auto;
    }
    div {
      width: 55%;
      line-height: 2;
      font-weight: 20;
      margin-top: 20px;
      section {
        margin: 30px auto auto;
        width: 80%;
        height: auto;
      }
    }
  }
  .scheduleBlock {
    margin-top: 100px;
    display: flex;
    position: relative;
    h1 {
      position: absolute;
      color: white;
      top: 15%;
    }
  }
`;

export default SingleInterview;

export const query = graphql`
  query SingleInterview($slug: String!) {
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
        hireDate
        id
        name
        title
        episodeFullimage1 {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
              quality: 90
              layout: CONSTRAINED
            )
          }
        }
        faceupPath {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
              quality: 90
              layout: CONSTRAINED
            )
          }
        }
        episodeImage1 {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
              quality: 25
              layout: CONSTRAINED
            )
          }
        }
        episodeImage2 {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
              quality: 25
              layout: CONSTRAINED
            )
          }
        }
        schedule {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, AVIF]
              placeholder: BLURRED
              quality: 25
              layout: CONSTRAINED
            )
          }
        }
      }
      html
    }
  }
`;
