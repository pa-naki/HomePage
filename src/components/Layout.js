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

import Navigation from './Header/Navigation';
import { Sidebar, Footer } from './index';
import './global-style.css';
import styled from 'styled-components';
import { getCurrentLangKey } from 'ptz-i18n';

const Layout = ({ children, displayWidth, pathTree }) => {
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
    <div>
      {/* <Navigation /> */}
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <header>
        <Navigation />
      </header>
      {isSidebarOpen && <Sidebar />}
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  margin-top: ${props => (props.marginTop ? props.marginTop : '100px')};
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
