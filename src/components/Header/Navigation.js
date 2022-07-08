import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import '../../util/font-awesome';
import { GatsbyContext } from '../../context/context';
import styled from 'styled-components';
import Logo from './share/Logo';
import NavItem from './share/Nav-item';
import { BiMenu, BiX } from 'react-icons/bi';

const Navigation = () => {
  const { navLinks, isSidebarOpen, showSidebar } = useContext(GatsbyContext);
  // const [sidebar, setSidebar] = useState(false);
  // const show = () => setSidebar(!sidebar);
  // console.log(navLinks);
  return (
    <Wrapper>
      <div className="navbar">
        <button className="listMenu" onClick={showSidebar}>
          <BiMenu />
        </button>
        <Logo />
        <div className="navLinks">
          <div className="sidebarLogo">
            <BiX className="xMark" onClick={showSidebar} />
          </div>
          <NavItem items={navLinks} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  height: 100px;
  z-index: 997;
  background-color: var(--clr-background-opacity);
  .navbar {
    display: flex;
    position: relative;
    padding: 10px;
    height: 100px;
    justify-content: space-between;
    .listMenu {
      display: none;
    }
    .navLinks {
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 14%;
      white-space: nowrap;
      .sidebarLogo {
        display: none;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      .navLinks {
        margin-left: 5%;
      }
    }
  }
`;

export default Navigation;
