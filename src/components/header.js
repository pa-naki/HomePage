import * as React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation"; 

const Header = ({ siteTitle }) => {

  return (
    <>
      <header>
        <div>
          {/* <img src="" alt="" /> */}
          <div>
            {/* English対応 */}
            {/* サイト内検索対応 */}
          </div>
        </div>
        <Navigation />
      </header>
    </>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
