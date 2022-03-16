import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../util/font-awesome';

// import '@fortawesome/fontawesome-svg-core/styles.css'

export default function menuLinks () {
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
        <nav>
          <div className='navbar'>
            <div className='logo'><Link to='/'>大和化学工業</Link></div>
            <div className='navLinks'>
              <ul className='links'>
                {data.site.siteMetadata.MenuLinks.map((path) => (
                  <li>
                    <Link to={path.link}>{path.title}</Link>
                    {path.subMenu && (
                      <>
                      <FontAwesomeIcon icon={'fa-angle-up'} className="htmlCssArrow arrow"/>
                      <ul className='htmlCssSubMenu subMenu'>
                        <li>
                            {path.subMenu.map((subpath) => (
                              <Link to={subpath.link}>{subpath.title}</Link>
                              ))}
                            </li>
                          </ul>
                        </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
     )}
      />
  )}