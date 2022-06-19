import React, { useState } from 'react';
import styled from 'styled-components';
import SearchQuery from './SearchQuery';
import TagsList from './TagsList';
import Fuse from 'fuse.js';

const AllProducts = ({ data, filters, setFilters }) => {
  const defaultOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      `feature`,
      `material`,
      `ionic`,
      `packing`,
      `product`,
      `property`,
      `series.series`,
      `type.name`,
      `application`,
      `halfProduct`,
    ],
  };
  const [search, setSearch] = useState(``);
  const [sitesToShow, setSitesToShow] = useState(12);
  const fuse = new Fuse(data.types.nodes, defaultOptions);

  let items = data.types.nodes;

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
      />
      <SearchQuery products={products} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export default AllProducts;
