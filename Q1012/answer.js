const [[T], ...inputs] = require('fs').readFileSync('Q1012/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let index = 0
let count = 0

const dfs = (x, y, maxX, maxY, arr) => {
  if(x < 0 || y < 0 || x > maxX || y > maxY) { return }
  arr[y][x] = 2
  for(let i = 0; i < direction.length; i++) {
    if(arr[y + direction[i][1]] && arr[y + direction[i][1]][x + direction[i][0]] === 1) {
      dfs(x + direction[i][0], y + direction[i][1], maxX, maxY, arr)
    }
  }
}

for(let i = 0; i < T; i++) {
  const [M, N, K] = inputs[index]
  const arr = Array.from({length: N}, () => Array(M).fill(0))
  for(let j = 1; j <= K; j++) { // 배추 심기
    const [x, y] = inputs[index + j]
    arr[y][x] = 1
  }
  count = 0
  for(let y = 0; y < N; y++) {
    for(let x = 0; x < M; x++) {
      if(arr[y][x] === 1) {
        count++
        dfs(x, y, M, N, arr)
      }
    }
  }
  index += K + 1
  console.log(count)
}