let inp = require('fs').readFileSync('Q10157/input.txt').toString().trim().split('\n')

let col = parseInt(inp[0].split(' ')[0])
let row = parseInt(inp[0].split(' ')[1])
let num = parseInt(inp[1])

let x = 1
let y = 1
let count = num

while(1) {
  if(count - row <= 0) {
    console.log('a', x, y + count - 1)
    return
  }
  y = y + row - 1
  count = count - row + 1
  if(count - col <= 0) {
    console.log('b', x + count - 1, y)
    return
  }
  x = x + col - 1
  count = count - col
  console.log('xcoun', x,y, count)
  if(count - row <= 0) {
    console.log('c', x, y - count)
    return
  }
  console.log('xcoun', x, count)
}