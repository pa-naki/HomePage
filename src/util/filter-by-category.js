export const filterByAllCategories = (list, seriesCategory, arrayCategory) => {
  const items = list.reduce((aggregated, node) => {
    if (node[arrayCategory]) {
      const nodeCategories = node[arrayCategory];
      const filterdCategories = nodeCategories.filter(c =>
        seriesCategory.includes(c)
      );
      if (filterdCategories.length === seriesCategory.length) {
        aggregated.push(node);
      }

      return aggregated;
    }
    return aggregated;
  }, []);
  return items;
};
