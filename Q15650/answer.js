const [n, m] = require('fs').readFileSync('Q15650/input.txt').toString().split(' ').map(Number)
const results = []
const temp = []
const dfs = (count, minValue) => {
  if(count === m ) {
    results.push(temp.join(' '))
    return
  }
  for(let i = minValue; i <= n; i++) {
    temp.push(i)
    dfs(count + 1, i + 1)
    temp.pop()
  }
}
dfs(0, 1)
console.log(results.join('\n'))
