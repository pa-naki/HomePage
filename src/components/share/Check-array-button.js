import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import keyReturn from '../../util/keyReturn';

const CheckArrayButton = ({ setObject, clickFunction, className }) => {
  const setArray = keyReturn(setObject);

  return (
    <>
      {setArray.map((setproduct, index) => {
        const setKey = setproduct.key;
        const substringKey = setKey.substring(0, setKey.length - 7);
        if (substringKey === 'attention') {
          return;
        }
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
            title={`${
              setObject[setKey]
                ? setproduct.jName + 'をテーブルから外す'
                : setproduct.jName + 'をテーブルに加える'
            }`}
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
