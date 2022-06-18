const[[n], bridgeLength, price] = require('fs').readFileSync('Q13305/input.txt').toString().trim().split('\r\n').map(input => input.split(' '))
let min = price[0]
let result = 0
for(let i = 0; i < n - 1; i++) {
  if(+price[i] < +min) { min = price[i] }
  result = (BigInt(min) * BigInt(bridgeLength[i]) + BigInt(result))
}
console.log(result.toString())