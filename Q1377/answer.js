const [N, ...inputs] = require("fs")
  .readFileSync("Q1377/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const numbers = inputs
  .map((value, index) => ({ value, index }))
  .sort((a, b) => a.value - b.value);
let maxValue = 0;
for (let i = 0; i < N; i++) {
  maxValue = Math.max(maxValue, numbers[i].index - i);
}

console.log(maxValue + 1);
