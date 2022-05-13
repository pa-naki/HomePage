import React, { useContext } from "react"
import PropTypes from "prop-types"
// import Navigation from "./header/Navigation.js"; 
import { GatsbyContext, GatsbyProvider } from "../context/context";
import Navigation from "./header/navigation";

import styledComponents from "styled-components";

const Header = ({ siteTitle }) => {
  const { navLinks } = useContext(GatsbyContext)
  return (
    <StyledHeader>
      <div>
        {/* <img src="" alt="" /> */}
        <div>
          {/* English対応 */}
          {/* サイト内検索対応 */}
        </div>
      </div>
      <Navigation navLinks={navLinks} />
    </StyledHeader>
  )
};

const StyledHeader = styledComponents.header`
  margin-top: 10px

`

// Header.propTypes = {
//   siteTitle: PropTypes.string
// }

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
