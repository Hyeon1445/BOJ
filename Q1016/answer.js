const inp = require('fs').readFileSync('Q1016/input.txt').toString().split(' ')
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const minNum = parseInt(inp[0])
const maxNum = parseInt(inp[1])

const arr = new Array(maxNum - minNum + 1)
let result = maxNum - minNum + 1
for(let squareRoot = 2; squareRoot**2 <= maxNum; squareRoot++) {
  for(let num = 1; (squareRoot**2)*num <= maxNum; num++) {
    if(!arr[(squareRoot**2)*num]) {
      arr[(squareRoot**2)*num] = true
      result = result - 1
    }
  }
}
console.log(result)

// 메모리초과