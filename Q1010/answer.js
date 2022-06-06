const inputs = require('fs').readFileSync('Q1010/input.txt').toString().trim().split('\r\n').splice(1).map(testCase => testCase.split(' ').map(Number))
const dp = Array.from(Array(31), () => Array(31).fill(0))
for(let i = 0; i <= 30; i++) {
  for(let j = 0; j <= 30; j++) {
    if(i === j || i === 0 || j === 0) { dp[i][j] = 1 }
    else { dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] }
  }
}
const result = inputs.map(testCase => {
  const max = Math.max(...testCase)
  const min = Math.min(...testCase)
  return dp[max][min]
})
console.log(result.join('\n'))