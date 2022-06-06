const [n, m] = require('fs').readFileSync('Q15651/input.txt').toString().split(' ').map(Number)
const results = []
const temp = []
const dfs = (count) => {
  if(count === m) {
    results.push(temp.join(' '))
    return
  }
  for(let i = 1; i <= n; i++) {
    temp.push(i)
    dfs(count + 1)
    temp.pop()
  }
}
dfs(0)
console.log(results.join('\n'))
