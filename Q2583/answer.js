const [[M, N, K], ...inputs] = require('fs').readFileSync('Q2583/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const area = Array.from({ length: M }, () => Array(N).fill(0))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
const result = []
const status = {
  empty: 0,
  fill: 1,
  visited: 2,
}

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < N && y < M
}


for(let i = 0; i < K; i++) {
  const [x1, y1, x2, y2] = inputs[i]
  for(let y = y1; y < y2; y++) {
    for(let x = x1; x < x2; x++) {
      area[y][x] = status.fill
    }
  }
}

const bfs = (position) => {
  const queue = [position]
  let qStart = 0
  let count = 1
  area[position[1]][position[0]] = status.visited
  while(qStart !== queue.length) {
    const [x, y] = queue[qStart]
    qStart++
    for(let d = 0; d < direction.length; d++) {
      const [a, b] = direction[d]
      const nextX = x + a
      const nextY = y + b
      if(isInRange(nextX, nextY) && area[nextY][nextX] === status.empty) {
        queue.push([nextX, nextY])
        area[nextY][nextX] = status.visited
        count++
      }
    }
  }
  result.push(count)
}

for(let y = 0; y < M; y++) {
  for(let x = 0; x < N; x++) {
    if(area[y][x] === status.empty) {
      bfs([x, y])
    }
  }
}

result.sort((a, b) => a - b)
console.log(result.length)
console.log(result.join(' '))