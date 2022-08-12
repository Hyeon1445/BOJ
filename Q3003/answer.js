const inputs = require('fs').readFileSync('Q3003/input.txt').toString().split(' ').map(Number)
const count = [1, 1, 2, 2, 2, 8]
const answer = inputs.map((input, index) => count[index] - input)
console.log(answer.join(' '))