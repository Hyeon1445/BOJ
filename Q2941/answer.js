const input = require('fs').readFileSync('Q2941/input.txt').toString().trim()
const getLength = (str) => {
  return str.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, '0').length
} 

console.log(getLength(input))