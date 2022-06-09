import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import SearchQuery from './SearchQuery';
import TagsList from './TagsList';

const query = graphql`
  {
    allMicrocmsProducts(sort: { fields: halfProduct, order: ASC }) {
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

const AllProducts = () => {
  const data = useStaticQuery(query);
  const products = data.allMicrocmsProducts.edges;
  return (
    <div>
      <TagsList products={products} />
      <SearchQuery products={products} />
    </div>
  );
};

export default AllProducts;
