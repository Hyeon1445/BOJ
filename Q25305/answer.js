const [[N, k], score] = require('fs').readFileSync('Q25305/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
score.sort((a, b) => b - a)
console.log(score[k - 1])