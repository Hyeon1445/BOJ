const [[N], ...inputs] = require('fs').readFileSync('Q2166/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
let x = 0
let y = 0

inputs.push(inputs[0])

for(let i = 0; i < N; i++) {
  x += inputs[i][0] * inputs[i + 1][1]
  y += inputs[i][1] * inputs[i + 1][0]
}

console.log(Math.abs((x - y) / 2).toFixed(1))

// 신발끈 공식