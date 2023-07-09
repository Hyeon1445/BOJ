const [n, k] = require("fs")
  .readFileSync("Q2225/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

// const [n, k] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((n) => +n);

const dp = [];
for (let i = 1; i < k + 1; i++) {
  dp[i] = new Array(n + 1).fill(i === 1 ? 1 : 0);
  dp[i][0] = 1;
}

for (let i = 2; i < k + 1; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000000;
  }
}

console.log(dp[k][n]);
