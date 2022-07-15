/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';

import { GatsbyContext } from '../context/context';
import Navigation from './Header/Navigation';
import { Sidebar, Footer } from './index';
import SelectLanguage from './Header/selectLanguage';
import './global-style.css';

const Layout = ({ children, i18nMessages, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `);
  const { isSidebarOpen } = useContext(GatsbyContext);
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(
    item => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') })
  );
  return (
    <div>
      <IntlProvider locale={langKey} messages={i18nMessages}>
        <SelectLanguage langs={langsMenu} />
        {/* <Navigation /> */}
        {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <header>
          <Navigation />
        </header>
        {isSidebarOpen && <Sidebar />}
        <Wrapper>{children}</Wrapper>
        <Footer />
      </IntlProvider>
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
