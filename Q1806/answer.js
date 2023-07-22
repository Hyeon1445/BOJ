const input = [];

const [[N, S], numList] = require("fs")
  .readFileSync("Q1806/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((num) => +num));

let minLen = Infinity;
let sum = 0,
  left = 0,
  right = 0;
for (left; left < N; left++) {
  while (sum < S && right < N) {
    sum += numList[right++];
  }
  if (sum >= S) {
    minLen = Math.min(minLen, right - left);
  }
  sum -= numList[left];
}
console.log(minLen === Infinity ? 0 : minLen);
