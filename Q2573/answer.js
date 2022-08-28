const [[N, M], ...inputs] = require('fs').readFileSync('Q2573/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < M && y < N
}

// 얼음 녹이기
const meltIce = () => {
  for(let y = 0; y < N; y++) {
    for(let x = 0; x < M; x++) {
      if(inputs[y][x] === 0) {
        for(let d = 0; d < direction.length; d++) {
          const [a, b] = direction[d]
          const nextX = x + a
          const nextY = y + b
          if(isInRange(nextX, nextY) && inputs[nextY][nextX] > 0) {
            inputs[nextY][nextX] > 1 ? inputs[nextY][nextX]-- : inputs[nextY][nextX] = -1
          }
        }
      }
    }
  }
  for(let y = 0; y < N; y++) {
    for(let x = 0; x < M; x++) {
      if(inputs[y][x] === -1) {
        inputs[y][x] = 0
      }
    }
  }
}

// bfs
const getIceCount = () => {
  let count = 0
  const visited = Array.from({ length: N }, () => Array(M).fill(0))
  for(let y = 0; y < N; y++) {
    for(let x = 0; x < M; x++) {
      if(!visited[y][x] && inputs[y][x]) {
        count++
        const queue = [[x, y]]
        let qStart = 0
        while(qStart !== queue.length) {
          const [xPos, yPos] = queue[qStart]
          qStart++
          for(let d = 0; d < direction.length; d++) {
            const [a, b] = direction[d]
            const nextX = a + xPos
            const nextY = b + yPos
            if(isInRange(nextX, nextY) && !visited[nextY][nextX] && inputs[nextY][nextX]) {
              visited[nextY][nextX] = count
              queue.push([nextX, nextY])
            }
          }
        }
      }
    }
  }
  return count
}

let answer = 1
while(1) {
  meltIce()
  const count = getIceCount()
  if(count === 1) {
    answer++
  } else if(count > 1) {
    console.log(answer)
    break
  } else {
    console.log(count)
    break
  }
}