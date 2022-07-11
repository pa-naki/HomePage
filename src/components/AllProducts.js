import React from 'react';
import styled from 'styled-components';
import SearchQuery from './SearchQuery';
import Fuse from 'fuse.js';
import AggregatedCategory from '../util/Aggregated-category';
import { filterByAllCategories } from '../util/filter-by-category';
import AllTagsList from './AllTagsList';
import { MdClose } from 'react-icons/md';
import CheckArrayButton from './share/Check-array-button';

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

  const {
    typeFilters,
    seriesFilters,
    materialFilters,
    propertyFilters,
    applicationFilters,
    ionicFilters,
    packingFilters,
    attentionFilters,
  } = allFilters;

  let items = data.allMicrocmsProducts.nodes;

  if (search.length > 0) {
    items = fuse.search(search);
  }

  if (typeFilters && typeFilters.length > 0) {
    items = filterByAllCategories(items, typeFilters, 'type', 'name');
  }

  if (seriesFilters && seriesFilters.length > 0) {
    items = filterByAllCategories(items, seriesFilters, 'series', '', 'series');
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
  if (attentionFilters) {
    items = items.filter(v => Boolean(v.attention));
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
        <aside className={`filter-nav ${filterListVisible ? 'active' : ''}`}>
          <span>
            各チェックを選択することでテーブルの列数を変更することが出来ます
          </span>
          <div className="visibleList">
            <CheckArrayButton
              setObject={tableVisibleArray}
              clickFunction={setTableVisibleArray}
              className={'check-array-button'}
            />
            <div className={filterListVisible ? 'filter-close-button' : 'none'}>
              <button
                onClick={() => {
                  setFilterListVisible(false);
                }}
              >
                <MdClose />
              </button>
            </div>
          </div>
          <div className="tagAside">
            <AllTagsList
              count={sitesToShow}
              categoryFilters={typeFilters}
              categoryFiltersName={'typeFilters'}
              setCategoryFilters={setAllFilters}
              aggregatedAllCategory={aggregatedTypes}
            />
            <AllTagsList
              count={sitesToShow}
              categoryFilters={seriesFilters}
              categoryFiltersName={'seriesFilters'}
              setCategoryFilters={setAllFilters}
              aggregatedAllCategory={aggregatedSeries}
            />
            <AllTagsList
              count={sitesToShow}
              categoryFilters={materialFilters}
              categoryFiltersName={'materialFilters'}
              setCategoryFilters={setAllFilters}
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
            <label className="attention-checkbox">
              <input
                type="checkbox"
                onClick={() => {
                  setAllFilters(prevstate => ({
                    ...prevstate,
                    attentionFilters: !allFilters['attentionFilters'],
                  }));
                }}
              />
              注目の製品
            </label>
          </div>
        </aside>
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
  display: flex;
  flex-direction: column;
  .productSection {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    .filter-nav {
      position: fixed;
      background-color: #def9e7;
      width: 100%;
      height: 40vh;
      bottom: -120%;
      left: 0;
      z-index: 999;
      transition: all 0.6s;
      overflow-x: auto !important;
      .visibleList {
        display: flex;
        min-width: 725px;
        flex-flow: row wrap;
        .check-array-button {
          flex: 1 0 130px;
          font-size: 1.3rem;
          margin: auto;
        }
        .filter-close-button {
          position: fixed;
          right: 0;
          top: 50%;
          text-align: right;
          button {
            height: 72px;
            font-size: 4rem;
            box-sizing: border-box;
            svg {
              display: block;
            }
          }
        }
        .none {
          display: none;
          opacity: 0;
        }
      }
    }
    .active {
      bottom: 0;
    }
    .tagAside {
      display: flex;
      min-width: 725px;
      height: auto;
      .attention-checkbox {
        position: absolute;
        left: 50%;
      }
    }
  }
`;

export default AllProducts;
