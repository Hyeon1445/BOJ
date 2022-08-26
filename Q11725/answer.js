const [[N], ...inputs] = require('fs').readFileSync('Q11725/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))

const graph = new Map()
for(let i = 1; i <= N; i++) {
  graph.set(i, [])  
}

for(let i = 0; i < N - 1; i++) {
  const [a, b] = inputs[i]
  graph.get(a).push(b)
  graph.get(b).push(a)
}

// bfs
const parents = Array(N + 1)
const queue = [...graph.get(1)]
let qStart = 0
for(let i = 0; i < queue.length; i++) {
  const node = queue[i]
  parents[node] = 1
}

while(qStart !== queue.length) {
  const parent = queue[qStart]
  qStart++
  const nodes = graph.get(parent)
  for(let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    if(!parents[node]) {
      queue.push(node)
      parents[node] = parent
    }
  }
}

console.log(parents.splice(2).join('\n'))