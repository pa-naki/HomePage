import React from 'react';
import productArray from './productArray';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import keyReturn from './keyReturn';

const CheckArrayButton = ({ setObject, clickFunction }) => {
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

export default CheckArrayButton;
