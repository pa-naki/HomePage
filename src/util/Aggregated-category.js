let nodeCategories;
const AggregatedCategory = (items, category, propertyName, secondCategory) => {
  const aggregatedCategories = items.reduce((result, node) => {
    nodeCategories = '';
    // extract list of categories for node
    // items: [{"name": "App"}, {"name": "E-commerce"}]
    // nodeCategories: ["App", "E-commerce"]
    if (typeof node[category] === 'object') {
      if (propertyName && propertyName.length > 0) {
        nodeCategories = node[category].map(obj => obj[propertyName]);
      } else if (secondCategory && secondCategory.length > 0) {
        nodeCategories = node[category][secondCategory].map(obj => obj);
      } else {
        nodeCategories = node[category].map(obj => obj);
      }
      nodeCategories.forEach(category => {
        // if we already have the category recorded, increase count
        if (result[category]) {
          result[category] = result[category] + 1;
        } else {
          // record first encounter of category
          result[category] = 1;
        }
      });
      if (propertyName && propertyName.length > 0) {
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
    } else {
      nodeCategories = node[category];

      if (result[nodeCategories]) {
        result[nodeCategories] = result[nodeCategories] + 1;
      } else {
        // record first encounter of nodeCategories
        result[nodeCategories] = 1;
      }
    }
    // detect if site is open source by checking sourceUrl

    // sort categories so they appear in alphabetical order on page

    return result;
  }, {});
  return aggregatedCategories;
};

export default AggregatedCategory;

// const aggregatedTypes = items.reduce((result, node) => {
//   // extract list of categories for node
//   // items: [{"name": "App"}, {"name": "E-commerce"}]
//   // nodeCategories: ["App", "E-commerce"]
//   const nodeCategories = node.type.map(obj => obj.name);
//   // detect if site is open source by checking sourceUrl

//   nodeCategories.forEach(category => {
//     // if we already have the category recorded, increase count
//     if (result[category]) {
//       result[category] = result[category] + 1;
//     } else {
//       // record first encounter of category
//       result[category] = 1;
//     }
//   });

//   // sort categories so they appear in alphabetical order on page
//   node.type.sort((obj1, obj2) =>
//     obj1.name.toLowerCase().localeCompare(obj2.name.toLowerCase())
//   );

//   return result;
// }, {});

// const aggregatedSeries = items.reduce((result, node) => {
//   // extract list of Series for node
//   // items: [{"name": "App"}, {"name": "E-commerce"}]
//   // nodeSeries: ["App", "E-commerce"]
//   const nodeSeries = node.series.series.map(obj => obj);
//   // detect if site is open source by checking sourceUrl

//   nodeSeries.forEach(series => {
//     // if we already have the series recorded, increase count
//     if (result[series]) {
//       result[series] = result[series] + 1;
//     } else {
//       // record first encounter of series
//       result[series] = 1;
//     }
//   });

//   // sort Series so they appear in alphabetical order on page
//   node.series.series.sort((obj1, obj2) =>
//     obj1.toLowerCase().localeCompare(obj2.toLowerCase())
//   );

//   return result;
// }, {});

// const aggregatedMaterials = items.reduce((result, node) => {
//   // extract list of Materials for node
//   // items: [{"name": "App"}, {"name": "E-commerce"}]
//   // nodeMaterials: ["App", "E-commerce"]
//   const nodeMaterials = node.material.map(obj => obj);
//   // detect if site is open source by checking sourceUrl

//   nodeMaterials.forEach(material => {
//     // if we already have the material recorded, increase count
//     if (result[material]) {
//       result[material] = result[material] + 1;
//     } else {
//       // record first encounter of material
//       result[material] = 1;
//     }
//   });

//   // sort Materials so they appear in alphabetical order on page
//   node.material.sort((obj1, obj2) =>
//     obj1.toLowerCase().localeCompare(obj2.toLowerCase())
//   );

//   return result;
// }, {});

// const categoryKeys = Object.keys(aggregatedTypes).sort((str1, str2) =>
//   str1.toLowerCase().localeCompare(str2.toLowerCase())
// );

// const seriesKeys = Object.keys(aggregatedSeries).sort((str1, str2) =>
//   str1.toLowerCase().localeCompare(str2.toLowerCase())
// );

// const materialsKeys = Object.keys(aggregatedMaterials).sort((str1, str2) =>
//   str1.toLowerCase().localeCompare(str2.toLowerCase())
// );
