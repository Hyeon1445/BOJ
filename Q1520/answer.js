const [[M, N], ...inputs] = require('fs').readFileSync('Q1520/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]] // top, right, bottom, left
const dp = [...Array(M)].map(() => Array(N).fill(-1))
dp[M - 1][N - 1] = 1 // 도착 지점

const dfs = (x, y) => {
  if (dp[x][y] !== -1) { return dp[x][y] }
  let count = 0
  for (let i = 0; i < 4; i++) {
    const nextX = x + direction[i][0]
    const nextY = y + direction[i][1]
    const isInRange = nextX >= 0 && nextX < M && nextY >= 0 && nextY < N
    if (isInRange && inputs[x][y] > inputs[nextX][nextY]) {
      count += dfs(nextX, nextY)
    }
  }
  dp[x][y] = count // 방문한 곳은 count저장
  return count
}

console.log(dfs(0, 0))