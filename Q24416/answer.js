const input = +require('fs').readFileSync('Q24416/input.txt').toString()

let fibCount = 0
const fib = (n) => {
  fibCount++
  if(n === 1 || n === 2) { return 1 }
  else return fib(n - 1) + fib(n - 2)
}
fib(input)

console.log(Math.ceil(fibCount / 2), input - 2)