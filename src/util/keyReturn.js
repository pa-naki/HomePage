import productArray from './productArray';

const keyReturn = setObject => {
  const c = Object.entries(setObject).map(v => {
    const [key, value] = v;
    const substringKey = key.substring(0, key.length - 7);
    return { jName: productArray[substringKey], key: key };
  });
  return c;
};

export default keyReturn;
