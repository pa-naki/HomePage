/** @jsx jsx */
import { Fragment } from 'react';
import { Link } from 'gatsby';
import qs from 'qs';

const ProductItemCategories = ({ categories, onCategoryClick }) => {
  if (!categories || categories.length === 0) {
    return '';
  }

  return categories.map((category, index) => (
    <Fragment key={index}>
      <Link
        // sx={{
        //   '&&': {
        //     color: theme => theme.colors.text.secondary,
        //     fontWeight: `body`,
        //     textDecoration: `none`,
        //     borderBottom: `none`,
        //     '&:hover': {
        //       color: `purple.60`,
        //     },
        //   },
        // }}
        to={`/showcase/?${qs.stringify({
          filters: [category.name],
        })}`}
        onClick={e => {
          e.preventDefault();
          if (onCategoryClick) {
            onCategoryClick(category.name);
          }
        }}
        category={category.name}
      >
        {category.name}
      </Link>
      {index === categories.length - 1 ? `` : `, `}
    </Fragment>
  ));
};

export default ProductItemCategories;
