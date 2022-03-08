import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, Nav, NavItem, NavbarBrand } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <>
    <nav>
      
    </nav>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
