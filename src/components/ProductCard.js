import { Link } from 'gatsby';
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
  slug,
  packing,
  type,
  material,
}) => {
  return (
    <Wrapper>
      <Link to={`/search/${slug}/`}>
        <table>
          <tbody>
            <TableTree colLength={2} col1="製品名" col2={product} />
            <TableTree colLength={2} col1="機能" col2={type} />
            <TableTree colLength={2} col1="特徴" col2={feature} />
            <TableTree colLength={2} col1="性状" col2={property} />
            <TableTree colLength={2} col1="素材･用途" col2={application} />
            <TableTree colLength={2} col1="イオン性" col2={ionic} />
            <TableTree colLength={2} col1="荷姿" col2={packing} />
            <TableTree colLength={2} col1="素材" col2={material} />
          </tbody>
        </table>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 30%;
  min-width: 30%;
  &:not(:nth-child(3n-2)) {
    margin: 2rem auto;
  }
  margin: 2rem auto 2rem 0;
  a {
    text-decoration: none;
    color: black;
    height: auto;
    &:hover {
      tbody {
        opacity: 0.7;
        background-color: whitesmoke;
      }
    }
  }
  table {
    height: auto;
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
`;

ProductCard.propTypes = {
  product: propTypes.string,
};

export default ProductCard;
