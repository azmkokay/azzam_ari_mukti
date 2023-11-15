//* ======= 1
// function mergeArrays(arr1, arr2) {
//     const idSet = new Set();
//     const result = [];
  
//     // Process arr1
//     for (const obj of arr1) {
//       result.push({ ...obj });
//       idSet.add(obj.id);
//     }
  
//     // Process arr2
//     for (const obj of arr2) {
//       if (!idSet.has(obj.id)) {
//         result.push({ ...obj });
//         idSet.add(obj.id);
//       } else {
//         // Merge properties for existing id
//         const existingObj = result.find(item => item.id === obj.id);
//         Object.assign(existingObj, obj);
//       }
//     }
  
//     // Sort the result array based on id
//     result.sort((a, b) => a.id - b.id);
  
//     return result;
//   }
  
//   // Example usage
//   const arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
//   ];
  
//   const arr2 = [
//     {"id": 3, "x": 5}
//   ];
  
//   const joinedArray = mergeArrays(arr1, arr2);
//   console.log(joinedArray);

  //* ========== 2
//   function mergeArrays(arr1, arr2) {
//     const idSet = new Set();
//     const result = [];
  
//     // Process arr1
//     for (const obj of arr1) {
//       result.push({ ...obj });
//       idSet.add(obj.id);
//     }
  
//     // Process arr2
//     for (const obj of arr2) {
//       if (!idSet.has(obj.id)) {
//         result.push({ ...obj });
//         idSet.add(obj.id);
//       } else {
//         // Merge properties for existing id
//         const existingObj = result.find(item => item.id === obj.id);
//         Object.assign(existingObj, obj);
//       }
//     }
  
//     // Sort the result array based on id
//     result.sort((a, b) => a.id - b.id);
  
//     return result;
//   }
  
//   // Example usage
//   const arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
//   ];
  
//   const arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
//   ];
  
//   const joinedArray = mergeArrays(arr1, arr2);
//   console.log(joinedArray);

//* ========= 3
// function mergeArrays(arr1, arr2) {
//     const idSet = new Set();
//     const result = [];
  
//     // Process arr1
//     for (const obj of arr1) {
//       result.push({ ...obj });
//       idSet.add(obj.id);
//     }
  
//     // Process arr2
//     for (const obj of arr2) {
//       if (!idSet.has(obj.id)) {
//         result.push({ ...obj });
//         idSet.add(obj.id);
//       } else {
//         // Merge properties for existing id
//         const existingObj = result.find(item => item.id === obj.id);
//         // Merge properties for nested objects and arrays
//         Object.entries(obj).forEach(([key, value]) => {
//           if (typeof value === 'object' && !Array.isArray(value)) {
//             existingObj[key] = { ...existingObj[key], ...value };
//           } else {
//             existingObj[key] = value;
//           }
//         });
//       }
//     }
  
//     // Sort the result array based on id
//     result.sort((a, b) => a.id - b.id);
  
//     return result;
//   }
  
//   // Example usage
//   const arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
//   ];
  
//   const arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
//   ];
  
//   const joinedArray = mergeArrays(arr1, arr2);
//   console.log(joinedArray);
  