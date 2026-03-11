// modole.export -> export default
//require -> import
//exports -> export

const firstModule = require('../betken/first-module');

console.log(firstModule.add(5, 10)); // Output: 15
console.log(firstModule.substract(10, 5));  // Output: 5
console.log(firstModule.multiply(5, 10)); // Output: 50  
console.log(firstModule.divide(10, 5)); // Output: 2

try {
  console.log('trying to divide by zero');
  let result = firstModule.divide(10, 0);
  console.log(result);
}catch (error) {
  console.error('Error:', error.message);
}

