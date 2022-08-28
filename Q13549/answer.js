const [N, K] = require('fs').readFileSync('Q13549/input.txt').toString().trim().split(' ').map(Number)
const maxValue = 200001

const isInRange = (x) => {
  return x >= 0 && x <= maxValue
}

const queue = [N]
let qStart = 0
const visited = Array(maxValue + 1).fill(0)
visited[N] = 1
while(qStart !== queue.length) {
  const position = queue[qStart]
  qStart++
  const nextPosition = [[position + 1, 1], [position - 1, 1], [position * 2 , 0]]
  for(let p = 0; p < nextPosition.length; p++) {
    const [next, second] = nextPosition[p]
    if(isInRange(next) && (!visited[next] || visited[next] > visited[position] + second)) {
      visited[next] = visited[position] + second
      queue.push(next)
    }
  }
}

console.log(visited[K] - 1)