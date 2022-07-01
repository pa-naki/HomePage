let nodeCategories;
export const filterByAllCategories = (
  list,
  filterCategory,
  firstCategory,
  propertyName,
  secondCategory
) => {
  const items = list.reduce((aggregated, node) => {
    nodeCategories = [];
    if (node[firstCategory]) {
      if (typeof node[firstCategory] === 'object') {
        if (propertyName && propertyName.length > 0) {
          nodeCategories = node[firstCategory].map(obj => obj[propertyName]);
        } else if (secondCategory && secondCategory.length > 0) {
          nodeCategories = node[firstCategory][secondCategory].map(obj => obj);
        } else {
          nodeCategories = node[firstCategory].map(obj => obj);
        }
      } else {
        nodeCategories.push(node[firstCategory]);
      }
      const filterdCategories = nodeCategories.filter(c =>
        filterCategory.includes(c)
      );
      if (filterdCategories.length === filterCategory.length) {
        aggregated.push(node);
      }

      return aggregated;
    }
    return aggregated;
  }, []);
  return items;
};

// export const filterByCategories = (list, categories) => {
//   const items = list.reduce((aggregated, node) => {
//     if (node.type) {
//       const nodeCategories = node.type.map(obj => obj.name);
//       const filteredCategories = nodeCategories.filter(c =>
//         categories.includes(c)
//       );
//       if (filteredCategories.length === categories.length) {
//         aggregated.push(node);
//       }

//       return aggregated;
//     }

//     return aggregated;
//   }, []);

//   return items;
// };

// export const filterBySeries = (list, seriesCategory) => {
//   const items = list.reduce((aggregated, node) => {
//     if (node.series) {
//       const nodeSeries = node.series.series.map(obj => obj);
//       const filteredSeries = nodeSeries.filter(c => seriesCategory.includes(c));
//       if (filteredSeries.length === seriesCategory.length) {
//         aggregated.push(node);
//       }

//       return aggregated;
//     }

//     return aggregated;
//   }, []);

//   return items;
// };

// export const filterByMaterials = (list, materialsCategory) => {
//   const items = list.reduce((aggregated, node) => {
//     if (node.material) {
//       const nodeMaterials = node.material.map(obj => obj);
//       const filteredMaterials = nodeMaterials.filter(c =>
//         materialsCategory.includes(c)
//       );
//       if (filteredMaterials.length === materialsCategory.length) {
//         aggregated.push(node);
//       }

//       return aggregated;
//     }

//     return aggregated;
//   }, []);

//   return items;
// };
