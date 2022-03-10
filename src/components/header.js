import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const linkModel = [
    { value: "/search", name: "製品検索", className: "daiwaSearch"},
    { value: "/details", name: "注目の製品", className: "daiwaDetails"},
    { value: "/research", name: "研究開発", className: "daiwaResearch"},
    { value: "/about", name: "評価技術センター", className: "daiwaAbout"},
    { value: "/company", name: "会社案内", className: "daiwaCompany"},
    { value: "/recruit", name: "採用情報", className: "daiwaRecruit"},
    { value: "/contact", name: "お問い合わせ", className: "daiwaContact"},
  ];
  return (
    <>
      <header>
        <div>
          {/* <img src="" alt="" /> */}
          <div>
            {/* English対応 */}
            {/* サイト内検索対応 */}
          </div>
        </div>
        <nav>
            <ul className="demo2">
              <li><Link to="/search">製品検索</Link></li>
              <li><Link to="/details">注目の製品はこちら</Link></li>
              <li><Link to="/research">研究開発</Link></li>
              <li><Link to="/about">評価技術センター</Link></li>
              <li><Link to="/company">会社案内</Link></li>
              <li><Link to="/recruit">採用情報</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
            </ul>
        </nav>
      </header>
    </>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
