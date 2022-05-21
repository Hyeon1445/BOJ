const [a, b, c] = require('fs').readFileSync('Q1712/input.txt').toString().trim().split(' ').map(num => +num)
const getBreakEvenPoint = (a, b, c) => {
  return b >= c ? -1 : Math.floor(a / (c - b)) + 1
}
console.log(getBreakEvenPoint(a, b, c))