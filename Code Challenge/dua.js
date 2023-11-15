// //* ========== 1
// function createCounter(n) {
  
//   let counterValue = n;

  
//   function counter() {
    
//     return counterValue++;
//   }

//   return counter;
// }


// const n = 10;
// const counter = createCounter(n);


// const output = ["call", "call", "call"].map(() => counter());

// console.log(output); 


// const n2 = -2;
// const counter2 = createCounter(n2);


// const output2 = ["call", "call", "call", "call", "call"].map(() => counter2());

// console.log(output2); 


let createCounter = function(n) {
    return function() {
        return n++;
    };
};

// Example 1
const counter = createCounter(10);
const result = [];
result.push(counter()); // Output: 10
result.push(counter()); // Output: 11
result.push(counter()); // Output: 12

console.log(result);

// Example 2
const counter2 = createCounter(-2);
const result2 = [];
result2.push(counter2()); // Output: -2
result2.push(counter2()); // Output: -1
result2.push(counter2()); // Output: 0
result2.push(counter2()); // Output: 1
result2.push(counter2()); // Output: 2

console.log(result2);