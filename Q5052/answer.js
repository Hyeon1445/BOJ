const [count, ...inputs] = require("fs")
  .readFileSync("Q5052/input.txt")
  .toString()
  .trim()
  .split("\n");

// const [count, ...inputs] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const array = [];
let i = 0;
while (1) {
  const arr = [];
  const arrLength = Number(inputs[i]);
  for (let j = 0; j < arrLength; j++) {
    arr.push(inputs[i + j + 1]);
  }
  arr.sort();
  array.push(arr);
  i += arrLength + 1;
  if (i >= inputs.length) break;
}

const answer = array.map((group) => {
  for (n = 0; n < group.length - 1; n++) {
    if (
      group[n].length < group[n + 1].length &&
      group[n] === group[n + 1].slice(0, group[n].length)
    ) {
      return "NO";
    }
  }
  return "YES";
});

console.log(answer.join("\n"));
