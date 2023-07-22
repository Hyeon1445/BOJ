const [[N, M], ...inputs] = require("fs")
  .readFileSync("Q2623/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map((num) => +num));

const solution = (N, M, input) => {
  let graph = Array.from({ length: N + 1 }, () => []);
  let indegree = Array(N + 1).fill(0);
  for (let i = 0; i < M; i++) {
    let [n, ...list] = input[i];
    for (let j = 0; j < n - 1; j++) {
      graph[list[j]].push(list[j + 1]);
      indegree[list[j + 1]]++;
    }
  }
  let queue = [];
  let ans = [];
  for (let i = 1; i <= N; i++) {
    if (!indegree[i]) queue.push(i);
  }
  while (queue.length) {
    let current = queue.shift();
    ans.push(current);
    for (let next of graph[current]) {
      indegree[next]--;
      if (!indegree[next]) queue.push(next);
    }
  }
  return ans.length === N ? ans.join("\n") : 0;
};

console.log(solution(N, M, inputs));
