const [n, k] = require('fs').readFileSync('Q11051/input.txt').toString().trim().split(' ').map(Number)
const arr = Array.from(Array(n + 1), () => Array(k + 1).fill(0))
for(let i = 0; i <= n; i++) {
  for(let j = 0; j <= k; j++) {
    if(i === j || j === 0 || i === 0) { arr[i][j] = 1 }
    else { arr[i][j] = (arr[i - 1][j - 1] + arr[i - 1][j]) % 10_007 }
  }
}
console.log(arr[n][k])