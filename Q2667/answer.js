const [len, ...inputs] = require('fs').readFileSync('Q2667/input.txt').toString().trim().split('\r\n').map(input => input.split('').map(Number))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
const result = []
let count = 0
let N = len[0]
if(len.length === 2) {
  N = len[0] * 10 + len[1]
}

const dfs = (i, j) => {
  if(i < 0 || j < 0 || i >= N || j >= N || inputs[i][j] !== 1) { return }
  count++
  inputs[i][j] = 2
  for(let k = 0; k < direction.length; k++) {
    const [x, y] = direction[k]
    dfs(i + y, j + x)
  }
}

for(let a = 0; a < N; a++) {
  for(let b = 0; b < N; b++) {
    count = 0
    dfs(b, a)
    if(count > 0) { result.push(count) }
  }
}

result.sort((a, b) => a - b)
console.log(result.length)
console.log(result.join('\n'))