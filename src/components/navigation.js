import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby';
// import './styles.css';
import './demo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../util/font-awesome';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './Navigation.module.css';

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
          <div className={styles.navbar}>
            <FontAwesomeIcon icon={'fa-list'} className={styles.listMenu} onClick={() => menuOpen()}/>
            <div className={styles.logo}>
              <Link to='/' className={styles.logoImage}>
                <StaticImage 
                  src='../images/daiwa_logo2.png'
                  alt='logo'
                  placeholder='blurred'
                  layout='fixed'
                />
              </Link>
            </div>
            <div className={styles.navLinks}>
            <div className={styles.sidebarLogo}>
                <span className={styles.logoName}>大和化学工業</span>
                <FontAwesomeIcon icon={'fa-xmark'} className={styles.xMark} onClick={() => manuClose()} />
              </div>
              <ul className={styles.links}>
                {data.site.siteMetadata.MenuLinks.map((path) => (
                  <li className={styles.menuLinks}>
                    <Link to={path.link} className={styles.menuLink}>{path.title}</Link>
                    {path.subMenu && (
                      <>
                      <FontAwesomeIcon icon={'fa-angle-up'} className={styles.htmlCssArrow} onClick={() => subMenuOpen()}/>
                      <ul className={styles.subMenu} >
                        {path.subMenu.map((subpath) => (
                          <li className={styles.subMenuLinks}>
                            <Link to={subpath.link} className={styles.subMenuLink}>{subpath.title}</Link>
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