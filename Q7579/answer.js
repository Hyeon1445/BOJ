const [[N, M], memory, cost] = require("fs").readFileSync("Q7579/input.txt").toString().trim().split("\r\n").map((input) => input.split(" ").map(Number))
const dp = Array(M + 1).fill(-1)
dp[0] = 0

// 냅색 알고리즘
for (let i = 0; i < N; i++) {
  for (let j = M; j > 0; j--) {
    if (memory[i] < j) {
      if (dp[j] != -1) {
        dp[j] = Math.min(dp[j], cost[i] + dp[j - memory[i]])
      } else {
        if (dp[j - memory[i]] != -1) {
          dp[j] = cost[i] + dp[j - memory[i]]
        } else {
          dp[j] = -1
        }
      }
    } else {
      if (dp[j] != -1) {
        dp[j] = Math.min(dp[j], cost[i])
      } else {
        dp[j] = cost[i]
      }
    }
  }
}

console.log(dp[M])
