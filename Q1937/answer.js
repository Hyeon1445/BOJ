const [[n], ...inputs] = require('fs').readFileSync('Q1937/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let maxValue = 0
const visited = Array.from({ length: n }, () => Array(n).fill(0))

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < n && y < n
}

const dfs = (x, y) => {
  if(!visited[y][x]) {
    visited[y][x] = 1
    let tempMax = 0
    for(let d = 0; d < direction.length; d++) {
      const [a, b] = direction[d]
      const nextX = x + a
      const nextY = y + b
      if(isInRange(nextX, nextY) && inputs[nextY][nextX] > inputs[y][x]) {
        tempMax = Math.max(dfs(nextX, nextY), tempMax)
      }
    }
    visited[y][x] += tempMax
  }
  return visited[y][x]
}


for(let y = 0; y < n; y++) {
  for(let x = 0; x < n; x++) {
    maxValue = Math.max(dfs(x, y), maxValue)
  }
}
console.log(maxValue)