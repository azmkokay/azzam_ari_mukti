var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }

    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};

// Example usage
var sumFn = function(accum, curr) {
    return accum + curr;
};

var squareSumFn = function(accum, curr) {
    return accum + curr * curr;
};

var zeroSumFn = function(accum, curr) {
    return 0;
};

console.log(reduce([1, 2, 3, 4], sumFn, 0)); // Output: 10
console.log(reduce([1, 2, 3, 4], squareSumFn, 100)); // Output: 130
console.log(reduce([], zeroSumFn, 25)); // Output: 25
var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }

    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};

// Example usage
var sumFn = function(accum, curr) {
    return accum + curr;
};

var squareSumFn = function(accum, curr) {
    return accum + curr * curr;
};

var zeroSumFn = function(accum, curr) {
    return 0;
};

console.log(reduce([1, 2, 3, 4], sumFn, 0)); // Output: 10
console.log(reduce([1, 2, 3, 4], squareSumFn, 100)); // Output: 130
console.log(reduce([], zeroSumFn, 25)); // Output: 25
