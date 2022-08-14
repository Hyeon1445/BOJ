const [[N], inputs, [M], ...questions] = require('fs').readFileSync('Q10942/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const dp = Array.from(Array(N), () => Array(N).fill(false))

for(let gap = 0; gap < N; gap++) {
  for(let left = 0; left + gap < N; left++) {
    const right = left + gap
    if(gap === 0) {
      dp[left][right] = true
    } else if(gap === 1) {
      dp[left][right] = inputs[left] === inputs[right]
    } else {
      dp[left][right] = dp[left + 1][right - 1] && inputs[left] === inputs[right]
    }
  }
}

const result = []

questions.forEach(([S, E]) => {
  result.push(dp[S - 1][E - 1] ? 1 : 0)
})

console.log(result.join('\n'))