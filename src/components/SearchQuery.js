import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

let typeName = [];
const SearchQuery = ({ items, tableVisibleArray }) => {
  return (
    <Wrapper>
      <div>
        {/* {products.map((oneProduct, index) => { */}
        {items.map(oneProduct => {
          const { id, product, slug } = oneProduct;
          const typeLength = oneProduct.type.length;
          typeName = [];
          if (typeLength > 1) {
            oneProduct.type.map(productType => {
              typeName.push(productType.name);
            });
            return (
              <React.Fragment key={id}>
                <ProductCard
                  product={product}
                  oneProduct={oneProduct}
                  typeName={typeName}
                  slug={slug}
                  tableVisibleArray={tableVisibleArray}
                  className={'product'}
                />
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={id}>
              <ProductCard
                product={product}
                oneProduct={oneProduct}
                typeName={typeName}
                slug={slug}
                tableVisibleArray={tableVisibleArray}
                className={'product'}
              />
            </React.Fragment>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  justify-content: right;
  width: 100%;
  div {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    .product {
      flex: 0 1 460px;
      margin: 2rem auto;
      text-decoration: none;
      color: black;
      height: auto;
      width: 100%;
      &:hover {
        tbody {
          opacity: 0.7;
          background-color: whitesmoke;
        }
      }
      table {
        height: 100%;
        width: 100%;
        font-size: 12px;
        border: 1px solid black;
        border-collapse: collapse;
        td {
          border: 1px solid black;
          white-space: nowrap;
          text-align: center;
        }
        th {
          border: 1px solid black;
        }
      }
    }
  }
`;

export default SearchQuery;
