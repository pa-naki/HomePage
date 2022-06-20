import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TableTree = ({ colLength, col1, col2, col3, col4 }) => {
  if (colLength === 2) {
    return (
      <tr>
        <td>{col1}</td>
        <th colSpan={3}>{col2}</th>
      </tr>
    );
  }
  return (
    <tr>
      <td>{col1}</td>
      <th>{col2}</th>
      <td>{col3}</td>
      <th>{col4}</th>
    </tr>
  );
};

const ProductCard = ({
  product,
  series,
  feature,
  property,
  application,
  ionic,
  packing,
  type,
}) => {
  return (
    <Wrapper>
      <tbody>
        <TableTree colLength={2} col1="製品名" col2={product} />
        <TableTree colLength={2} col1="機能" col2={type} />
        <TableTree colLength={2} col1="特徴" col2={feature} />
        <TableTree colLength={2} col1="性状" col2={property} />
        <TableTree colLength={2} col1="素材･用途" col2={application} />
        <TableTree colLength={2} col1="イオン性" col2={ionic} />
        <TableTree colLength={2} col1="荷姿" col2={packing} />
      </tbody>
    </Wrapper>
  );
};

const Wrapper = styled.table`
  width: 30%;
  font-size: 12px;
  border: 1px solid black;
  border-collapse: collapse;
  &:not(:nth-child(3n-2)) {
    margin: 5px auto;
  }
  margin: 5px auto 5px 0;
  .table {
    border: 1px solid black;
  }
  tbody {
  }
  td {
    border: 1px solid black;
    white-space: nowrap;
    text-align: center;
  }
  th {
    border: 1px solid black;
  }
`;

ProductCard.propTypes = {
  product: propTypes.string,
};

export default ProductCard;
