const [[N, M], ...map] = require('fs').readFileSync('Q14502/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
const square = {
  safe: 0,
  wall: 1,
  virus: 2
}
let maxSafeAreaCount = 0

// check virus
const virus = []
const safeArea = []
for(let y = 0; y < N; y++) {
  for(let x = 0; x < M; x++) {
    if(map[y][x] === square.virus) {
      virus.push([x, y])
    } else if(map[y][x] === square.safe) {
      safeArea.push([x, y])
    }
  }
}

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < M && y < N
}

const bfs = (arr) => {
  let safeAreaCount = safeArea.length - 3
  const queue = [...virus]
  let qStart = 0
  const visited = Array.from({ length: N }, () => Array(M).fill(false))
  while(qStart !== queue.length) {
    const [x, y] = queue[qStart]
    qStart++
    visited[y][x] = true
    if(!isInRange(x, y)) { continue }
    for(let i = 0; i < direction.length; i++){
      const [a, b] = direction[i]
      const nextX = x + a
      const nextY = y + b
      if(isInRange(nextX, nextY) && !visited[nextY][nextX] && arr[nextY][nextX] === square.safe) {
        visited[nextY][nextX] = true
        queue.push([nextX, nextY])
        safeAreaCount--
      }
    }
  }
  maxSafeAreaCount = Math.max(safeAreaCount, maxSafeAreaCount)
}

// 벽 추가(무조건 3개)
for(let i = 0; i < safeArea.length; i++) {
  const [x1, y1] = safeArea[i]
  map[y1][x1] = square.wall
  for(let j = i + 1; j < safeArea.length; j++) {
    const [x2, y2] = safeArea[j]
    map[y2][x2] = square.wall
    for(let k = j + 1; k < safeArea.length; k++) {
      const [x3, y3] = safeArea[k]
      map[y3][x3] = square.wall
      bfs(map)
      map[y3][x3] = square.safe
    }
    map[y2][x2] = square.safe
  }
  map[y1][x1] = square.safe
}

// answer
console.log(maxSafeAreaCount)