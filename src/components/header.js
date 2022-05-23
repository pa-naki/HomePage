import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import Navigation from "./header/Navigation.js";
import { GatsbyProvider } from '../context/context';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

import styled from 'styled-components';

const Header = ({ siteTitle }) => {
  // const { navLinks, isSidebarOpen, toggleSidebar } = useContext(GatsbyContext);
  return (
    <StyledHeader>
      <div>
        {/* <img src="" alt="" /> */}
        <div>
          {/* English対応 */}
          {/* サイト内検索対応 */}
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin-top: 70px;
`;

// Header.propTypes = {
//   siteTitle: PropTypes.string
// }

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
