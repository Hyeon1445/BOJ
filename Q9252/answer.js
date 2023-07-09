const [input1, input2] = require("fs")
  .readFileSync("Q9252/input.txt")
  .toString()
  .trim()
  .split("\n");
// const [input1, input2] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const dp = Array.from(Array(input1.length + 1), () =>
  Array(input2.length + 1).fill(0)
);

const answerString = [];
for (let i = 1; i <= input1.length; i++) {
  for (let j = 1; j <= input2.length; j++) {
    if (input1[i - 1] === input2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}

let row = input2.length;
let col = input1.length;
const max = dp[col][row];
while (col > 0 && row > 0) {
  if (dp[col][row] === dp[col - 1][row]) {
    col--;
  } else if (dp[col][row] === dp[col][row - 1]) {
    row--;
  } else {
    answerString.unshift(input1[col - 1]);
    col--;
    row--;
  }
}

console.log(max);
if (max > 0) {
  console.log(answerString.join(""));
}
