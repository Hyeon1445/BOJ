const [x, y, w, h] = require('fs').readFileSync('Q1085/input.txt').toString().split(' ').map(num => +num)
console.log(Math.min(x, y, w - x, h - y))