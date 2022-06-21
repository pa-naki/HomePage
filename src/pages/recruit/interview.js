import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import DisplayTemplate from '../../templates/display-template';

import PathTree from '../../templates/path-tree';

const interview = props => {
  return (
    <Layout>
      <PathTree pathTree={props.location.pathname} />
      <DisplayTemplate>
        <Wrapper>
          {props.data.allMarkdownRemark.edges.map((singleInterview, index) => {
            const { id, faceupPath, title, name, hireDate, department } =
              singleInterview.node.frontmatter;
            const { slug } = singleInterview.node.fields;
            return (
              <Link to={slug} key={id} className="cards">
                <GatsbyImage
                  image={faceupPath.childImageSharp.gatsbyImageData}
                />
                <hgroup>
                  <h2>{title}</h2>
                  <h3>{name}</h3>
                </hgroup>
              </Link>
            );
          })}
        </Wrapper>
      </DisplayTemplate>
    </Layout>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  .cards {
    width: 45%;
    margin: 20px auto;
  }
`;

export default interview;

export const query = graphql`
  query EmployeeQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            department
            hireDate
            id
            name
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
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
