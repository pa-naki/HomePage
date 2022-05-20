import React, { useContext } from 'react';
import styled from 'styled-components';
import { GatsbyContext } from '../context/context';
import { Link } from 'gatsby';

const Footer = () => {
  const { navLinks } = useContext(GatsbyContext);
  return (
    <Wrapper>
      {navLinks.map((nuvlink, index) => {
        const { url, label, subMenu } = nuvlink;
        return (
          <ul className="footerParentMenu">
            <li>
              <Link to={url}>{label}</Link>
              {subMenu && (
                <ul className="footerSubMenu">
                  {subMenu.map((subpath, index) => (
                    <li>
                      <Link to={subpath.url}>{subpath.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  @media (min-width: 900px) {
    display: flex;
    background-color: #b9b1b1e5;
    .footerParentMenu {
      width: auto;
      margin: 0 auto;
      padding: 0;
    } /* 追加 */
    .footerParentMenu a {
      width: 100%;
      font-size: 1.5rem;
      text-decoration: none;
      color: black;
    }

    .footerParentMenu li {
      position: relative;
      list-style: none;
      padding-left: 0;
      /* padding: 1.5em 0 0 0; ここに幅を持たせると ※*/
    }
    ul .footerSubMenu li {
      padding: 0; /* ここに影響が... */
      width: fit-content;
    }

    .footerSubMenu a {
      text-decoration: none;
      color: black;
      font-size: 1rem;
    }

    .footerSubMenu {
      position: absolute;
      width: 100%;
      top: 40px;
      bottom: 0;
    }
    /* display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 2rem 2rem;
    h2 {
      font-size: 1.2rem;
      display: inline;
    }
    & > ul:not(:first-child) {
      color: red;
      margin-left: 1rem;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      a {
        text-decoration: none;
        color: #5a057ce5;
      }
    } */
  }
`;

export default Footer;
