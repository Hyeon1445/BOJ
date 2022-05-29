const [a, b] = require('fs').readFileSync('Q10757/input.txt').toString().split(' ')
console.log((BigInt(a) + BigInt(b)).toString())