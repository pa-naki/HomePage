import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
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
        <div className="demo">
          <ul className="demo2">
            <li><Link to="">製品検索</Link></li>
            <li><Link to="">注目の製品はこちら</Link></li>
            <li><Link to="">研究開発</Link></li>
            <li><Link to="">評価技術センター</Link></li>
            <li><Link to="">会社案内</Link></li>
            <li><Link to="">採用情報</Link></li>
            <li><Link to="">お問い合わせ</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
