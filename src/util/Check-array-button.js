import React from 'react';
import productArray from './productArray';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import keyReturn from './keyReturn';
import styled from 'styled-components';

const CheckArrayButton = ({ setObject, clickFunction, className }) => {
  const setArray = keyReturn(setObject);

  return (
    <>
      {setArray.map((setproduct, index) => {
        const setKey = setproduct.key;
        return (
          <button
            onClick={() => {
              clickFunction(prevState => ({
                ...prevState,
                [setKey]: !setObject[setKey],
              }));
            }}
            className={className}
            key={index}
          >
            {setObject[setKey] ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            {setproduct.jName}
          </button>
        );
      })}
    </>
  );
};

const Wrapper = styled.button``;

export default CheckArrayButton;
