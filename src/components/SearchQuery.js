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
              <ProductCard
                product={product}
                oneProduct={oneProduct}
                key={id}
                typeName={typeName}
                slug={slug}
                tableVisibleArray={tableVisibleArray}
              />
            );
          }
          return (
            <ProductCard
              product={product}
              oneProduct={oneProduct}
              typeName={typeName}
              key={id}
              slug={slug}
              tableVisibleArray={tableVisibleArray}
            />
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
  }
`;

export default SearchQuery;
