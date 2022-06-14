const [[n, k], ...inputs] = require('fs').readFileSync('Q11047/input.txt').toString().trim().split('\r\n').map((inp, index) => index === 0 ? inp.split(' ').map(Number) : Number(inp))
let count = 0
let change = k
for(let i = n - 1; i >= 0; i--) {
  if(change === 0) { break }
  count += parseInt(change / inputs[i])
  change = (change % +inputs[i])
}
console.log(count)