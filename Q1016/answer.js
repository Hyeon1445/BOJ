const inp = require('fs').readFileSync('Q1016/input.txt').toString().trim().split(' ')
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const minNum = parseInt(inp[0])
const maxNum = parseInt(inp[1])

const arr = new Array(maxNum - minNum + 1).fill(false)
let result = maxNum - minNum + 1
for(let i = 2; i*i <= maxNum; i++) {
  for(let j = parseInt(minNum/(i*i)); i*i*j <= maxNum; j++) {
    if(i*i*j > maxNum) { break }
    if(i*i*j < minNum) { continue } 
    if(!arr[i*i*j - minNum]) {
      arr[i*i*j - minNum] = true
      result = result - 1
    }
  }
}
console.log(result)
