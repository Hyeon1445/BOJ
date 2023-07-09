const [counts, ...inputs] = require("fs")
  .readFileSync("Q20040/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map((num) => +num));

// const [counts, ...inputs] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((input) => input.split(" ").map((num) => +num));

const [n, m] = counts.map((num) => +num);

let answer = 0;
const parent = Array.from({ length: n }, (_, index) => index);

const findRoot = (dot) => {
  if (dot === parent[dot]) {
    return dot;
  }
  return findRoot(parent[dot]);
};

for (let i = 0; i < m; i++) {
  inputs[i].sort();
  const rootX = findRoot(inputs[i][0]);
  const rootY = findRoot(inputs[i][1]);
  if (rootX === rootY) {
    answer = i;
    break;
  } else {
    parent[rootY] = parent[rootX];
  }
}

console.log(answer > 0 ? answer + 1 : answer);

// 유니온 파인드(Union Find)
