import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { GatsbyContext } from '../context/context';
import styled from 'styled-components';

const Sidebar = () => {
  const { navLinks, showSidebar, hideSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper>
      <div className="container">
        <button onClick={hideSidebar}>xmark</button>
        <div className="links">
          {navLinks.map((nuvlink, index) => {
            const { url, label, subMenu } = nuvlink;
            return (
              <ul className="sidebarParentMenu">
                <li className="sidebarParentList">
                  <h3>
                    <Link
                      to={url}
                      className="sidebarParentItem"
                      onClick={hideSidebar}
                    >
                      {label}
                    </Link>
                  </h3>
                  {subMenu && (
                    <ul className="sidebarSubMenu">
                      {subMenu.map((subpath, index) => (
                        <li className="sidebarSubList">
                          <Link
                            to={subpath.url}
                            className="sidebarSubItem"
                            onClick={hideSidebar}
                          >
                            {subpath.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #faf9f9;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  @media (min-width: 921px) {
    display: none;
  }
  .container {
    background: var(--clr-white);
    width: 90vw;
    height: 90vh;
    border-radius: var(--radius);
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    button {
      position: absolute;
      top: 0.5rem;
      right: 3rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: var(--clr-grey-5);
    }
    .links {
      display: flex;
      flex-flow: column wrap;
      justify-content: space-between;
      width: 80vw;
      height: 80vh;
      @media (min-width: 921px) {
      }
      a {
        display: grid;
        width: 100%;
        gap: 0.75rem;
        grid-gap: 0.75rem;
        align-items: center;
        color: #0a2540;
        font-weight: 700;
        text-align: left;
        font-size: 2.2vmin;
        .icon {
          color: #88add2;
          font-size: 2rem;
        }
        &:hover {
          color: #88add2;
          .icon {
            color: #0a2540;
          }
        }
      }
      .sidebarParentMenu {
        height: 25%;
      }
      .sidebarParentList {
      }
      .sidebarParentItem {
        font-size: 4.8vmin;
      }
      .sidebarSubMenu {
        margin-left: 0.5rem;
      }
      .sidebarSubList {
      }
      .sidebarSubItem {
      }
    }
  }
`;

export default Sidebar;
