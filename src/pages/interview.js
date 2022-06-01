import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const Interview = props => {
  return (
    <Layout>
      <h1>インタビューページ</h1>
      {props.data.allMarkdownRemark.edges.map((singleInterview, index) => {
        const { id, faceupPath, title, name, hireDate, department } =
          singleInterview.node.frontmatter;
        return (
          <div key={index}>
            <h1>{title}</h1>
            <h2>{name}</h2>
          </div>
        );
      })}
    </Layout>
  );
};

export default Interview;

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
              absolutePath
            }
          }
        }
      }
    }
  }
`;
