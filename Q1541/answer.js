const inputs = require('fs')
  .readFileSync('Q1541/input.txt')
  .toString()
  .trim()
  .split('-')
  .map(input => input.split('+').map(Number))
  
const result = inputs.map(input => input.reduce((a, b) => a + b)).reduce((a, b) => a - b)
console.log(result)