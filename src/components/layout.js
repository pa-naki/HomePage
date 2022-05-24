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

const Layout = ({ children }) => {
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
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
