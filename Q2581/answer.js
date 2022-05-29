const [m, n] = require('fs').readFileSync('Q2581/input.txt').toString().split('\r\n').map(num => +num)
let sum = 0
let min = -1
for(let i = m; i <= n; i++) {
  for(let j = 2; j <= i; j++) {
    if(i <= j) {
      if(min === -1) { min = i } 
      sum += i
    }
    else if(i % j === 0) { break }
  }
}
if(sum) { console.log(sum) }
console.log(min)