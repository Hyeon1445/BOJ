const [k, ...inputs] = require('fs').readFileSync('Q10773/input.txt').toString().trim().split('\r\n').map(Number)
const stack = []
inputs.forEach(input => {
  if(input === 0) { stack.pop() }
  else { stack.push(input) }
})
const result = stack.length ? stack.reduce((a, b) => BigInt(a) + BigInt(b)) : 0
console.log(result.toString())