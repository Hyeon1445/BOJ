const [[N], ...inputs] = require('fs').readFileSync('Q11403/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const result = Array.from({ length: N }, () => Array(N).fill(0))

const dfs = (start, connectedNode, visited) => {
  for(let i = 0; i < N; i++) {
    if(inputs[connectedNode][i] && !visited[i]) {
      visited[i] = true
      result[start][i] = 1
      dfs(start, i, visited)
    }
  }
}

for(let i = 0; i < N; i++) {
  const visited = Array(N).fill(false)
  dfs(i, i, visited)
}

console.log(result.map(answer => answer.join(' ')).join('\n'))