let nodeCategories;
const AggregatedCategory = (items, category, propertyName, secondCategory) => {
  const aggregatedCategories = items.reduce((result, node) => {
    nodeCategories = '';
    // extract list of categories for node
    // items: [{"name": "App"}, {"name": "E-commerce"}]
    // nodeCategories: ["App", "E-commerce"]
    if (typeof node[category] === 'object') {
      if (propertyName.length > 0 && propertyName) {
        nodeCategories = node[category].map(obj => obj[propertyName]);
      } else if (secondCategory && secondCategory.length > 0) {
        nodeCategories = node[category][secondCategory].map(obj => obj);
      } else {
        nodeCategories = node[category].map(obj => obj);
      }
    }
    console.log(nodeCategories);
    // detect if site is open source by checking sourceUrl

    nodeCategories.forEach(category => {
      // if we already have the category recorded, increase count
      if (result[category]) {
        result[category] = result[category] + 1;
      } else {
        // record first encounter of category
        result[category] = 1;
      }
    });

    // sort categories so they appear in alphabetical order on page

    if (propertyName.length > 0 && propertyName) {
      node[category].sort((obj1, obj2) =>
        obj1[propertyName]
          .toLowerCase()
          .localeCompare(obj2[propertyName].toLowerCase())
      );
    } else if (secondCategory && secondCategory.length > 0) {
      node[category][secondCategory].sort((obj1, obj2) =>
        obj1.toLowerCase().localeCompare(obj2.toLowerCase())
      );
    } else {
      node[category].sort((obj1, obj2) =>
        obj1.toLowerCase().localeCompare(obj2.toLowerCase())
      );
    }

    return result;
  }, {});
  return aggregatedCategories;
};

export default AggregatedCategory;
