const [[N], ...inputs] = require('fs').readFileSync('Q2468/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let maxCount = 0
let maxHeight = 0

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < N && y < N
}

// check max height
for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    if(maxHeight < inputs[i][j]){
      maxHeight = inputs[i][j]
    }
  }
}

// bfs
for(let rain = 0; rain <= maxHeight; rain++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false))
  const queue = []
  let qStart = 0
  let count = 0
  for(let i = 0; i < N; i++){
    for(let j = 0; j < N; j++) {
      if(!visited[i][j] && rain < inputs[i][j]) {
        count++
        queue.push([j, i])
        visited[i][j] = true
        while(qStart !== queue.length) {
          const [x, y] = queue[qStart]
          qStart++
          for(let d = 0; d < direction.length; d++) {
            const [a, b] = direction[d]
            const nextX = x + a
            const nextY = y + b
            if(isInRange(nextX, nextY) && !visited[nextY][nextX] && rain < inputs[nextY][nextX]) {
              queue.push([nextX, nextY])
              visited[nextY][nextX] = true
            }
          }
        }
      }
    }
  }
  maxCount = Math.max(count, maxCount)
}

console.log(maxCount)