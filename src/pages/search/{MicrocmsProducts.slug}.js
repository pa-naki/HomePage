import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import PathTree from '../../templates/path-tree';
import DisplayTemplate from '../../templates/display-template';
import { HeddingSection } from '../../templates/styles';

import productArray from '../../util/productArray';
import styled from 'styled-components';
import Seo from '../../components/Seo';
const ProductsTemplate = ({ location, data }) => {
  const {
    application,
    attention,
    feature,
    ionic,
    material,
    packing,
    product,
    property,
    series,
    type,
  } = data.microcmsProducts;
  const typeJoin = type.map(value => value.name);
  const productItems = data.microcmsProducts;
  const productKeys = Object.keys(productItems);
  const dataListName = productKeys.reduce((target, key, index) => {
    target[key] = productArray[key];
    return target;
  }, {});
  return (
    <Layout>
      <Seo title={product} />
      <PathTree pathTree={location.pathname} />
      <DisplayTemplate>
        <HeddingSection
          heddingTitle={product}
          heddingWidth="100%"
          HeddingTag="h1"
        >
          <Wrapper>
            <table>
              <tbody>
                <tr>
                  <th>
                    <h3 className="japaneseName">
                      {dataListName['application']}:{' '}
                    </h3>
                  </th>
                  <td>
                    <span>{application}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3 className="japaneseName">
                      {dataListName['attention']}:{' '}
                    </h3>
                  </th>
                  <td>
                    <span>{attention}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3 className="japaneseName">
                      {dataListName['feature']}:{' '}
                    </h3>
                  </th>
                  <td>
                    <span>{feature}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3 className="japaneseName">{dataListName['ionic']}: </h3>
                  </th>
                  <td>
                    <span>{ionic}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3 className="japaneseName">
                      {dataListName['material']}:{' '}
                    </h3>
                  </th>
                  <td>
                    <span>{material.join(' ')}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3 className="japaneseName">
                      {dataListName['packing']}:{' '}
                    </h3>
                  </th>
                  <td>
                    <span>{packing}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3 className="japaneseName">
                      {dataListName['product']}:{' '}
                    </h3>
                  </th>
                  <td>
                    <span>{product}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3 className="japaneseName">
                      {dataListName['property']}:{' '}
                    </h3>
                  </th>
                  <td>
                    <span>{property}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3 className="japaneseName">{dataListName['series']}: </h3>
                  </th>
                  <td>
                    <span>{series.series[0]}</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h3 className="japaneseName">{dataListName['type']}: </h3>
                  </th>
                  <td>
                    <span>{typeJoin.join(' ')}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>
        </HeddingSection>
      </DisplayTemplate>
    </Layout>
  );
};

const Wrapper = styled.section`
  .japaneseName {
    display: inline-block;
    width: 15rem;
    text-align: right;
  }
  span {
    font-size: 1.25rem;
  }
  th,
  td {
    padding: 15px;
  }
`;

export default ProductsTemplate;

export const query = graphql`
  query productQuery($slug: String!) {
    microcmsProducts(slug: { eq: $slug }) {
      application
      attention
      feature
      ionic
      material
      packing
      product
      property
      slug
      series {
        series
      }
      type {
        name
      }
    }
  }
`;
