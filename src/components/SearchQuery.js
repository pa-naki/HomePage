import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

let typeName = [];
const SearchQuery = ({ products = [], items }) => {
  return (
    <Wrapper>
      <div>
        {/* {products.map((oneProduct, index) => { */}
        {items.map((oneProduct, index) => {
          const {
            id,
            feature,
            ionic,
            material,
            packing,
            product,
            property,
            application,
          } = oneProduct;
          const { series } = oneProduct.series;
          const typeLength = oneProduct.type.length;
          typeName = [];
          if (typeLength > 1) {
            oneProduct.type.map(productType => {
              typeName.push(productType.name);
            });
            return (
              <ProductCard
                product={product}
                series={series}
                type={typeName.join(' ')}
                feature={feature}
                property={property}
                application={application}
                ionic={ionic}
                packing={packing}
                key={index}
              />
            );
          }
          return (
            <ProductCard
              product={product}
              series={series}
              type={oneProduct.type[0].name}
              feature={feature}
              property={property}
              application={application}
              ionic={ionic}
              packing={packing}
              key={index}
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
  width: 80%;
  div {
    display: flex;
    flex-flow: row wrap;
  }
`;

export default SearchQuery;
