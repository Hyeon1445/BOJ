const input = require('fs').readFileSync('Q1427/input.txt').toString().trim().split('').map(num => +num)
input.sort((a, b) => b - a)
console.log(+input.join(''))