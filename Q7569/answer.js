const [[M, N, H], ...box] = require('fs').readFileSync('Q7569/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]

let count = 0
const checkIsInRange = (x, y, h) => {
  return x >= 0 && y >= 0 && h >= 0 && x < M && y < N && h < H
}

// queue에 익은 토마토(1) 위치 담기
const queue = []
let start = 0, end = 0
for(let h = 0; h < H; h++) {
  for(let y = 0; y < N; y++) {
    for(let x = 0; x < M; x++) {
      if(box[h * N + y][x] === 1) {
        queue.push([x, y, h])
        end = queue.length
      }
    }
  }
}


// bfs
while(start !== end) {
  const [x, y, h] = queue[start]
  start++
  if(!checkIsInRange(x, y, h)) { continue }
  count = Math.max(count, box[h * N + y][x] - 1)
  for(let i = 0; i < direction.length; i++) {
    const [a, b, c] = direction[i]
    const nextX = x + a
    const nextY = y + b
    const nextH = h + c
    if(checkIsInRange(nextX, nextY, nextH) && box[nextH * N +nextY][nextX] === 0) {
      queue.push([nextX, nextY, nextH])
      end = queue.length
      box[nextH * N +nextY][nextX] = box[h * N + y][x] + 1
    }
  }
}

// 익지 않은 토마토가 있는지 확인
let isCompleted = true
for(let h = 0; h < H; h++) {
  for(let y = 0; y < N; y++) {
    for(let x = 0; x < M; x++) {
      if(box[h * N + y][x] === 0) {
        isCompleted = false
        break
      }
    }
  }
}

console.log(isCompleted ? count : -1)