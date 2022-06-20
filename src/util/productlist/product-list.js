/** @jsx jsx */
import * as React from 'react';
// import { GoMarkGithub as GithubIcon } from 'react-icons/go';
// import { MdLaunch as LaunchSiteIcon } from 'react-icons/md';
import url from 'url';
// import { useTheme } from 'gatsby-interface';

// import {
//   showcaseList,
//   showcaseItem,
//   shortcutIcon,
//   meta,
// } from '../shared/styles';
// import ThumbnailLink from '../shared/thumbnail';
// import EmptyGridItems from '../shared/empty-grid-items';
import ProductItemCategories from './product-item-categories';

// import FeaturedSitesIcon from '../../assets/icons/featured-sites';
// import { visuallyHiddenCss } from '../../components/shared/styles/a11y';

const ProductList = ({
  items,
  count,
  filters,
  setFilters,
  onCategoryClick,
}) => {
  if (count) items = items.slice(0, count);

  const cleanUrl = mainUrl => {
    const parsed = url.parse(mainUrl);
    let path = parsed.pathname;
    if (path[path.length - 1] === `/`) path = path.slice(0, path.length - 1);
    return parsed.hostname + path;
  };
  return (
    <div /*sx={showcaseList}*/>
      {items.map(
        (
          node,
          index // have to filter out null fields from bad data
        ) => (
          <div key={index} /*sx={showcaseItem} */>
            <div>
              <strong className="title">{node.product}</strong>
            </div>
            <div
              // sx={{
              //   ...meta,
              //   display: `flex`,
              //   justifyContent: `space-between`,
              // }}
              className="meta"
            >
              <div /*sx={{ pr: 6 }}*/>
                <ProductItemCategories
                  categories={node.type}
                  onCategoryClick={onCategoryClick}
                />
              </div>
              <div /*css={{ flex: `0 0 auto`, textAlign: `right` }} */></div>
              {/* {node.type.find(category => category.name === `Featured`) && (
                <button
                  tag="button"
                  sx={{
                    '&&': {
                      display: `none`,
                      [theme.mediaQueries.desktop]: {
                        alignItems: `center`,
                        bg: `orange.60`,
                        border: `none`,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 1,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 1,
                        boxShadow: `none`,
                        color: `white`,
                        cursor: `pointer`,
                        display: `flex`,
                        fontSize: 2,
                        justifyContent: `center`,
                        height: 20,
                        margin: 0,
                        padding: 0,
                        position: `absolute`,
                        top: 0,
                        right: 0,
                        width: 20,
                        '&:hover, &:focus': {
                          bg: `gatsby`,
                        },
                        '& svg': {
                          display: `block`,
                        },
                      },
                    },
                  }}
                  onClick={() => setFilters(`Featured`)}
                  className="featured-site"
                >
                  <span sx={visuallyHiddenCss}>See featured sites</span>
                  <FeaturedSitesIcon />
                </button>
              )} */}
            </div>
          </div>
        )
      )}
      {items.length && (
        /*<EmptyGridItems styles={showcaseItem} /> */ <span>aaa</span>
      )}
    </div>
  );
};

export default ProductList;
