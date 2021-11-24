const inp = require('fs').readFileSync('Q1051/input.txt').toString().trim().split('\n')
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const row = parseInt(inp[0].split(' ')[0])
const col = parseInt(inp[0].split(' ')[1])
const arr = inp.slice(1, inp.length).map(a => (a.split('').map(Number)))
let result = 0
for(let i = Math.min(row, col); i > 0; i--) {
  for(let j = 0; j < col - i + 1; j++) {
    for(let k = 0; k < row - i + 1; k++) {
      if(arr[k][j] === arr[k][j + i - 1] && arr[k + i - 1][j] === arr[k + i - 1][j + i - 1] && arr[k][j] === arr[k + i - 1][j + i - 1]) {
        result = parseInt(i) * parseInt(i)
      }
    }
  }
  if(result) { break }
}
console.log(result)

// 정답 split('\n')
// 오답일 때 런타임 에러 뜬 이유: split('\r\n')