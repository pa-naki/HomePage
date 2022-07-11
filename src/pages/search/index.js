import React, { useRef, useEffect, useState } from 'react';
import { graphql, Link, navigate } from 'gatsby';
import qs from 'qs';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import AllProducts from '../../components/AllProducts';
import PathTree from '../../templates/path-tree';
import Sticky from '../../styles/sticky.styled';

const SearchIndex = ({ data, location }) => {
  const [filters, setFilters] = useState([]);
  const [navPositionTop, setNavPositionTop] = useState(null);
  const [allFilters, setAllFilters] = useState({
    typeFilters: [],
    seriesFilters: [],
    materialFilters: [],
    propertyFilters: [],
    applicationFilters: [],
    ionicFilters: [],
    packingFilters: [],
    attentionFilters: false,
  });
  // const getScrollPosition = id => {
  //   const rect = document.getElementById(id).getBoundingClientRect();
  //   const top = Math.round(rect.top);
  //   const bottom = Math.round(rect.bottom);
  //   setNavPositionTop(top);
  //   console.log('rect', rect);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     getScrollPosition('nav-wrapper', navRef);
  //   });
  // }, []);
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
      <div
        style={{
          border: `3px solid black`,
          display: `flex`,
          flexDirection: `column`,
          height: `80%`,
        }}
      >
        <AllProducts
          filters={filters}
          setFilters={updateFilters}
          data={data}
          allFilters={allFilters}
          setAllFilters={setAllFilters}
          tableVisibleArray={tableVisibleArray}
          setTableVisibleArray={setTableVisibleArray}
          filterListVisible={filterListVisible}
          setFilterListVisible={setFilterListVisible}
        />
        {/* <Sticky id="nav-wrapper" ref={navRef} navPositionTop={navPositionTop}> */}
        <Sticky navPositionTop={navPositionTop}>
          <button
            onClick={() => {
              setFilterListVisible(!filterListVisible);
            }}
            style={{
              background: `#def9e7`,
            }}
          >
            検索はこちら
          </button>
        </Sticky>
      </div>
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
