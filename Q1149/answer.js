const inputs = require('fs').readFileSync('Q1149/input.txt').toString().trim().split('\r\n').splice(1).map(inp => inp.split(' ').map(Number))
const arr = Array.from(Array(inputs.length), () => Array(3).fill(0))
arr[0] = inputs[0]
for(let i = 1; i < inputs.length; i++) {
  for(let j = 0; j < 3; j++) {
    arr[i][j] = inputs[i][j] + Math.min(...arr[i - 1].filter((_, index) => index !== j))
  }
}
console.log(Math.min(...arr[arr.length - 1]))
