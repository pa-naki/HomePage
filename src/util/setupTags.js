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

  const NewTags = Object.entries(allProduct).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    firstTag.localeCompare(secondTag);
  });

  return NewTags;
};

export default setupTags;
