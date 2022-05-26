import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
// import './styles.css';
import './demo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../util/font-awesome';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './Navigation.module.css';
import { GatsbyContext } from '../context/context';
import styled from 'styled-components';

const Navigation = () => {
  const { navLinks, isSidebarOpen, showSidebar } = useContext(GatsbyContext);
  // const [sidebar, setSidebar] = useState(false);
  // const show = () => setSidebar(!sidebar);
  // console.log(navLinks);
  return (
    <Wrapper>
      <div className={styles.navbar}>
        <button className={styles.listMenu} onClick={showSidebar}>
          <FontAwesomeIcon icon={'fa-list'} />
        </button>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoImage}>
            <StaticImage
              src="../images/daiwa_logo2.png"
              alt="logo"
              placeholder="blurred"
              layout="fixed"
            />
          </Link>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.sidebarLogo}>
            <span className={styles.logoName}>大和化学工業</span>
            <FontAwesomeIcon
              icon={'fa-xmark'}
              className={styles.xMark}
              onClick={showSidebar}
            />
          </div>
          <ul className={styles.links}>
            {navLinks.map((nuvlink, index) => {
              const { url, label, subMenu } = nuvlink;
              return (
                <li className={styles.menuLinks}>
                  <Link to={url} key={index} className={styles.menuLink}>
                    {label}
                  </Link>
                  {subMenu && (
                    <>
                      <FontAwesomeIcon
                        icon={'fa-angle-up'}
                        className={styles.htmlCssArrow}
                        // onClick={show}
                      />
                      <ul className={styles.subMenu}>
                        {subMenu.map((subpath, index) => (
                          <li className={styles.subMenuLinks}>
                            <Link
                              to={subpath.url}
                              key={index}
                              className={styles.subMenuLink}
                            >
                              {subpath.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  z-index: 997;
`;

export default Navigation;
