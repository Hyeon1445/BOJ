const [[N], ...inputs] = require('fs').readFileSync('Q1967/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const status = {
  default: -1,
  visited: 0 // > -1
}

const graph = new Map()
for(let i = 1; i <= N; i++) {
  graph.set(i, [])
}
for(let i = 0; i < N - 1; i++) {
  const [a, b, weight] = inputs[i]
  graph.get(a).push([b, weight])
  graph.get(b).push([a, weight])
}

const bfs = (start) => {
  const max = { node: 0, distance: 0 }
  const visited = Array(N + 1).fill(status.default)
  const queue = [[start, 0]]
  let qStart = 0
  visited[start] = 0
  while(qStart !== queue.length) {
    const [position, previousWeight] = queue[qStart]
    qStart++
    const nodes = graph.get(position)
    for(let i = 0; i < nodes.length; i++) {
      const [node, weight] = nodes[i]
      if(visited[node] === status.default) {
        visited[node] = previousWeight + weight
        queue.push([node, visited[node]])
        if(max.distance < visited[node]) { 
          max.distance = visited[node]
          max.node = node
        }
      }
    }
  }
  return max
}

console.log(N === 1 ? 0 : bfs(bfs(1).node).distance)