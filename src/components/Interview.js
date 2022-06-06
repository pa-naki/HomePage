import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Interview = () => {
  const data = useStaticQuery(
    graphql`
      query employeeInterview {
        allMarkdownRemark(sort: { fields: frontmatter___id, order: ASC }) {
          edges {
            node {
              frontmatter {
                department
                hireDate
                id
                name
                title
                faceupPath {
                  childrenImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: AUTO
                      quality: 90
                    )
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper>
      <h1>インタビュー一覧</h1>
      <article>
        {data.allMarkdownRemark.edges.map((employeePerson, index) => {
          const { faceupPath, department, hireDate, id, name, title } =
            employeePerson.node.frontmatter;
          return (
            <section key={index}>
              <h1>{title}</h1>
              <GatsbyImage
                image={getImage(
                  faceupPath.childrenImageSharp[0].gatsbyImageData
                )}
              />
              {console.log(faceupPath)}
              <h2>{name}</h2>
              <h4>{department}</h4>
              <h4>{hireDate}</h4>
            </section>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: whitesmoke;
  article {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    section {
      flex-shrink: 0;
      margin: 5px;
      width: 90%;
    }
  }
`;

export default Interview;
