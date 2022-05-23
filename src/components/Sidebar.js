import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../util/font-awesome';
import { GatsbyContext } from '../context/context';
import styled from 'styled-components';

const Sidebar = () => {
  const { navLinks, showSidebar, hideSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper>
      <div className="container">
        <div className="links">
          {navLinks.map((nuvlink, index) => {
            const { url, label, subMenu } = nuvlink;
            console.log('first:', index);
            return (
              <ul>
                <li>
                  <h2>
                    <Link to={url} onClick={hideSidebar}>
                      {label}
                    </Link>
                  </h2>
                  {subMenu && (
                    <ul>
                      {subMenu.map((subpath, index) => {
                        console.log('second', index);
                        return (
                          <li>
                            <Link to={subpath.url} onClick={hideSidebar}>
                              {subpath.label}
                            </Link>
                          </li>
                        );
                      })}
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
  position: relative;
  top: 0;
  left: 0;
  width: 1fr;
  height: 1fr;
  background: #faf9f9;
  z-index: 999;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  @media (min-width: 921px) {
    display: none;
  }
  .container {
    background: var(--clr-white);
    width: 90vw;
    height: 90vh;
    border-radius: var(--radius);
    position: relative;
    padding: 1rem 2rem 2rem 2rem;
    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: var(--clr-grey-5);
    }
    .links {
      display: grid;
      gap: 1rem 2rem;
      @media (min-width: 921px) {
        grid-template-columns: 1fr 1fr;
      }
      a {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.75rem;
        grid-gap: 0.75rem;
        align-items: center;
        color: #0a2540;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.2rem;
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
    }
  }
`;

export default Sidebar;
