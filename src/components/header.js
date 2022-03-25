import * as React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation"; 

import styled from "styled-components";

const Header = ({ siteTitle }) => {

  return (
    <StyledHeader>
      <div>
        {/* <img src="" alt="" /> */}
        <div>
          {/* English対応 */}
          {/* サイト内検索対応 */}
        </div>
      </div>
      <Navigation />
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  margin-top: 10px

`

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
