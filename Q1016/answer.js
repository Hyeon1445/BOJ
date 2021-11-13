const inp = require('fs').readFileSync('Q1016/input.txt').toString().trim().split(' ')
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const minNum = parseInt(inp[0])
const maxNum = parseInt(inp[1])

const arr = new Array(maxNum - minNum + 1).fill(true)
const arrIndex = (idx) => idx - minNum

let squareRoot = 2
while (squareRoot**2 <= maxNum) {
  let num = 1
  let squareNum = squareRoot ** 2
  while (squareNum * num <= maxNum) {
    arr[arrIndex(squareNum * num)] = false
    num = num + 1
  }
  squareRoot = squareRoot + 1
}

let result = 0
for(let i = 0; i <= arrIndex(maxNum); i++) {
  if(arr[i]) { result++ }
}
console.log(result)

// 시간초과!!
