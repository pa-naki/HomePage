import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, Nav, NavItem, NavbarBrand } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar bg="light" variant="light" expand="lg">
    <Navbar.Brand as={Link} href="/">
      {siteTitle}  
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            会社概要  
          </Nav.Link> 
        </NavItem>
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/jigyo">
            会社概要  
          </Nav.Link> 
        </NavItem>
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/information">
            会社概要  
          </Nav.Link> 
        </NavItem>
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/contact">
            会社概要  
          </Nav.Link> 
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
