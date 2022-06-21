import React, { createRef, useEffect, useState } from 'react';
import { graphql, Link, navigate } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import AllProducts from '../../components/AllProducts';
import qs from 'qs';

import PathTree from '../../templates/path-tree';
// import { scrollToAnchor } from '../../util/scroll-to-anchor';
// import FilteredProduct from '../../util/productlist/filtered-product';

const SearchIndex = ({ data, location }) => {
  const [filters, setFilters] = useState([]);
  const [series, setSeries] = useState([]);
  const [materialFilters, setMaterialFilters] = useState([]);
  // const searchKinou = createRef();

  const updateFilters = filters => {
    setFilters([].concat(filters));
  };

  const updateSeries = series => {
    setSeries([].concat(series));
  };

  const updateMaterials = materials => {
    setMaterialFilters([].concat(materialFilters));
  };

  useEffect(() => {
    const { search = ``, pathname } = location;
    const queryString = qs.stringify({ filters });

    if (search && search.replace(/^\?/, ``) !== queryString) {
      navigate(`${pathname}?${queryString}`, { replace: true });
      return;
    }

    const { filters: incomingFilters } = qs.parse(search.replace(`?`, ``));
    if (incomingFilters && incomingFilters.length) {
      updateFilters(filters);
    }
    console.log('qs:', queryString);
    // console.log('incomingFilters:', incomingFilters);
    // console.log('updateFilters:', updateFilters(filters));
  }, [filters, location]);

  return (
    <Layout>
      <Seo title="Search" />
      <PathTree pathTree={location.pathname} />
      <AllProducts
        filters={filters}
        setFilters={updateFilters}
        data={data}
        series={series}
        setSeries={setSeries}
        materialFilters={materialFilters}
        setMaterialFilters={setMaterialFilters}
      />
      {/* <FilteredProduct
        filters={filters}
        setFilters={updateFilters}
        data={data}
      /> */}
    </Layout>
  );
};

export default SearchIndex;

export const query = graphql`
  query searchIndex {
    types: allMicrocmsProducts(sort: { fields: halfProduct, order: ASC }) {
      totalCount
      nodes {
        type {
          name
        }
        halfProduct
        feature
        application
        ionic
        material
        slug
        packing
        product
        id
        series {
          series
        }
        property
      }
      edges {
        node {
          id
          feature
          ionic
          material
          packing
          product
          slug
          property
          series {
            series
          }
          type {
            name
          }
          application
        }
      }
    }
    allMicrocmsProducts(sort: { fields: halfProduct, order: ASC }) {
      totalCount
      nodes {
        type {
          name
        }
        halfProduct
        feature
        application
        ionic
        material
        slug
        packing
        product
        series {
          series
        }
        property
        id
      }
      edges {
        node {
          id
          feature
          ionic
          material
          packing
          slug
          product
          property
          series {
            series
          }
          type {
            name
          }
          application
        }
      }
    }
  }
`;

// filter: { type: { elemMatch: { name: { in: "Types" } } } }
