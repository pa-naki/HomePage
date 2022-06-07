import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Interview = () => {
  const data = useStaticQuery(
    graphql`
      query employeeInterview {
        allMarkdownRemark(sort: { fields: frontmatter___id, order: ASC }) {
          edges {
            node {
              fields {
                slug
              }
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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={2.1}
        inlist={5}
        loop={true}
        spaceBetween={10}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        className="displaySwiper"
      >
        {data.allMarkdownRemark.edges.map((employeePerson, index) => {
          const { faceupPath, department, hireDate, id, name, title } =
            employeePerson.node.frontmatter;
          const { slug } = employeePerson.node.fields;
          return (
            <SwiperSlide key={index}>
              <Link to={slug}>
                <div className="inSwiper">
                  <GatsbyImage
                    image={getImage(
                      faceupPath.childrenImageSharp[0].gatsbyImageData
                    )}
                  />
                  <hgroup>
                    <h2>{title}</h2>
                    <h3>{name}</h3>
                    <h4>{department}</h4>
                    <h4>{hireDate}</h4>
                  </hgroup>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: whitesmoke;
  .displaySwiper {
    margin-left: 300px;
  }
  .inSwiper {
    display: flex;
    position: relative;
    z-index: 4;
    hgroup {
      position: absolute;
      z-index: 10;
    }
  }
`;

export default Interview;
