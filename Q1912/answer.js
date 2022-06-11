const inputs = require('fs').readFileSync('Q1912/input.txt').toString().trim().split('\r\n')[1].split(' ').map(Number)
let result = inputs[0]
let max = inputs[0]
for(let i = 1; i < inputs.length; i++) {
  max = Math.max(inputs[i], max + inputs[i])
  result = Math.max(max, result)
}
console.log(result)

// input
// 10 -4 3 1 5 6 -35 12 21 -1

// 10  -> 10
// (10 - 4) vs -4 -> 6
// (6 + 3) vs 3 -> 9
// (9 + 1) vs 1 -> 10
// (10 + 5) vs 5 -> 15
// (15 + 6) vs 6 -> 21
// (21 - 35) vs -35 -> -14
// (-14 + 12) vs 23 -> 12
// (12 + 21) vs 21 -> 33
// (33 - 1) vs -1 -> 32

// 10 6 9 10 15 21 -14 12 33 32 중 max