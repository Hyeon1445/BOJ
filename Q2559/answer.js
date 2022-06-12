const [[n, k], inputs] = require('fs').readFileSync('Q2559/input.txt').toString().trim().split('\r\n').map(inp => inp.split(' ').map(Number))
let max = null
for(let i = 1; i < n; i++) {
  inputs[i] += inputs[i - 1]
}
for(let i = k - 1; i < n; i++) {
  const sum = inputs[i] - (inputs[i - k] || 0)
  if(max === null || max < sum) {
    max = sum
  }
}
console.log(max)
