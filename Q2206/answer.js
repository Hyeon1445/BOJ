const [size, ...inputs] = require('fs').readFileSync('Q2206/input.txt').toString().trim().split('\r\n')
const [N, M] = size.split(' ').map(Number)
const mapArr = inputs.map(input => input.split('').map(Number))
const visited = Array.from({ length: N }, () => Array(M).fill(false))
const visitedAfterBreakWall = Array.from({ length: N }, () => Array(M).fill(false))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let minCount = Infinity
const wall = 1

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < M && y < N
}

const bfs = () => {
  const queue = [] // [x, y, count, hasBrokenWall]
  let qStart = 0
  queue.push([0, 0, 1, false])
  visited[0][0] = true
  while(qStart !== queue.length) {
    const [x, y, count, hasBrokenWall] = queue[qStart]
    qStart++
    if(!isInRange(x, y)) { continue }
    const isDestination = x === M - 1 && y === N - 1
    if(isDestination) { 
      minCount = Math.min(minCount, count)
      break
    }
    for(let i = 0; i < direction.length; i++) {
      const [a, b] = direction[i]
      const nextX = x + a
      const nextY = y + b
      const nextCount = count + 1
      if(!isInRange(nextX, nextY)) { continue }
      if(mapArr[nextY][nextX] !== wall && !hasBrokenWall && !visited[nextY][nextX]) {
        queue.push([nextX, nextY, nextCount, hasBrokenWall])
        visited[nextY][nextX] = true
      }
      if(mapArr[nextY][nextX] !== wall && hasBrokenWall && !visitedAfterBreakWall[nextY][nextX]) {
        queue.push([nextX, nextY, nextCount, hasBrokenWall])
        visitedAfterBreakWall[nextY][nextX] = true
      }
      if(!hasBrokenWall && mapArr[nextY][nextX] === wall) {
        queue.push([nextX, nextY, nextCount, true])
        visited[nextY][nextX] = true
      }
    }
  }
}

bfs()
console.log(minCount === Infinity ? -1 : minCount)
