// Write a function mergeArrays that accepts any number of arrays as arguments and
// merges them into a single array. Use the spread operator to accomplish this.
// Example Input:
// mergeArrays ([1, 2], [3, 4], [5, 6])
// Example Output:
// [1, 2, 3, 4, 5, 6]

function mergeArrays(...arrays) {
    return [].concat(...arrays.flat());
  }
  
  // Example usage:
  const result = mergeArrays([1, 2], [3, 4], [5, 6]);
  console.log(result); 
  
