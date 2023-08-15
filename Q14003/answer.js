const [[N], inputs] = require("fs")
  .readFileSync("Q14003/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function binarySearch(left, right, target) {
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    lis[mid] < target ? (left = mid + 1) : (right = mid);
  }
  return right;
}

let lis = [];
let array = [];
array[0] = 0;
let j = 0;
lis[0] = inputs[0];
let i = 1;

while (i < N) {
  if (lis[j] < inputs[i]) {
    lis[++j] = inputs[i];
    array[i] = j;
  } else {
    let idx = binarySearch(0, j, inputs[i]);
    lis[idx] = inputs[i];
    array[i] = idx;
  }
  i++;
}
let answer = [];

let max = Math.max(...array);
const maxIdx = array.indexOf(max);

for (let i = maxIdx; i >= 0; i--) {
  if (array[i] == max) {
    answer.push(inputs[i]);
    max--;
  }
  if (max < 0) break;
}

console.log(answer.length);
console.log(answer.reverse().join(" "));
