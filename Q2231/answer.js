const input = +require('fs').readFileSync('Q2231/input.txt').toString()
const getMinValue = (input) => {
  for(let i = 1; i < input; i++) {
    const sum = i
      .toString()
      .split('')
      .map(num => +num)
      .reduce((a, b) => a + b)
    const value = i + sum
    if (value === input) { return i }
  }
  return 0
}
console.log(getMinValue(input))