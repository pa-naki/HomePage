import React from 'react';
import styled from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import productArray from '../util/productArray';

const AllTagsList = ({
  categoryFilters,
  setCategoryFilters,
  categoryFiltersName,
  aggregatedAllCategory,
}) => {
  const categoryKeys = Object.keys(aggregatedAllCategory).sort((str1, str2) =>
    str1.toLowerCase().localeCompare(str2.toLowerCase())
  );
  const substringKey = categoryFiltersName.substring(
    0,
    categoryFiltersName.length - 7
  );
  const jName = productArray[substringKey];

  return (
    <Wrapper>
      <h3>{jName}</h3>
      {categoryFilters.length > 0 && (
        <button
          onClick={() =>
            setCategoryFilters(prestate => ({
              ...prestate,
              [categoryFiltersName]: [],
            }))
          }
        >
          削除
        </button>
      )}
      {/* {NewTags.map((NewTag, index) => { */}
      {categoryKeys.map(c => (
        <button
          key={c}
          className={categoryFilters.includes(c) ? `selected` : ``}
          onClick={() => {
            if (categoryFilters.includes(c)) {
              setCategoryFilters(prestate => ({
                ...prestate,
                [categoryFiltersName]: categoryFilters.filter(f => f !== c),
              }));
            } else {
              setCategoryFilters(prestate => ({
                ...prestate,
                [categoryFiltersName]: [...categoryFilters, c],
              }));
            }
          }}
        >
          <div>
            {categoryFilters.includes(c) ? (
              <MdCheckBox />
            ) : (
              <MdCheckBoxOutlineBlank />
            )}
          </div>
          <div /*sx={{ mr: `auto` }}*/>{c}</div>
          <div>{aggregatedAllCategory[c]}</div>
        </button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.67;
  white-space: nowrap;
  margin: 25px auto;
  flex: 1 0 auto;
  h3 {
    text-align: center;
  }
  button {
    display: flex;
    flex: 0 0 10%;
    align-items: center;
    height: 2.5rem;
    &:not(:first-child) {
      margin-top: 0.5rem;
    }
  }
`;

export default AllTagsList;
