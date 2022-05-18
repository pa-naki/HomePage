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
          <ul>
            <li>
              <h2>
                <Link to={url}>{label}</Link>
              </h2>
              {subMenu && (
                <ul>
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
  /* display: flex; */
  margin-top: 2rem;
  background-color: #b9b1b1e5;
  padding: 1rem 3rem;
  & > ul:not(:first-child) {
    color: red;
    margin-top: 2rem;
  }
  ul {
    list-style: none;
    a {
      display: block;
      text-decoration: none;
      color: #5a057ce5;
    }
  }
`;

export default Footer;
