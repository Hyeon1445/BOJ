const[[V], ...inputs] = require('fs').readFileSync('Q1167/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const status = {
  default: -1,
  visited: 0 // > -1
}

inputs.sort((a, b) => a[0] - b[0])

const bfs = (start) => {
  const max = { node: start, distance: 0 }
  const visited = Array(V + 1).fill(-1)
  const queue = [start]
  let qStart = 0
  visited[start] = 0
  while(qStart !== queue.length) {
    const currentNode = queue[qStart]
    qStart++
    for(let i = 1; i < inputs[currentNode - 1].length - 1; i += 2) {
      const nextNode = inputs[currentNode - 1][i]
      const weight = inputs[currentNode - 1][i + 1]
      if(visited[nextNode] === status.default) {
        queue.push(nextNode)
        visited[nextNode] = visited[currentNode] + weight
        if(visited[nextNode] > max.distance) {
          max.node = nextNode
          max.distance = visited[nextNode]
        }
      }
    }
  }
  return max
}
// TIP: 정점이 순서대로 입력되지 않을 수 있음!

console.log(bfs(bfs(1).node).distance)