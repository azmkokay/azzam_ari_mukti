//* =========== 1
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    };
};

// Example usage
const f = createHelloWorld([]);
console.log(f()); // Output: "Hello World"

// Example 2
const f2 = createHelloWorld([]);
console.log(f({}, null, 42)); // Output: "Hello World"
