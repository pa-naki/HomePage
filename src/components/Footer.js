import React, { useContext } from 'react';
import styled from 'styled-components';
import { GatsbyContext } from '../context/context';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  const { navLinks } = useContext(GatsbyContext);
  return (
    <Wrapper>
      <figure className="footerMap">
        <figcaption className="footerMapInfo">
          <div className="footerMapLogo">
            <Link to="/">
              <StaticImage
                src="../images/daiwa_logo2.png"
                className="logo"
                alt="logo"
              />
            </Link>
          </div>
          <address className="footerFirstMapAddress">
            〒533-0006 大阪市東淀川区上新庄3-1-11
            <br />
            大阪本社･工場
            <br />
            <button className="google-map-link">
              <a href="https://g.page/daiwa-chemical?share" target={'_blank'}>
                Google Mapへ
              </a>
            </button>
          </address>
          <address className="footerSecondaryMapAddress">
            〒132-0021 東京都江戸川区中央4-17-19
            <br />
            東京支社
            <br />
            <button className="google-map-link">
              <a href="https://goo.gl/maps/jbbpvnx222gRuJBv7" target={'_blank'}>
                Google Mapへ
              </a>
            </button>
          </address>
        </figcaption>
      </figure>
      <div className="footerNav">
        {navLinks.map((nuvlink, index) => {
          const { url, label, subMenu } = nuvlink;
          return (
            <ul className="footerParentMenu" key={index}>
              <li className="footerParentList">
                <h3>
                  <Link to={url} className="footerParentItem">
                    {label}
                  </Link>
                </h3>
                {subMenu && (
                  <ul className="footerSubMenu">
                    {subMenu.map((subpath, index) => (
                      <li className="footerSubList" key={index}>
                        <Link to={subpath.url} className="footerSubItem">
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
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: black;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1.5rem 0.5rem;
  align-items: center;
  z-index: 999;
  color: white;
  padding: 5rem 0;
  .google-map-link {
    background-color: currentColor;
  }
  li {
    list-style: none;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid whitesmoke;
    }
  }
  .footerMap {
    height: auto;
    .footerMapInfo {
      font-size: 14px;
      address {
        margin-top: 10px;
      }
      .footerMapLogo {
      }
    }
  }
  .logo {
  }
  .footerFirstMapAddress {
  }
  .footerSecondaryMapAddress {
  }
  .footerNav {
    width: 800px;
    height: 270px;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
  }
  .footerParentMenu {
  }
  .footerParentList {
    h3 {
      line-height: 0.7;
      font-size: 1.5rem;
    }
  }
  .footerParentItem {
  }
  .footerSubMenu {
    font-size: 15px;
  }
  .footerSubList {
    margin-left: 10px;
  }
  .footerSubItem {
  }
  /* @media (max-width: 600px) {
    .footerParentMenu {
      width: auto;
      margin: 0 auto;
      padding: 0;
    }

    .footerParentMenu a {
      width: 100%;
      font-size: 1.5rem;
      text-decoration: none;
      color: black;
    }

    .footerParentMenu li {
      list-style: none;
      padding-left: 0;
    }
    ul .footerSubMenu li {
      padding: 0;
      width: fit-content;
    }

    .footerSubMenu a {
      text-decoration: none;
      color: black;
      font-size: 1rem;
    }

    .footerSubMenu {
      width: 100%;
      top: 40px;
      bottom: 0;
    }
  } */
`;

export default Footer;
