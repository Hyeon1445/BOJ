const [n, k] = require('fs').readFileSync('Q11050/input.txt').toString().trim().split(' ').map(num => +num)
let num1 = 1
let num2 = 1
for(let i = n, j = 1; j <= k; i--, j++) { 
  num1 *= i
  num2 *= j 
}
console.log(num1 / num2)