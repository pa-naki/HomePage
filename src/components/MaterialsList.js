import React from 'react';
import styled from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { Link } from 'gatsby';
import qs from 'qs';

const MaterialsList = ({
  materialFilters,
  setMaterialFilters,
  aggregatedMaterials,
  materialsKeys,
}) => {
  return (
    <Wrapper>
      {materialFilters.length > 0 && (
        <button onClick={() => setMaterialFilters([])}>削除</button>
      )}
      {/* {NewSeries.map((NewTag, index) => { */}
      {materialsKeys.map(c => (
        <button
          key={c}
          className={materialFilters.includes(c) ? `selected` : ``}
          onClick={() => {
            if (materialFilters.includes(c)) {
              setMaterialFilters(materialFilters.filter(f => f !== c));
            } else {
              setMaterialFilters([...materialFilters, c]);
            }
          }}
        >
          <div>
            {materialFilters.includes(c) ? (
              <MdCheckBox />
            ) : (
              <MdCheckBoxOutlineBlank />
            )}
          </div>
          <div /*sx={{ mr: `auto` }}*/>{c}</div>
          <div>{aggregatedMaterials[c]}</div>
        </button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  min-width: calc(100% / 3);
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

export default MaterialsList;
