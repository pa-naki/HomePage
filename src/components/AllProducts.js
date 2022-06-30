import React from 'react';
import styled from 'styled-components';
import SearchQuery from './SearchQuery';
import TagsList from './TagsList';
import Fuse from 'fuse.js';
import AggregatedCategory from '../util/Aggregated-category';
import { filterByAllCategories } from '../util/filter-by-category';

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
const AllProducts = ({
  data,
  filters,
  setFilters,
  series,
  setSeries,
  materialFilters,
  setMaterialFilters,
  tableVisibleArray,
}) => {
  const [search, setSearch] = React.useState(``);
  const [sitesToShow, setSitesToShow] = React.useState(DEFAULT_SITES_TO_SHOW);
  const fuse = new Fuse(data.allMicrocmsProducts.nodes, defaultOptions);

  let items = data.allMicrocmsProducts.nodes;

  if (search.length > 0) {
    items = fuse.search(search);
  }

  if (filters && filters.length > 0) {
    items = filterByAllCategories(items, filters, 'type', 'name');
  }

  if (series && series.length > 0) {
    items = filterByAllCategories(items, series, 'series', '', 'series');
  }

  if (materialFilters && materialFilters.length > 0) {
    items = filterByAllCategories(items, materialFilters, 'material');
  }

  const aggregatedTypes = AggregatedCategory(items, 'type', 'name');
  const aggregatedSeries = AggregatedCategory(items, 'series', '', 'series');
  const aggregatedMaterials = AggregatedCategory(items, 'material', '');
  // get sorted set of categories to generate list with

  const products = data.types.edges;
  return (
    <Wrapper>
      <div className="productSection">
        <div className="tagAside">
          <TagsList
            count={sitesToShow}
            categoryFilters={filters}
            setCategoryFilters={setFilters}
            aggregatedAllCategory={aggregatedTypes}
          />
          <TagsList
            count={sitesToShow}
            categoryFilters={series}
            setCategoryFilters={setSeries}
            aggregatedAllCategory={aggregatedSeries}
          />
          <TagsList
            count={sitesToShow}
            categoryFilters={materialFilters}
            setCategoryFilters={setMaterialFilters}
            aggregatedAllCategory={aggregatedMaterials}
          />
        </div>
        <SearchQuery
          products={products}
          items={items}
          tableVisibleArray={tableVisibleArray}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .productSection {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    .tagAside {
      display: flex;
      width: 30%;
    }
  }
`;

export default AllProducts;
