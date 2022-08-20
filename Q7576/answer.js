const [[M, N], ...box] = require('fs').readFileSync('Q7576/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))

// 최대(1000개) test
// const N = 1000, M = 1000
// const box = Array.from({length: 1000}, () => Array(1000).fill(0))
// box[0][0] = 1

const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let count = 0
const checkIsInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < M && y < N
}

// queue에 익은 토마토(1) 위치 담기
const queue = []
let start = 0, end = 0
for(let y = 0; y < N; y++) {
  for(let x = 0; x < M; x++) {
    if(box[y][x] === 1) {
      queue.push([x, y])
      end = queue.length
    }
  }
}

// bfs
while(start !== end) {
  const [x, y] = queue[start]
  start++
  if(!checkIsInRange(x, y)) { continue }
  count = Math.max(count, box[y][x] - 1)
  for(let i = 0; i < direction.length; i++) {
    const [a, b] = direction[i]
    const nextX = x + a
    const nextY = y + b
    if(checkIsInRange(nextX, nextY) && box[nextY][nextX] === 0) {
      queue.push([nextX, nextY])
      end = queue.length
      box[nextY][nextX] = box[y][x] + 1
    }
  }
}

// 익지 않은 토마토가 있는지 확인
let isCompleted = true
for(let y = 0; y < N; y++) {
  for(let x = 0; x < M; x++) {
    if(box[y][x] === 0) {
      isCompleted = false
      break
    }
  }
}
console.log(isCompleted ? count : -1)