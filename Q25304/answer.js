const [[X], [N], ...arr] = require('fs').readFileSync('Q25304/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const sum = arr.map(([a, b]) => a * b).reduce((a, b) => a + b)
console.log(sum === X ? 'Yes' : 'No')