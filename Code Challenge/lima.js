// //! ============= 1

// // function composeFunctions(functions, x) {
// //   // If the array of functions is empty, return the identity function
// //   if (functions.length === 0) {
// //     return (x) => x;
// //   }

// //   // Start with the rightmost function
// //   let result = functions[functions.length - 1](x);

// //   // Compose the remaining functions from right to left
// //   for (let i = functions.length - 2; i >= 0; i--) {
// //     result = functions[i](result);
// //   }

// //   return result;
// // }

// // // Example usage
// // const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
// // const x = 4;
// // const output = composeFunctions(functions, x);
// // console.log(output); // Output: 65

// //! ============= 2
// composeFunctions = (functions, x) => {
//   // If the array of functions is empty, return the identity function
//   if (functions.length === 0) {
//     return (x) => x;
//   }

//   // Start with the rightmost function
//   let result = functions[functions.length - 1](x);

//   // Compose the remaining functions from right to left
//   for (let i = functions.length - 2; i >= 0; i--) {
//     result = functions[i](result);
//   }

//   return result;
// };

// // Example usage
// const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
// const x = 1;
// const output = composeFunctions(functions, x);
// console.log(output); // Output: 1000

// //! ================ 3
// // function composeFunctions(functions, x) {
// //     // If the array of functions is empty, return the identity function
// //     if (functions.length === 0) {
// //       return x => x;
// //     }
  
// //     // Start with the rightmost function
// //     let result = functions[functions.length - 1](x);
  
// //     // Compose the remaining functions from right to left
// //     for (let i = functions.length - 2; i >= 0; i--) {
// //       result = functions[i](result);
// //     }
  
// //     return result;
// //   }
  
// //   // Example usage
// //   const functions = [];
// //   const x = 42;
// //   const output = composeFunctions(functions, x);
// //   console.log(output); // Output: 42
  
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((result, fn) => fn(result), x);
    };
};

// Example 1
const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4)); // Output: 65

// Example 2
const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn2(1)); // Output: 1000

// Example 3
const fn3 = compose([]);
console.log(fn3(42)); // Output: 42
