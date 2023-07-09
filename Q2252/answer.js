const [[n, m], ...inputs] = require("fs")
  .readFileSync("Q2252/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map((num) => +num));

// const [[n, m], ...inputs] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((input) => input.split(" ").map((num) => +num));

const entry = Array(n + 1).fill(0);
const relations = Array.from({ length: n + 1 }, () => []);
for (row of inputs) {
  entry[row[1]]++;
  relations[row[0]].push(row[1]);
}

const answer = [];
const queue = [];

for (let i = 1; i <= n; i++) {
  if (entry[i] === 0) {
    queue.push(i);
    entry[i] = -1;
  }
}

while (queue.length > 0) {
  const currentStudent = queue.shift();
  answer.push(currentStudent);
  for (other of relations[currentStudent]) {
    entry[other]--;
    if (entry[other] === 0) {
      queue.push(other);
      entry[other] = -1;
    }
  }
}

console.log(answer.join(" "));
// 위상 정렬
