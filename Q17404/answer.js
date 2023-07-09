const [[n], ...inputs] = require("fs")
  .readFileSync("Q17404/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map((num) => +num));

// const [[n], ...inputs] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((input) => input.split(" ").map((num) => +num));

const redDp = Array.from({ length: n }, () => [0, 0, 0]);
const blueDp = Array.from({ length: n }, () => [0, 0, 0]);
const greenDp = Array.from({ length: n }, () => [0, 0, 0]);

redDp[0] = [inputs[0][0], 10000, 10000];
blueDp[0] = [10000, inputs[0][1], 10000];
greenDp[0] = [10000, 10000, inputs[0][2]];

for (let i = 1; i < n; i++) {
  for (dp of [redDp, blueDp, greenDp]) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + inputs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + inputs[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + inputs[i][2];
  }
}

console.log(
  Math.min(
    redDp[n - 1][1],
    redDp[n - 1][2],
    blueDp[n - 1][0],
    blueDp[n - 1][2],
    greenDp[n - 1][0],
    greenDp[n - 1][1]
  )
);
