import React, { useContext } from "react"
import PropTypes from "prop-types"
// import Navigation from "./header/Navigation.js"; 
import { GatsbyContext } from "../context/context";

import styledComponents from "styled-components";

const Header = ({ siteTitle }) => {
  const data = useContext(GatsbyContext);
  console.log(data);
  return (
    <StyledHeader>
      <div>
        {/* <img src="" alt="" /> */}
        <div>
          {/* English対応 */}
          {/* サイト内検索対応 */}
        </div>
      </div>
      {/* <Navigation /> */}
    </StyledHeader>
  )
};

const StyledHeader = styledComponents.header`
  margin-top: 10px

`

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
