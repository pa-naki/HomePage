const setupTags = products => {
  const allProduct = {};

  products.forEach(product => {
    product.node.type.forEach(tag => {
      const { name } = tag;
      if (allProduct[name]) {
        allProduct[name] = allProduct[name] + 1;
      } else {
        allProduct[name] = 1;
      }
    });
  });
  return allProduct;
};

export default setupTags;
