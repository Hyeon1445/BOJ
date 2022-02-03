const [a, b] = require('fs').readFileSync('Q9251/input.txt').toString().split('\r\n')
// const [a, b] = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const arr = []
for(let i = 0; i < b.length + 1; i++) {
  arr.push(new Array(a.length + 1).fill(0))
}

for(let i = 1; i <= b.length; i++) {
  for(let j = 1; j <= a.length; j++) {
    if(b[i - 1] === a[j - 1]){
      arr[i][j] = arr[i - 1][j - 1] + 1
    } else {
      arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1])
    }
  }
}

console.log(arr[b.length][a.length])