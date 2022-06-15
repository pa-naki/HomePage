/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyContext } from '../context/context';

import { Header, Sidebar, Navigation, Footer } from './index';
import { StaticImage } from 'gatsby-plugin-image';
import DisplayTemplate from '../templates/display-template';
import PathTree from '../templates/path-tree';
import styled from 'styled-components';

const Layout = ({ children, heroImage, imgAlt, pathName, notTemplate }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { isSidebarOpen } = useContext(GatsbyContext);
  return (
    <>
      {/* <Navigation /> */}
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {isSidebarOpen && <Sidebar />}
      {heroImage && <StaticImage src={heroImage} alt={imgAlt} />}
      {notTemplate ? (
        <>{children}</>
      ) : (
        <Wrapper>
          {pathName && <PathTree pathTree={pathName} />}
          <DisplayTemplate>{children}</DisplayTemplate>
        </Wrapper>
      )}
      <Footer />
    </>
  );
};

const Wrapper = styled.main`
  margin-top: 70px;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
