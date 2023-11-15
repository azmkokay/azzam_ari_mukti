//* ================= 1
Array.prototype.last = function () {
  if (this.length > 0) {
    return this[this.length - 1];
  } else {
    return -1;
  }
};

// Example 1
let nums = [null, {}, 3];
console.log(nums.last()); // Output: 3


// Example 2
let nums2 = [];
console.log(nums2.last()); // Output: -1
