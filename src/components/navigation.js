import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../util/font-awesome';
import { StaticImage } from 'gatsby-plugin-image';

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
     `} render={data => {
       function menuOpen() {
        let navLinks = document.querySelector('.navLinks');
        return navLinks.style.left = "0";
       }
       function manuClose() {
        let navLinks = document.querySelector('.navLinks');
        return navLinks.style.left = "-100%";
       }
       async function subMenuOpen(e) {
        let navLinks = document.querySelector('.navLinks');
        return navLinks.classList.toggle('show1');
       }
       return (
        <nav>
          <div className='navbar'>
            <FontAwesomeIcon icon={'fa-list'} className="listMenu" onClick={() => menuOpen()}/>
            <div className='logo'>
              <Link to='/'>
                <StaticImage 
                  src='../images/daiwa_logo2.png'
                  alt='logo'
                  placeholder='blurred'
                  layout='fixed'
                />
              </Link>
            </div>
            <div className='navLinks'>
            <div className='sidebarLogo'>
                <span className='logoName'>大和化学工業</span>
                <FontAwesomeIcon icon={'fa-xmark'} className="xMark" onClick={() => manuClose()} />
              </div>
              <ul className='links'>
                {data.site.siteMetadata.MenuLinks.map((path) => (
                  <li>
                    <Link to={path.link}>{path.title}</Link>
                    {path.subMenu && (
                      <>
                      <FontAwesomeIcon icon={'fa-angle-up'} className="htmlCssArrow" onClick={() => subMenuOpen()}/>
                      <ul className='htmlCssSubMenu subMenu'>
                        {path.subMenu.map((subpath) => (
                          <li>
                            <Link to={subpath.link}>{subpath.title}</Link>
                          </li>
                        ))}
                          </ul>
                        </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
     )}}
      />
  )}