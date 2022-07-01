import React from 'react';
import styled from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

const AllTagsList = ({
  categoryFilters,
  setCategoryFilters,
  categoryFiltersName,
  aggregatedAllCategory,
}) => {
  const categoryKeys = Object.keys(aggregatedAllCategory).sort((str1, str2) =>
    str1.toLowerCase().localeCompare(str2.toLowerCase())
  );
  return (
    <Wrapper>
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

const Wrapper = styled.aside`
  min-width: 10%;
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

export default AllTagsList;
