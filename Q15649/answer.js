const [n, m] = require('fs').readFileSync('Q15649/input.txt').toString().split(' ').map(Number)
const results = []
const isVisited = Array(n).fill(false)
const temp = []
const dfs = (count) => {
  if(count === m) {
    results.push(temp.join(' '))
    return
  }
  for(let i = 0; i < n; i++) {
    if(!isVisited[i]) {
      isVisited[i] = true
      temp.push(i + 1)
      dfs(count + 1)
      isVisited[i] = false
      temp.pop()
    }
  }
}
dfs(0)
console.log(results.join('\n'))