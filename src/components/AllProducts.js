import React from 'react';
import styled from 'styled-components';
import SearchQuery from './SearchQuery';
import TagsList from './TagsList';
import Fuse from 'fuse.js';
import AggregatedCategory from '../util/Aggregated-category';
import { filterByAllCategories } from '../util/filter-by-category';
import AllTagsList from './AllTagsList';
import { MdClose } from 'react-icons/md';
import { CheckButton } from '../templates/styles';
import CheckArrayButton from '../util/Check-array-button';

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
  allFilters,
  setAllFilters,
  tableVisibleArray,
  setTableVisibleArray,
  filterListVisible,
  setFilterListVisible,
}) => {
  const [search, setSearch] = React.useState(``);
  const [sitesToShow, setSitesToShow] = React.useState(DEFAULT_SITES_TO_SHOW);
  const fuse = new Fuse(data.allMicrocmsProducts.nodes, defaultOptions);

  const propertyFilters = allFilters.propertyFilters;
  const applicationFilters = allFilters.applicationFilters;
  const ionicFilters = allFilters.ionicFilters;
  const packingFilters = allFilters.packingFilters;

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

  if (propertyFilters && propertyFilters.length > 0) {
    items = filterByAllCategories(items, propertyFilters, 'property');
  }
  if (applicationFilters && applicationFilters.length > 0) {
    items = filterByAllCategories(items, applicationFilters, 'application');
  }
  if (ionicFilters && ionicFilters.length > 0) {
    items = filterByAllCategories(items, ionicFilters, 'ionic');
  }
  if (packingFilters && packingFilters.length > 0) {
    items = filterByAllCategories(items, packingFilters, 'packing');
  }

  const aggregatedTypes = AggregatedCategory(items, 'type', 'name');
  const aggregatedSeries = AggregatedCategory(items, 'series', '', 'series');
  const aggregatedMaterials = AggregatedCategory(items, 'material', '');
  const aggregatedProperty = AggregatedCategory(items, 'property');
  const aggregatedApplication = AggregatedCategory(items, 'application');
  const aggregatedIonic = AggregatedCategory(items, 'ionic');
  const aggregatedPacking = AggregatedCategory(items, 'packing');
  // get sorted set of categories to generate list with

  const products = data.types.edges;
  return (
    <Wrapper>
      <div className="productSection">
        <div className={`filter-nav ${filterListVisible ? 'active' : ''}`}>
          <div>
            <CheckArrayButton
              setObject={tableVisibleArray}
              clickFunction={setTableVisibleArray}
            />
            <button
              onClick={() => {
                setFilterListVisible(false);
              }}
            >
              <MdClose />
            </button>
          </div>
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
            <AllTagsList
              count={sitesToShow}
              categoryFilters={propertyFilters}
              categoryFiltersName={'propertyFilters'}
              setCategoryFilters={setAllFilters}
              aggregatedAllCategory={aggregatedProperty}
            />
            <AllTagsList
              count={sitesToShow}
              categoryFilters={applicationFilters}
              categoryFiltersName={'applicationFilters'}
              setCategoryFilters={setAllFilters}
              aggregatedAllCategory={aggregatedApplication}
            />
            <AllTagsList
              count={sitesToShow}
              categoryFilters={ionicFilters}
              categoryFiltersName={'ionicFilters'}
              setCategoryFilters={setAllFilters}
              aggregatedAllCategory={aggregatedIonic}
            />
            <AllTagsList
              count={sitesToShow}
              categoryFilters={packingFilters}
              categoryFiltersName={'packingFilters'}
              setCategoryFilters={setAllFilters}
              aggregatedAllCategory={aggregatedPacking}
            />
          </div>
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
    .filter-nav {
      position: fixed;
      background-color: #dfdfdf;
      width: 100%;
      height: 50vh;
      bottom: -120%;
      left: 0;
      z-index: 999;
      transition: all 0.6s;
    }
    .active {
      bottom: 0;
    }
    .tagAside {
      display: flex;
    }
  }
`;

export default AllProducts;
