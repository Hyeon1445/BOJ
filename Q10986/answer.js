const [[n, m], inputs] = require('fs').readFileSync('Q10986/input.txt').toString().trim().split('\r\n').map(inp => inp.split(' ').map(Number))
let result = 0
const count = Array(n).fill(0)
for(let i = 0; i < n; i++) {
  inputs[i] = (inputs[i] + (inputs[i - 1] || 0)) % m
  count[inputs[i]]++
  if(inputs[i] === 0) { result++ }
}
for(let i = 0; i < n; i++) {
  if(count[i] >= 2) {
    result += (count[i] * (count[i] - 1)) / 2
  }
}
console.log(result)