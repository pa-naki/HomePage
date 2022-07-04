import { Link } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import keyReturn from '../util/keyReturn';
import { FiAward } from 'react-icons/fi';

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
  oneProduct,
  typeName,
  slug,
  tableVisibleArray,
  className,
}) => {
  const setTableArray = keyReturn(tableVisibleArray);
  let attentionTorF;
  return (
    <Link to={`/search/${slug}/`} className={className}>
      <table style={{ position: 'relative' }}>
        <tbody>
          <TableTree colLength={2} col1="製品名" col2={product} />
          {setTableArray.map((TableRow, index) => {
            const setKey = TableRow.key;
            const substringKey = setKey.substring(0, setKey.length - 7);
            const setFeature = v => {
              switch (substringKey) {
                case 'material':
                  return v.join(' ');
                case 'application':
                  return v.join(' ');
                case 'ionic':
                  return v.join(' ');
                case 'packing':
                  return v.join(' ');
                case 'attention':
                  attentionTorF = v;
                  return;
                case 'series':
                  return v.series;
                case 'type':
                  if (typeName.length > 0) {
                    return typeName.join(' ');
                  } else {
                    return v[0].name;
                  }
                default:
                  return v;
              }
            };
            if (substringKey === 'attention') {
              setFeature(oneProduct[substringKey]);
              return (
                <tr>
                  {attentionTorF && (
                    <FiAward
                      style={{
                        border: 'none',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        fontSize: '2rem',
                        color: 'white',
                        backgroundColor: 'red',
                      }}
                    />
                  )}
                </tr>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  {tableVisibleArray[setKey] && (
                    <TableTree
                      colLength={2}
                      col1={TableRow.jName}
                      col2={setFeature(oneProduct[substringKey])}
                    />
                  )}
                </React.Fragment>
              );
            }
          })}

          {/* {tableVisibleArray['typeVisible'] && (
              <TableTree colLength={2} col1="機能" col2={type} />
            )}
            {tableVisibleArray['featureVisible'] && (
              <TableTree colLength={2} col1="特徴" col2={feature} />
            )}
            {tableVisibleArray['propertyVisible'] && (
              <TableTree colLength={2} col1="性状" col2={property} />
            )}
            {tableVisibleArray['applicationVisible'] && (
              <TableTree colLength={2} col1="素材･用途" col2={application} />
            )}
            {tableVisibleArray['ionicVisible'] && (
              <TableTree colLength={2} col1="イオン性" col2={ionic} />
            )}
            {tableVisibleArray['packingVisible'] && (
              <TableTree colLength={2} col1="荷姿" col2={packing} />
            )}
            {tableVisibleArray['materialVisible'] && (
              <TableTree colLength={2} col1="素材" col2={material} />
            )}
            {tableVisibleArray['seriesVisible'] && (
              <TableTree colLength={2} col1="シリーズ名" col2={series} />
            )} */}
        </tbody>
      </table>
    </Link>
  );
};

// const Wrapper = styled.section`
//   display: flex;
//   width: 30%;
//   min-width: 30%;
//   &:not(:nth-child(3n-2)) {
//     margin: 2rem auto;
//   }
//   margin: 2rem auto 2rem 0;
// a {
//   text-decoration: none;
//   color: black;
//   height: auto;
//   width: 100%;
//   &:hover {
//     tbody {
//       opacity: 0.7;
//       background-color: whitesmoke;
//     }
//   }
// }
// table {
//   height: 100%;
//   width: 100%;
//   font-size: 12px;
//   border: 1px solid black;
//   border-collapse: collapse;
//   td {
//     border: 1px solid black;
//     white-space: nowrap;
//     text-align: center;
//   }
//   th {
//     border: 1px solid black;
//   }
// }
// `;

ProductCard.propTypes = {
  product: propTypes.string,
};

export default ProductCard;
