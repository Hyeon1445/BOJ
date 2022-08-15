const [[N, M, V], ...inputs] = require('fs').readFileSync('Q1260/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const dfsVisited = Array(N).fill(false)
const dfsResult = []
const bfsVisited = Array(N).fill(false)
const bfsResult = []
let bfsIndex = 1
const queue = []

const graph = new Map()
for(let i = 1; i <= N; i++) {
  graph.set(i, [])
}
for(let i = 0; i < M; i++) {
  const [start, end] = inputs[i]
  graph.get(start).push(end)
  graph.get(end).push(start)
}
for(let i = 1; i <= N; i++) {
  graph.get(i).sort((a, b) => a - b)
}

const dfs = (dot) => {
  dfsVisited[dot - 1] = true
  dfsResult.push(dot)
  graph.get(dot).forEach(next => {
    if(!dfsVisited[next - 1]) {
      dfs(next)
    }
  })
}

const bfs = (dot) => {
  bfsVisited[dot - 1] = true
  bfsResult.push(dot)
  queue.unshift(dot)
  while(queue.length) {
    const e = queue.pop()
    graph.get(e).forEach(next => {
      if(!bfsVisited[next - 1]) {
        bfsVisited[next - 1] = true
        queue.unshift(next)
        bfsResult.push(next)
      }
    })
  }
}

dfs(V)
bfs(V)
console.log(dfsResult.join(' '))
console.log(bfsResult.join(' '))
