const [input1, input2] = require("fs")
  .readFileSync("Q5582/input.txt")
  .toString()
  .trim()
  .split("\n");
// const [input1, input2] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

let max = 0;
const dp = Array.from(Array(input1.length + 1), () =>
  Array(input2.length + 1).fill(0)
);

for (let i = 1; i <= input1.length; i++) {
  for (let j = 1; j <= input2.length; j++) {
    if (input1[i - 1] == input2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      if (dp[i][j] > max) max = dp[i][j];
    }
  }
}

console.log(max);
