const [[N], ...inputs] = require('fs').readFileSync('Q7562/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]]

const checkInRange = (x, y, length) => {
  return x >= 0 && x < length && y >= 0 && y < length
}

for(let i = 0; i < N; i++) {
  const [length] = inputs[i * 3]
  const [startX, startY] = inputs[i * 3 + 1]
  const [endX, endY] = inputs[i * 3 + 2]
  const queue = []
  const chessboard = Array.from({ length }, () => Array(length).fill(0))
  chessboard[startY][startX] = 1
  queue.unshift([startX, startY])
  while(queue.length) {
    const [x, y] = queue.pop()
    const isDestination = x === endX && y === endY
    if(!checkInRange(x, y, length)) { continue }
    if(isDestination) { break }
    for(let j = 0; j < direction.length; j++) {
      const nextX = x + direction[j][0]
      const nextY = y + direction[j][1]
      const isNextPositionVisited = chessboard[nextY] && chessboard[nextY][nextX] !== 0
      if(checkInRange(nextX, nextY, length) && !isNextPositionVisited) {
        queue.unshift([nextX, nextY])
        chessboard[nextY][nextX] = chessboard[y][x] + 1
      }
    }
  }
  console.log(chessboard[endY][endX] - 1)
}

// bfs