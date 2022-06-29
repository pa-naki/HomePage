import React, { createRef, useEffect, useState } from 'react';
import { graphql, Link, navigate } from 'gatsby';
import styled from 'styled-components';
import qs from 'qs';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import AllProducts from '../../components/AllProducts';
import { CheckButton } from '../../templates/styles';
import PathTree from '../../templates/path-tree';
import { MdClose } from 'react-icons/md';
// import { scrollToAnchor } from '../../util/scroll-to-anchor';
// import FilteredProduct from '../../util/productlist/filtered-product';
import CheckArrayButton from '../../util/Check-array-button';

const SearchIndex = ({ data, location }) => {
  const [filters, setFilters] = useState([]);
  const [series, setSeries] = useState([]);
  const [materialFilters, setMaterialFilters] = useState([]);
  // const searchKinou = createRef();

  const updateFilters = (filters, setFunction) => {
    setFilters([].concat(filters));
  };

  // const updateSeries = series => {
  //   setSeries([].concat(series));
  // };

  // const updateMaterials = materials => {
  //   setMaterialFilters([].concat(materialFilters));
  // };

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
    // console.log('qs:', queryString);
    // console.log('incomingFilters:', incomingFilters);
    // console.log('updateFilters:', updateFilters(filters));
  }, [filters, location]);

  const [tableVisibleArray, setTableVisibleArray] = useState({
    typeVisible: true,
    featureVisible: true,
    propertyVisible: true,
    materialVisible: true,
    applicationVisible: true,
    ionicVisible: true,
    packingVisible: true,
    seriesVisible: true,
  });
  const [filterListVisible, setFilterListVisible] = useState(false);
  return (
    <Layout>
      <Seo title="Search" />
      <PathTree pathTree={location.pathname} />
      <Wrapper>
        <div className={`filter-nav ${filterListVisible ? 'active' : ''}`}>
          <CheckArrayButton
            setObject={tableVisibleArray}
            clickFunction={setTableVisibleArray}
          />
          <button
            onClick={() => {
              setFilterListVisible(!filterListVisible);
            }}
          >
            <MdClose />
          </button>
        </div>
        <button
          onClick={() => {
            setFilterListVisible(!filterListVisible);
          }}
        >
          open
        </button>
        <AllProducts
          filters={filters}
          setFilters={updateFilters}
          data={data}
          series={series}
          setSeries={setSeries}
          materialFilters={materialFilters}
          setMaterialFilters={setMaterialFilters}
          tableVisibleArray={tableVisibleArray}
        />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
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
`;

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
