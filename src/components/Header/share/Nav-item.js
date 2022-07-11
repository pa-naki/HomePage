import React from 'react';
import { Link } from 'gatsby';
import { AiFillCaretRight } from 'react-icons/ai';
import styled from 'styled-components';

const NavItem = ({ items }) => {
  return (
    <Wrapper>
      {items.map((nuvlink, index) => {
        const { url, label, subMenu } = nuvlink;
        return (
          <li className="menuLinks" key={index}>
            <Link to={url} className="menuLink">
              {label}
            </Link>
            {subMenu && (
              <>
                <AiFillCaretRight className="htmlCssArrow" />
                <ul className="subMenu">
                  {subMenu.map((subpath, index) => (
                    <li className="subMenuLinks" key={index}>
                      <Link to={subpath.url} className="subMenuLink">
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
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  flex: 1 1 auto;
  display: flex;
  line-height: 70px;
  align-items: center;
  .menuLinks {
    flex: 0 1 auto;
    position: relative;
    &:hover {
      .subMenu {
        display: block;
      }
      .htmlCssArrow {
        transform: rotate(90deg);
      }
    }
    &:not(:first-child) {
      margin-left: 0.9%;
    }
    a {
      font-size: 1.19rem;
      color: black;
      text-decoration: none;
      font-weight: bolder;
      position: relative;
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        bottom: 0;
        height: 2px;
        margin: -5px 0;
        left: 0;
        background-color: black;
        transition: all 0.2s ease-in 0s;
      }
      &:hover:after {
        width: 100%;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      flex: 1 1 auto;
      a {
        font-size: calc((100vw - 320px) / 400 + 14px);
      }
    }
    .htmlCssArrow {
      transition: all 0.3s ease;
    }
    .subMenu {
      display: none;
      position: absolute;
      padding: 0 15px 5px;
      background-color: var(--clr-background);
      top: 70px;
      line-height: 40px;
      border: 2px solid black;
      border-radius: 20px;
      z-index: 900;
      &::before {
        position: absolute;
        top: -20px;
        left: 5;
        content: '';
        width: 15px;
        height: 15px;
        border: 10px solid transparent;
        border-right: 8px solid black;
        transform: rotate(90deg);
        z-index: 1;
      }
      &::after {
        position: absolute;
        top: -18px;
        left: 5;
        content: '';
        width: 10px;
        height: 10px;
        border: 10px solid transparent;
        border-right: 9px solid var(--clr-background);
        transform: rotate(90deg);
        z-index: 2;
      }
    }
  }
`;

export default NavItem;
