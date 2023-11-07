// ===== 1 =====
// Create a function to convert Excel sheet column title to its corresponding column number.
let exel = (column) => {
  let huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = 0;

  for (let i = 0; i < column.length; i++) {
    const char = column[i];
    const charValue = huruf.indexOf(char) + 1;
    result = result * 26 + charValue; //
  }
  // A = 0*26+1=1 result menjadi 1
  // B 1*26+1=27
  // A+B = 28
  return result;
};
let inputValue = "ab";
let upCase = inputValue.toUpperCase();
let outputValue = exel(upCase);
console.log(`${upCase} = ${outputValue}`);

// ===== 2 =====

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
findSingleNumber = (nums) => {
  let element = {};

  //melooping parameter nums
  for (let num of nums) {
    if (element[num]) {
      element[num]++;
      console.log(element[num]++);
    } else {
      console.log((element[num] = 1));
      element[num] = 1;
    }
  }

  for (let num in element) {
    if (element[num] === 1) {
      return parseInt(num);
    }
  }

  return null; // Jika tidak ada elemen tunggal
};

// Example 1
let nums1 = [2, 2, 1];
let result1 = findSingleNumber(nums1);
let toString1 = result1.toString();
console.log(toString1); // Output: 1

// Example 2
let nums2 = [4, 1, 2, 1, 2];
let result2 = findSingleNumber(nums2);
let toString2 = result2.toString();
console.log(toString2); // Output: 4

// Example 3
let nums3 = [1];
let result3 = findSingleNumber(nums3);
let toString3 = result3.toString();
console.log(toString3); // Output: 1

// ===== 3 =====
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
/* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
*/

isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false; // Jika panjang s dan t berbeda, mereka tidak bisa menjadi anagram.
  }

  const charCount = {};

  //loop s ke dalam i
  for (let i of s) {
    charCount[i] = (charCount[i] || 0) + 1;
  }

  for (let i of t) {
    if (!charCount[i]) {
      return false; // Jika karakter dalam t tidak ditemukan dalam s, mereka tidak bisa menjadi anagram.
    }
    charCount[i]--;
  }

  return true;
};

// Example 1
const s1 = "anagram";
const t1 = "nagaram";
console.log(isAnagram(s1, t1)); // Output: true

// Example 2
const s2 = "rat";
const t2 = "car";
console.log(isAnagram(s2, t2)); // Output: false

// ===== 4 =====
// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top?

climbStairs = (n) => {
  if (n <= 2) {
    return n; // For 1 or 2 steps, there are n distinct ways.
  }

  const dp = new Array(n + 1);

  // Initialize base cases.
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// Example 1
console.log(climbStairs(2)); // Output: 2

// Example 2
console.log(climbStairs(3)); // Output: 3
