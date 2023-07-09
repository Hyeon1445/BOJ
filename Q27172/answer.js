const [count, inputs] = require("fs")
  .readFileSync("Q27172/input.txt")
  .toString()
  .trim()
  .split("\n");

// const [count, inputs] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const max = 1_000_001;
const inputArr = inputs.split(" ").map((num) => +num);
const cards = Array(max).fill(0);
const scores = Array(max).fill(0);
const hasCard = 1;
const answer = [];

for (let i = 0; i < +count; i++) {
  cards[inputArr[i]] = hasCard;
}

for (let i = 0; i < +count; i++) {
  for (let j = inputArr[i] * 2; j < max; j += inputArr[i]) {
    if (cards[j] === hasCard) {
      scores[inputArr[i]]++;
      scores[j]--;
    }
  }
}

for (let i = 0; i < +count; i++) {
  answer.push(scores[inputArr[i]]);
}

console.log(answer.join(" "));
