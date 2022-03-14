import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

const MenuLinks = ({ data }) => {
  <>
    <ul>
      {data.site.siteMetadeta.MenuLinks.map((path) => (
        <Nav.Link as="li" key={path.title}>
          <Link to={path.link}>
            {path.title}
          </Link>
          {path.subMenu && path.subMenu.length > 0 ? (
            <NavDropdown className='sub-items responsive-navbar-nav'>
              {path.subMenu.map((subpath) => (
                <NavDropdown.Item a href={subpath.link}>
                  {subpath.title}  
                </NavDropdown.Item>
              ))}  
            </NavDropdown>
          ): null}  
        </Nav.Link>))
    }</ul>
  </>
}

export const query = graphql`
  query menuItems {
    site {
      siteMetadata {
        MenuLinks {
          link
          title
          subMenu {
            link
            title
          }
        }
      }
    }
  }

`