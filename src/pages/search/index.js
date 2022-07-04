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
  const [allFilters, setAllFilters] = useState({
    propertyFilters: [],
    applicationFilters: [],
    ionicFilters: [],
    packingFilters: [],
    attentionFilters: false,
  });
  // const [featureFilters, setFeatureFilters] = useState([]);
  // const [propertyFilters, setPropertyFilters] = useState([]);
  // const [applicationFilters, setApplicationFilters] = useState([]);
  // const [ionicFilters, setIonicFilters] = useState([]);
  // const [packingFilters, setPackingFilters] = useState([]);

  const updateFilters = (filters, setFunction) => {
    setFilters([].concat(filters));
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
    attentionVisible: true,
  });
  const [filterListVisible, setFilterListVisible] = useState(false);
  return (
    <Layout>
      <Seo title="Search" />
      <PathTree pathTree={location.pathname} />
      <Wrapper>
        <div className="absoluteBottom">
          <button
            onClick={() => {
              setFilterListVisible(!filterListVisible);
            }}
          >
            検索はこちら
          </button>
        </div>
        <AllProducts
          filters={filters}
          setFilters={updateFilters}
          data={data}
          series={series}
          setSeries={setSeries}
          materialFilters={materialFilters}
          setMaterialFilters={setMaterialFilters}
          allFilters={allFilters}
          setAllFilters={setAllFilters}
          tableVisibleArray={tableVisibleArray}
          setTableVisibleArray={setTableVisibleArray}
          filterListVisible={filterListVisible}
          setFilterListVisible={setFilterListVisible}
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
    z-index: 900;
    transition: all 0.6s;
    overflow: scroll;
  }
  .active {
    bottom: 0;
  }
  .absoluteBottom {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 900;
    button {
      border-radius: 50%;
      padding: 30px;
      font-size: 3rem;
      cursor: zoom-in;
    }
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
        attention
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
          attention
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
        attention
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
          attention
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
