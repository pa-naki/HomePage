import React, { useContext, useState } from 'react';
import Link from 'gatsby';
// import './styles.css';
import '../demo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../util/font-awesome';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './Navigation.module.css';
import navitem from '../../constants/navitem';
import { GatsbyContext } from '../../context/context';

const Navigation = () => {
  // const [sidebar, setSidebar] = useState(false);
  // const toggle = () => setSidebar(!sidebar);
  const data = useContext(GatsbyContext);
  console.log(data);
  return (
    <nav>
      <div className={styles.navbar}>
        <FontAwesomeIcon
          icon={'fa-list'}
          className={styles.listMenu}
          // onClick={toggle}
        />
        <div className={styles.logo}>
          <Link to="/" className={styles.logoImage}>
            <StaticImage
              src="../../images/daiwa_logo2.png"
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
              // onClick={toggle}
            />
          </div>
          <ul className={styles.links}>
            {navitem.map((sublink, index) => {
              const { link, title, subMenu } = sublink;
              return (
                <li className={styles.menuLinks}>
                  <Link to={link} key={index} className={styles.menuLink}>
                    {title}
                  </Link>
                  {subMenu && (
                    <>
                      <FontAwesomeIcon
                        icon={'fa-angle-up'}
                        className={styles.htmlCssArrow}
                        // onClick={toggle}
                      />
                      <ul className={styles.subMenu}>
                        {subMenu.map((subpath, index) => (
                          <li className={styles.subMenuLinks}>
                            <Link
                              to={subpath.link}
                              key={index}
                              className={styles.subMenuLink}
                            >
                              {subpath.title}
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
    </nav>
  );
};

export default Navigation;
