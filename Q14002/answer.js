const [[N], inputs] = require("fs")
  .readFileSync("Q14002/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

const dp = Array.from({ length: N }, () => 0);
const arr = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  let maxIdx = -1;
  for (let j = 0; j < i; j++) {
    if (inputs[i] > inputs[j] && dp[j] > max) {
      max = dp[j];
      maxIdx = j;
    }
  }
  dp[i] = max + 1;
  arr[i] = maxIdx !== -1 ? arr[maxIdx].concat(inputs[i]) : [inputs[i]];
}

let answer = Math.max(...dp);

console.log(answer);
console.log(arr[dp.indexOf(answer)].join(" "));
