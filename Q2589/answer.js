const [size, ...inputs] = require('fs').readFileSync('Q2589/input.txt').toString().trim().split('\r\n')
const [R, C] = size.split(' ').map(Number)
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let answer = 1

const isInRange = (x, y) => {
  return x >=0 && y >= 0 && x < C && y < R
}

const bfs = (x, y) => {
  const visited = Array.from({ length: R }, () => Array(C).fill(0))
  const queue = [[x, y]]
  let qStart = 0
  visited[y][x] = 1
  while(qStart !== queue.length) {
    const [xPos, yPos] = queue[qStart]
    qStart++
    for(let d = 0; d < direction.length; d++) {
      const [a, b] = direction[d]
      const nextX = a + xPos
      const nextY = b + yPos
      if(isInRange(nextX, nextY) && !visited[nextY][nextX] && inputs[nextY][nextX] === 'L') {
        queue.push([nextX, nextY])
        visited[nextY][nextX] = visited[yPos][xPos] + 1
        if(visited[nextY][nextX] > answer) {
          answer = visited[nextY][nextX]
        }
      }
    }
  }
}

for(let y = 0; y < R; y++) {
  for(let x = 0; x < C; x++) {
    if(inputs[y][x] === 'L') {
      bfs(x, y)
    }
  }
}

console.log(answer - 1)