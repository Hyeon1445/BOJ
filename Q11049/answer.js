const [[N], ...inputs] = require('fs').readFileSync('Q11049/input.txt').toString().split('\r\n').map(input => input.split(' ').map(Number))
const dp = Array.from(Array(N), () => Array(N).fill(BigInt(0)))

for(let gap = 1; gap < N; gap++) {
  for(let left = 0; left + gap < N; left++) {
    const right = left + gap;
    for(let mid = left; mid < right; mid++) {
      const result = dp[left][mid] + dp[mid + 1][right] + BigInt(inputs[left][0] * inputs[mid][1] * inputs[right][1])
      if(!dp[left][right] || result < dp[left][right]) { 
        dp[left][right] = result
      }
    }
  }
}

console.log(dp[0][N - 1].toString())