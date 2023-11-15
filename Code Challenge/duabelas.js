var chunk = function(arr, size) {
    if (size <= 0) {
        return [];
    }

    const chunkedArray = [];
    let index = 0;

    while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + size));
        index += size;
    }

    return chunkedArray;
};

// Example 1
console.log(chunk([1, 2, 3, 4, 5], 1));
// Output: [[1],[2],[3],[4],[5]]

// Example 2
console.log(chunk([1, 9, 6, 3, 2], 3));
// Output: [[1,9,6],[3,2]]

// Example 3
console.log(chunk([8, 5, 3, 2, 6], 6));
// Output: [[8,5,3,2,6]]

// Example 4
console.log(chunk([], 1));
// Output: []
