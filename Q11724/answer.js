const [[N, M], ...inputs] = require('fs').readFileSync('Q11724/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
let count = 0

// map
const graph = new Map()
for(let i = 1; i <= N; i++) {
  graph.set(i, [])
}
for(let i = 0; i < M; i++) {
  const [from, to] = inputs[i]
  graph.get(from).push(to)
  graph.get(to).push(from)
}


// bfs
const queue = []
let qStart = 0
const visited = Array(N).fill(false)
for(let i = 1; i <= N; i++){
  if(!visited[i - 1]) {
    count++
    queue.push(i)
    visited[i - 1] = true
    while(qStart !== queue.length) {
      const dot = queue[qStart]
      qStart++
      const connectedDots = graph.get(dot)
      for(let j = 0; j < connectedDots.length; j++) {
        const next = connectedDots[j]
        if(!visited[next - 1]) {
          queue.push(next)
          visited[next - 1] = true
        }
      }
    }
  }
}

// answer
console.log(count)