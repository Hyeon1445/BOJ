const [[N], weight, [M], bead] = require('fs').readFileSync('Q2629/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const maxWeight = 40000
let dp = Array(maxWeight).fill(false)
dp[weight[0]] = true

for(let i = 1; i < N; i++) {
  const newDp = [...dp]
  for(let j = 0; j <= maxWeight; j++) {
    if(dp[j]) {
      const sum = j + weight[i]
      const sub = Math.abs(j - weight[i])
      if(sum <= maxWeight) { 
        newDp[sum] = true
      }
      newDp[weight[i]] = true
      newDp[sub] = true
    }
  }
  dp = newDp
}

const result = []
bead.forEach((input) => result.push(dp[input]? 'Y' : 'N'))
console.log(result.join(' '))