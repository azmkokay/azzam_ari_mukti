// Create a function to convert Excel sheet column title to its corresponding column number.
let exel = (column) => {
  let huruf= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
findSingleNumber = (nums) => {
    let elementCount = {};
    
    for (let num of nums) {
      if (elementCount[num]) {
        elementCount[num]++;
      } else {
        elementCount[num] = 1;
      }
    }
  
    for (let num in elementCount) {
      if (elementCount[num] === 1) {
        return parseInt(num);
      }
    }
    
    return null; // Jika tidak ada elemen tunggal
  }
  
  // Example 1
  let nums1 = [2, 2, 1];
  let result1 = findSingleNumber(nums1);
  console.log(result1); // Output: 1
  
  // Example 2
  let nums2 = [4, 1, 2, 1, 2];
  let result2 = findSingleNumber(nums2);
  console.log(result2); // Output: 4
  
  // Example 3
  let nums3 = [1];
  let result3 = findSingleNumber(nums3);
  console.log(result3); // Output: 1
  