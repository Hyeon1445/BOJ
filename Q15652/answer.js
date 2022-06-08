const [n, m] = require('fs').readFileSync('Q15652/input.txt').toString().split(' ').map(num => +num)

const results = []
const temp = []
const dfs = (count, num) => {
  if(count === m) {
    results.push(temp.join(' '))
    return
  }
  for(let i = num; i <= n; i++) {
    temp.push(i)
    dfs(count + 1, i)
    temp.pop()
  }
}
dfs(0, 1)
console.log(results.join('\n'))