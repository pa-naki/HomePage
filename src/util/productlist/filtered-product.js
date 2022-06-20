/** @jsx jsx */
import * as React from 'react';
// import { MdArrowDownward } from 'react-icons/md';
// import { Button } from 'gatsby-interface';
import Fuse from 'fuse.js';

// import { loadMoreButton } from '../shared/styles';
import ProductList from './product-list';
import Filters from './filters';
// import SearchIcon from '../../components/search-icon';
import {
  ContentHeader,
  ContentTitle,
  ContentContainer,
} from '../shared/sidebar';
// import { themedInput } from '../../utils/styles/org';
// import { visuallyHiddenCss } from '../../components/shared/styles/a11y';

export const filterByCategories = (list, categories) => {
  const items = list.reduce((aggregated, node) => {
    if (node.categories) {
      const nodeCategories = node.type.map(obj => obj.name);
      const filteredCategories = nodeCategories.filter(c =>
        categories.includes(c)
      );
      if (filteredCategories.length === categories.length) {
        aggregated.push(node);
      }

      return aggregated;
    }

    return aggregated;
  }, []);

  return items;
};
const DEFAULT_SITES_TO_SHOW = 12;
const defaultOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    `halfProduct`,
    `feature`,
    `application`,
    `ionic`,
    `material`,
    `packing`,
    `product`,
    `property`,
    // `type.name`,
    // `series.series`
  ],
};
const FilteredProduct = ({ data, filters, setFilters }) => {
  const [search, setSearch] = React.useState(``);
  const [sitesToShow, setSitesToShow] = React.useState(DEFAULT_SITES_TO_SHOW);
  const fuse = new Fuse(data.allMicrocmsProducts.nodes, defaultOptions);

  let items = data.allMicrocmsProducts.nodes;

  if (search.length > 0) {
    items = fuse.search(search);
  }

  if (filters && filters.length > 0) {
    items = filterByCategories(items, filters);
  }

  const aggregatedCategories = items.reduce((result, node) => {
    // extract list of categories for node
    // items: [{"name": "App"}, {"name": "E-commerce"}]
    // nodeCategories: ["App", "E-commerce"]
    const nodeCategories = node.type.map(obj => obj.name);
    // detect if site is open source by checking sourceUrl

    nodeCategories.forEach(category => {
      // if we already have the category recorded, increase count
      if (result[category]) {
        result[category] = result[category] + 1;
      } else {
        // record first encounter of category
        result[category] = 1;
      }
    });

    // sort categories so they appear in alphabetical order on page
    node.type.sort((obj1, obj2) =>
      obj1.name.toLowerCase().localeCompare(obj2.name.toLowerCase())
    );

    return result;
  }, {});

  // get sorted set of categories to generate list with
  const categoryKeys = Object.keys(aggregatedCategories).sort((str1, str2) =>
    str1.toLowerCase().localeCompare(str2.toLowerCase())
  );

  return (
    <section style={{ display: `flex` }}>
      <Filters
        setFilters={setFilters}
        filters={filters}
        categoryKeys={categoryKeys}
        aggregatedCategories={aggregatedCategories}
      />
      <ContentContainer>
        <ContentHeader>
          <ContentTitle
            search={search}
            filters={filters}
            label="Site"
            items={items}
            nodes={data.allMicrocmsProducts.nodes}
          />
          <div>
            <label>
              <input
                type="search"
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Search sites"
                aria-label="Search sites"
              />
              {/* <span sx={visuallyHiddenCss}>Search sites</span> */}
              {/* <SearchIcon /> */}
            </label>
          </div>
        </ContentHeader>

        <ProductList
          items={items}
          count={sitesToShow}
          filters={filters}
          setFilters={setFilters}
          onCategoryClick={c => setFilters(c)}
        />
        {sitesToShow < items.length && (
          <button
            // size="L"
            // sx={loadMoreButton}
            onClick={() => {
              setSitesToShow(sitesToShow + 15);
            }}
            // rightIcon={<MdArrowDownward />}
          >
            Load More
          </button>
        )}
      </ContentContainer>
    </section>
  );
};

export default FilteredProduct;
