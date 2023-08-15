const [[n, k], ...coins] = require("fs")
  .readFileSync("Q2294/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input, index) =>
    index === 0 ? input.split(" ").map(Number) : Number(input)
  );

const dp = new Array(k + 1).fill(Infinity);

dp[0] = 0;
coins.forEach((v) => {
  for (let i = v; i <= k; i++) {
    dp[i] = Math.min(dp[i], dp[i - v] + 1);
  }
});
console.log(dp[k] == Infinity ? -1 : dp[k]);
