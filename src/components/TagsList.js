import React from 'react';
import styled from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import setupTags from '../util/setupTags';
import { Link } from 'gatsby';
import qs from 'qs';

const TagsList = ({
  products = [],
  items,
  count,
  filters,
  setFilters,
  onCategoryClick,
  aggregatedCategories,
  categoryKeys,
}) => {
  const NewTags = setupTags(products);
  console.log(categoryKeys);
  console.log(aggregatedCategories);
  return (
    <Wrapper>
      {filters.length > 0 && (
        <button onClick={() => setFilters([])}>削除</button>
      )}
      {/* {NewTags.map((NewTag, index) => { */}
      {console.log(filters)}
      {categoryKeys.map(c => (
        <button
          key={c}
          className={filters.includes(c) ? `selected` : ``}
          onClick={() => {
            if (filters.includes(c)) {
              setFilters(filters.filter(f => f !== c));
            } else {
              setFilters([...filters, c]);
            }
          }}
        >
          <div>
            {filters.includes(c) ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </div>
          <div /*sx={{ mr: `auto` }}*/>{c}</div>
          <div>{aggregatedCategories[c]}</div>
        </button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 10%;
  display: flex;
  flex-direction: column;
  line-height: 1.67;
  button {
    display: flex;
    align-items: center;
    height: 2.5rem;
    &:not(:first-child) {
      margin-top: 0.5rem;
    }
  }
`;

export default TagsList;
