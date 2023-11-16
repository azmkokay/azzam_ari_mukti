// function memoize(fn) {
//     let callCount = 0;
//     let lookup = {};
  
//     return function (...args) {
//       const key = args.join("#");
  
//       if (key in lookup) {
//         return lookup[key];
//       }
  
//       lookup[key] = fn(...args);
//       callCount++;
  
//       return lookup[key];
//     };
//   }
  
function memoize(fn) {
  let callCount = 0;
  let lookup = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in lookup) {
      return lookup[key];
    }

    const result = fn(...args);

    if (result !== undefined) {
      lookup[key] = result;
    }

    callCount++;

    return result;
  };
}

// Example 1
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum(2, 2)); // Output: 4
console.log(memoizedSum.callCount); // Output: 1
console.log(memoizedSum(1, 2)); // Output: 3
console.log(memoizedSum.callCount); // Output: 2

// Example 2
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(2)); // Output: 2
console.log(memoizedFactorial(3)); // Output: 6
console.log(memoizedFactorial(2)); // Output: 2
console.log(memoizedFactorial.callCount); // Output: 2
console.log(memoizedFactorial(3)); // Output: 6
console.log(memoizedFactorial.callCount); // Output: 2

// Example 3
const fib = (n) => (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);
const memoizedFib = memoize(fib);
console.log(memoizedFib(5)); // Output: 8
console.log(memoizedFib.callCount); // Output: 1


