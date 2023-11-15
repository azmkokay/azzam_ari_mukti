//* ========= 1
// function expect(val) {
//     return {
//       toBe: function(compareVal) {
//         const result = val === compareVal;
//         if (!result) {
//           throw new Error("Not Equal");
//         }
//         return { value: result };
//       },
//       notToBe: function(compareVal) {
//         const result = val !== compareVal;
//         if (!result) {
//           throw new Error("Equal");
//         }
//         return { value: result };
//       },
//     };
//   }
  
//   // Example usage
//   const func = () => expect(5).toBe(5);
//   console.log(func()); // Output: {"value": true}

//* ========= 2
// function expect(val) {
//     return {
//       toBe: function(compareVal) {
//         const result = val === compareVal;
//         if (!result) {
//           throw new Error("Not Equal");
//         }
//         return { value: result };
//       },
//       notToBe: function(compareVal) {
//         const result = val !== compareVal;
//         if (!result) {
//           throw new Error("Equal");
//         }
//         return { value: result };
//       },
//     };
//   }
  
//   // Example usage
//   const func = () => expect(5).toBe(null);
  
//   try {
//     console.log(func());
//   } catch (error) {
//     console.log({ error: error.message }); // Output: {"error": "Not Equal"}
//   }

//* ========= 3
// function expect(val) {
//     return {
//       toBe: function(compareVal) {
//         const result = val === compareVal;
//         if (!result) {
//           throw new Error("Not Equal");
//         }
//         return { value: result };
//       },
//       notToBe: function(compareVal) {
//         const result = val !== compareVal;
//         if (!result) {
//           throw new Error("Equal");
//         }
//         return { value: result };
//       },
//     };
//   }
  
//   // Example usage
//   const func = () => expect(5).notToBe(null);
//   console.log(func()); // Output: {"value": true}
  
  
  