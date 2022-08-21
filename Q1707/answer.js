const [[K], ...inputs] = require('fs').readFileSync('Q1707/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
let index = 0
const result = []

const bfs = (dotCount, graph) => {
  const queue = []
  let qStart = 0
  const dots = Array(dotCount) // 1, 2로 분류
  for(let i = 1; i <= dotCount; i++) {
    if(!dots[i - 1]) {
      dots[i - 1] = 1
      queue.push(i)
      while(qStart !== queue.length) {
        const dot = queue[qStart]
        qStart++
        const status = dots[dot - 1]
        const connectedDots = graph.get(dot)
        for(let j = 0; j < connectedDots.length; j++) {
          const next = connectedDots[j]
          if(!dots[next - 1]) {
            dots[next - 1] = status === 1 ? 2 : 1
            queue.push(next)
          } else if(dots[next - 1] === status) {
            return 'NO'
          }
        }
      }
    }
  }
  return 'YES'
}

for(let i = 0; i < K; i++) {
  const [V, E] = inputs[index]
  const graph = new Map()
  for(let j = 1; j <= V; j++) {
    graph.set(j, [])
  }
  for(let j = 1; j <= E; j++) {
    const [from, to] = inputs[index + j]
    graph.get(from).push(to)
    graph.get(to).push(from)
  }
  result.push(bfs(V, graph))
  index = index + E + 1
}

console.log(result.join('\n'))
// 이분 그래프(dfs, bfs로 판별)