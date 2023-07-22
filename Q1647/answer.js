let answer = 0;
const input = require("fs")
  .readFileSync("Q1647/input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
let road = input.slice(1).map((_) => _.trim().split(" ").map(Number));

const solve = (village, parent) => {
  let sum = 0;

  let MST = [];
  for (let i = 0; i < village.length; i++) {
    let [a, b, c] = [village[i].to, village[i].from, village[i].cost];
    if (!findParent(a, b, parent)) {
      unionParent(a, b, parent);
      MST.push({
        from: a,
        to: b,
        cost: c,
      });
    }
  }

  MST.pop();
  for (let i = 0; i < MST.length; i++) {
    sum += MST[i].cost;
  }

  return sum;
};

const getParent = (x, parent) => {
  if (parent[x] === x) return x;
  else return (parent[x] = getParent(parent[x], parent));
};

const findParent = (a, b, parent) => {
  a = getParent(a, parent);
  b = getParent(b, parent);
  if (a === b) return true;
  else return false;
};

const unionParent = (a, b, parent) => {
  a = parent[a];
  b = parent[b];
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

let village = [];
for (let i = 0; i < road.length; i++) {
  let [A, B, C] = road[i];
  village.push({
    from: A,
    to: B,
    cost: C,
  });
}
village.sort((a, b) => {
  a = a.cost;
  b = b.cost;
  if (a > b) return 1;
  else if (a < b) return -1;
});

let parent = new Array(N + 1).fill(0);
for (let i = 0; i <= N; i++) {
  parent[i] = i;
}

answer = solve(village, parent);

console.log(answer);
