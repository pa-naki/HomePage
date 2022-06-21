import React, { useState } from 'react';
import styled from 'styled-components';
import SearchQuery from './SearchQuery';
import TagsList from './TagsList';
import Fuse from 'fuse.js';
import SeriesList from './SeriesList';
import MaterialsList from './MaterialsList';

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
export const filterBySeries = (list, seriesCategory) => {
  const items = list.reduce((aggregated, node) => {
    if (node.series) {
      const nodeSeries = node.series.series.map(obj => obj);
      const filteredSeries = nodeSeries.filter(c => seriesCategory.includes(c));
      if (filteredSeries.length === seriesCategory.length) {
        aggregated.push(node);
      }

      return aggregated;
    }

    return aggregated;
  }, []);

  return items;
};
export const filterByMaterials = (list, materialsCategory) => {
  const items = list.reduce((aggregated, node) => {
    if (node.material) {
      const nodeMaterials = node.material.map(obj => obj);
      const filteredMaterials = nodeMaterials.filter(c =>
        materialsCategory.includes(c)
      );
      if (filteredMaterials.length === materialsCategory.length) {
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
const AllProducts = ({
  data,
  filters,
  setFilters,
  series,
  setSeries,
  materialFilters,
  setMaterialFilters,
}) => {
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

  if (series && series.length > 0) {
    items = filterBySeries(items, series);
  }

  if (materialFilters && materialFilters.length > 0) {
    items = filterByMaterials(items, materialFilters);
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

  const aggregatedSeries = items.reduce((result, node) => {
    // extract list of Series for node
    // items: [{"name": "App"}, {"name": "E-commerce"}]
    // nodeSeries: ["App", "E-commerce"]
    const nodeSeries = node.series.series.map(obj => obj);
    // detect if site is open source by checking sourceUrl

    nodeSeries.forEach(series => {
      // if we already have the series recorded, increase count
      if (result[series]) {
        result[series] = result[series] + 1;
      } else {
        // record first encounter of series
        result[series] = 1;
      }
    });

    // sort Series so they appear in alphabetical order on page
    node.series.series.sort((obj1, obj2) =>
      obj1.toLowerCase().localeCompare(obj2.toLowerCase())
    );

    return result;
  }, {});

  const aggregatedMaterials = items.reduce((result, node) => {
    // extract list of Materials for node
    // items: [{"name": "App"}, {"name": "E-commerce"}]
    // nodeMaterials: ["App", "E-commerce"]
    const nodeMaterials = node.material.map(obj => obj);
    // detect if site is open source by checking sourceUrl

    nodeMaterials.forEach(material => {
      // if we already have the material recorded, increase count
      if (result[material]) {
        result[material] = result[material] + 1;
      } else {
        // record first encounter of material
        result[material] = 1;
      }
    });

    // sort Materials so they appear in alphabetical order on page
    node.material.sort((obj1, obj2) =>
      obj1.toLowerCase().localeCompare(obj2.toLowerCase())
    );

    return result;
  }, {});

  // get sorted set of categories to generate list with
  const categoryKeys = Object.keys(aggregatedCategories).sort((str1, str2) =>
    str1.toLowerCase().localeCompare(str2.toLowerCase())
  );

  const seriesKeys = Object.keys(aggregatedSeries).sort((str1, str2) =>
    str1.toLowerCase().localeCompare(str2.toLowerCase())
  );

  const materialsKeys = Object.keys(aggregatedMaterials).sort((str1, str2) =>
    str1.toLowerCase().localeCompare(str2.toLowerCase())
  );

  console.log('items', items);
  const products = data.types.edges;
  return (
    <Wrapper>
      <div className="productSection">
        <div className="tagAside">
          <TagsList
            count={sitesToShow}
            filters={filters}
            setFilters={setFilters}
            aggregatedCategories={aggregatedCategories}
            categoryKeys={categoryKeys}
          />
          <SeriesList
            count={sitesToShow}
            series={series}
            setSeries={setSeries}
            aggregatedSeries={aggregatedSeries}
            seriesKeys={seriesKeys}
          />
          <MaterialsList
            materialFilters={materialFilters}
            setMaterialFilters={setMaterialFilters}
            aggregatedMaterials={aggregatedMaterials}
            materialsKeys={materialsKeys}
          />
        </div>
        <SearchQuery products={products} items={items} />
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
