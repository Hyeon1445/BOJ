const [[count], inputs] = require('fs').readFileSync('Q11399/input.txt').toString().trim().split('\r\n').map(inp => inp.split(' ').map(Number))
inputs.sort((a, b) => a - b)
let sum = 0
for(let i = 0; i < count; i++) {
  sum += inputs[i] * (count - i)
}
console.log(sum)