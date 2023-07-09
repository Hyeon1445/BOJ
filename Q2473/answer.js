const [[N], inputs] = require("fs")
  .readFileSync("Q2473/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map((num) => +num));

// const [[N], inputs] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((input) => input.split(" ").map((num) => +num));

inputs.sort((a, b) => a - b);
let sum = 3000000000;
let answer = [];
for (let m = 1; m < N - 1; m++) {
  let l = 0;
  let r = N - 1;
  while (l < m && r > m) {
    const newSum = inputs[m] + inputs[l] + inputs[r];
    if (Math.abs(newSum) < Math.abs(sum)) {
      sum = newSum;
      answer = [inputs[l], inputs[m], inputs[r]];
    }
    if (newSum < 0) l++;
    else if (newSum > 0) r--;
    else break;
  }
}

console.log(answer.join(" "));
