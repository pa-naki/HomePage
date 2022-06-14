import React from 'react';
import styled from 'styled-components';
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
}) => {
  const NewTags = setupTags(products);
  return (
    <Wrapper>
      {NewTags.map((NewTag, index) => {
        const [tag, length] = NewTag;
        return (
          <div key={index}>
            <input
              type="checkbox"
              name={`tagList-${index}`}
              id={`tagList-${index}`}
              value={tag}
              onClick={() => setFilters(`Tags`)}
            />

            <label htmlFor={`tagList-${index}`}>
              {tag} ({length})
            </label>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 20%;
  display: flex;
  flex-direction: column;
  line-height: 1.67;
`;

export default TagsList;
