const [size, ...inputs] = require('fs').readFileSync('Q1987/input.txt').toString().trim().split('\r\n')
const [R, C] = size.split(' ').map(Number)
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let maxCount = 1

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < C && y < R
}

// dfs
const alphabet = {}
const dfs = (x, y, count) => {
  maxCount = Math.max(count, maxCount)
  for(let d = 0; d < direction.length; d++) {
    const [a, b] = direction[d]
    const nextX = x + a
    const nextY = y + b
    if(isInRange(nextX, nextY) && !alphabet[inputs[nextY][nextX]]) {
      alphabet[inputs[nextY][nextX]] = true
      dfs(nextX, nextY, count + 1)
      alphabet[inputs[nextY][nextX]] = false
    }
  }
}

alphabet[inputs[0][0]] = true
dfs(0, 0, 1)
console.log(maxCount)