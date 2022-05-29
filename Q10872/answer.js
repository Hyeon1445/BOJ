const input = +require('fs').readFileSync('Q10872/input.txt').toString()
const getFactorial = (n) => {
  if(n <= 1) return 1
  return getFactorial(n - 1) * n
}
console.log(getFactorial(input))