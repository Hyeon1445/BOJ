const [T, ...inputs] = require('fs').readFileSync('Q11066/input.txt').toString().trim().split('\r\n')

for(let i = 0; i < +T; i++) {
  const sizeLength = +inputs[2 * i]
  const size = inputs[2 * i + 1].split(' ').map(Number)
  const dp = Array.from(Array(sizeLength), () => Array(sizeLength).fill(0))
  const subSum = [size[0]]
  for(let j = 1; j < sizeLength; j++) {
    subSum.push(subSum[j - 1] + size[j])
  }
  for(let gap = 0; gap < sizeLength; gap++) {
    for(let left = 0; left + gap < sizeLength; left++) {
      const right = left + gap
      for(let mid = left; mid < right; mid++) {
        dp[left][right] = Math.min(dp[left][right] || Infinity, dp[left][mid] + dp[mid + 1][right] + subSum[right] - (subSum[left - 1] || 0))
      }
    }
  }
  console.log(dp[0][sizeLength - 1])
}

