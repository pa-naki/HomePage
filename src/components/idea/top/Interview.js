import React, { useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Thumbs,
  FreeMode,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperLength = {
    swiperNamber: 0,
  };
  return (
    <Wrapper>
      <h1>従業員の声</h1>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectCoverflow]}
        effect="coverflow"
        autoplay={true}
        className="mySwiper2"
      >
        {data.allMarkdownRemark.edges.map((employeePerson, index) => {
          const { faceupPath, department, hireDate, id, name, title } =
            employeePerson.node.frontmatter;
          const { slug } = employeePerson.node.fields;
          swiperLength.swiperNamber += 1;
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
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={swiperLength.swiperNamber}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {data.allMarkdownRemark.edges.map((employeePerson, index) => {
          const { faceupPath, department, hireDate, id, name, title } =
            employeePerson.node.frontmatter;
          return (
            <SwiperSlide key={index}>
              <div className="inSwiper">
                <GatsbyImage
                  image={getImage(
                    faceupPath.childrenImageSharp[0].gatsbyImageData
                  )}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: whitesmoke;
  h1 {
    padding-top: 20px;
    margin-bottom: 40px;
    text-align: center;
  }
  .mySwiper2 {
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
  .mySwiper .swiper-slide {
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }
`;

export default Interview;
