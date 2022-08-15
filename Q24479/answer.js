const [[N, M, R], ...inputs] = require("fs").readFileSync("Q24479/input.txt").toString().trim().split("\r\n").map((input) => input.split(" ").map(Number))
const visited = Array(N).fill(0)
let index = 1
const graph = new Map()
for(let i = 1; i <= N; i++) {
  graph.set(i, [])
}
for(let i = 1; i <= M; i++) {
  let [start, end] = inputs[i - 1]
  graph.get(start).push(end)
  graph.get(end).push(start)
}
graph.forEach((line) => {
  line.sort((a, b) => a - b)
})

const dfs = (dot) => {
  visited[dot - 1] = index
  index++
  graph.get(dot).forEach((edge) => {
    if (!visited[edge - 1]) {
      dfs(edge)
    }
  })
}

dfs(R)
console.log(visited.join("\n"))
