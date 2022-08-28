const { count } = require('console')

const [[N, L, R], ...inputs] = require('fs').readFileSync('Q16234/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let answer = 0
const status = {
  default: 0,
  visited: -1,
  open: -2,
  // openArea: < 0,
}

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < N && y < N
}

const canOpen = (val1, val2) => {
  const sub = Math.abs(val1 - val2)
  return sub >= L && sub <= R
}

const bfs = () => {
  let isMoved = false
  const area = Array.from({ length: N * 2 - 1}, () => Array(N  * 2 - 1).fill(status.default))
  let count = 1
  for(let yPos = 0; yPos < N; yPos++) {
    for(let xPos = 0; xPos < N; xPos++) {
      const queue = []
      let qStart = 0
      let hasOpenArea = false
      queue.push([xPos, yPos])
      while(qStart !== queue.length) {
        const [x, y] = queue[qStart]
        qStart++
        for(let d = 0; d < direction.length; d++) {
          const [a, b] = direction[d]
          const nextX = a + x
          const nextY = b + y
          const nextWallX = nextX + x
          const nextWallY = nextY + y
          if(isInRange(nextX, nextY) && area[nextWallY][nextWallX] === status.default && canOpen(inputs[y][x], inputs[nextY][nextX])) {
            // open
            queue.push([nextX, nextY])
            area[nextWallY][nextWallX] = status.open
            area[y * 2][x * 2] = count
            area[nextY * 2][nextX * 2] = count
            isMoved = true
            hasOpenArea = true
          } else if (isInRange(nextX, nextY) && area[nextWallY][nextWallX] === status.default){
            // cannot open
            area[nextWallY][nextWallX] = status.visited
          }
        }
      }
      if(hasOpenArea) {
        count++
      }
    }
  }

  for(let c = 1; c <= count; c++) {
    let areaCount = 0
    let sum = 0
    for(let i = 0; i < N * 2 - 1; i += 2) {
      for(let j = 0; j < N * 2 - 1; j += 2) {
        if(area[i][j] === c) {
          areaCount++
          sum += inputs[i / 2][j / 2]
        }
      }
    }
    const newValue = Math.floor(sum / areaCount)
    for(let i = 0; i < N * 2 - 1; i += 2) {
      for(let j = 0; j < N * 2 - 1; j += 2) {
        if(area[i][j] === c) {
          inputs[i / 2][j / 2] = newValue
        }
      }
    }
  }
  return isMoved
}

let isFinished = false
while(!isFinished) {
  isFinished = !bfs()
  if(!isFinished) {
    answer++
  }
}
console.log(answer)