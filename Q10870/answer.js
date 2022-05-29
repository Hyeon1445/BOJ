const input = +require('fs').readFileSync('Q10870/input.txt').toString()
const getFibonacciNumber = (n) => {
  if(n === 0) { return 0 }
  else if(n === 1) { return 1 }
  else return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2)
}
console.log(getFibonacciNumber(input))