import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

const interview = (props, { location }) => {
  return (
    <Layout pathName={location.pathname}>
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
              absolutePath
            }
          }
        }
      }
    }
  }
`;
