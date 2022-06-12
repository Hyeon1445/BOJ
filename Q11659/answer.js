const [[n, m], numbers, ...inputs] = require('fs').readFileSync('Q11659/input.txt').toString().trim().split('\r\n').map(inp => inp.split(' ').map(Number))
const results = []
for(let i = 1; i < n; i++) {
  numbers[i] += numbers[i - 1]
}
for(let i = 0; i < m; i++) {
  results.push(numbers[inputs[i][1] - 1] - (numbers[inputs[i][0] - 2] || 0))
}
console.log(results.join('\n'))