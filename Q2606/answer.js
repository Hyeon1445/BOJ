const [[N], [M], ...inputs] = require('fs').readFileSync('Q2606/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const virus = Array(N).fill(false)
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

const bfs = (computer) => {
  virus[computer - 1] = true
  queue.unshift(computer)
  while(queue.length) {
    const comp = queue.pop()
    graph.get(comp).forEach(next => {
      if(!virus[next - 1]) {
        virus[next - 1] = true
        queue.unshift(next)
      }
    })
  }
}

bfs(1)
console.log(virus.reduce((a, b) => a + b) - 1)