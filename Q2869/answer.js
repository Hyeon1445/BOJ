const [a, b, v] = require('fs').readFileSync('Q2869/input.txt').toString().split(' ').map(num => +num)
const getDate = (a, b, v) => {
  return Math.ceil((v - a) / (a - b)) + 1
}
console.log(getDate(a, b, v))