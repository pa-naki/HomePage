import React, { useState } from 'react';
import styled from 'styled-components';
import SearchQuery from './SearchQuery';
import TagsList from './TagsList';
import Fuse from 'fuse.js';

export const filterByCategories = (list, categories) => {
  const items = list.reduce((aggregated, node) => {
    if (node.type) {
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
const DEFAULT_SITES_TO_SHOW = 6;
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
const AllProducts = ({ data, filters, setFilters }) => {
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

  console.log('items', items);
  const products = data.types.edges;
  return (
    <Wrapper>
      <TagsList
        products={products}
        items={items}
        count={sitesToShow}
        filters={filters}
        setFilters={setFilters}
        onCategoryClick={c => setFilters(c)}
        aggregatedCategories={aggregatedCategories}
        categoryKeys={categoryKeys}
      />
      <SearchQuery products={products} items={items} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export default AllProducts;
