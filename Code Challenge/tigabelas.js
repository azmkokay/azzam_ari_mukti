var ArrayWrapper = function(nums) {
    this.array = nums || [];
};

ArrayWrapper.prototype.valueOf = function() {
    return this.array.reduce((sum, num) => sum + num, 0);
};

ArrayWrapper.prototype.toString = function() {
    return '[' + this.array.join(',') + ']';
};

// Example 1
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // Output: 10

// Example 2
const obj = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj)); // Output: "[23,98,42,70]"

// Example 3
const obj3 = new ArrayWrapper([]);
const obj4 = new ArrayWrapper([]);
console.log(obj3 + obj4); // Output: 0
