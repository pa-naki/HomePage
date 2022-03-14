import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function menuLinks () {
  return (
    <StaticQuery
      query={graphql`
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
     `} render={data => (
      <>
        {data.site.siteMetadata.MenuLinks.map((path) => (
          <Nav.Link as='li' key={path.title}>
            <Link to={path.link}>
              {path.title}
            </Link>
            {path.subMenu && (
              <NavDropdown class='sub-items responsive-navbar-nav'>
                {path.subMenu.map((subpath) => (
                  <NavDropdown.Item a href={subpath.link}>
                    {subpath.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav.Link>
        ))} 
      </>
    )}
    />
  );
}

class Navigation extends React.Component {
  render () {
    return (
      <Navbar collapseOnSelect expand='md' className='site-navigation'> 
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <ul>
            {menuLinks()}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;