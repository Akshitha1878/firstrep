// Given the following array: 
// const colors = [‘red’, ‘green’, ‘blue’, ‘yellow’] 
// Use array destructuring to extract the first and second elements of the array into 
// individual variables. 
// Use array destructuring to extract the second and fourth elements of the array into 
// individual variables. 

const colors = ['red', 'green', 'blue', 'yellow'];

// Destructuring the first and second elements
const [firstColor, secondColor] = colors;

console.log(firstColor);  // Output: 'red'
console.log(secondColor); // Output: 'green'
// Destructuring the second and fourth elements
const [, thirdColor, , fourthColor] = colors;

console.log(secondColor); // Output: 'green'
console.log(fourthColor); // Output: 'yellow'

