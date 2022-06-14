import React, { createRef, useEffect, useState } from 'react';
import { graphql, Link, navigate } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/Seo';
import AllProducts from '../../components/AllProducts';
import qs from 'qs';

const Kinou = ({ data, location }) => {
  const [filters, setFilters] = useState([]);
  // const searchKinou = createRef();

  const updateFilters = filters => {
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

  return (
    <Layout>
      <Seo title="Kinou" />
      <AllProducts filters={filters} setFilters={updateFilters} data={data} />
    </Layout>
  );
};

export default Kinou;

export const query = graphql`
  query searchKinou {
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
        packing
        product
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
        packing
        product
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
