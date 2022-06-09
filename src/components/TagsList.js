import React from 'react';
import setupTags from '../util/setupTags';

const TagsList = ({ products = [] }) => {
  const NewTags = setupTags(products);
  return <div></div>;
};

export default TagsList;
