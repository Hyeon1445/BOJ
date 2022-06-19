const [[N], ...inputs] = require('fs').readFileSync('Q2630/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
let blue = 0
let white = 0
const checkSquare = (x, y, size) => {
  let sum = 0
  for(let i = y; i < y + size; i++) {
    for(let j = x; j < x + size; j++) {
      sum += inputs[i][j]
    }
  }
  if(sum === size * size) {
    blue++
    return
  } else if(sum === 0) {
    white++
    return
  } else {
    const halfSize = size / 2
    checkSquare(x, y, halfSize)
    checkSquare(x + halfSize, y, halfSize)
    checkSquare(x, y + halfSize, halfSize)
    checkSquare(x + halfSize, y + halfSize, halfSize)
  }
}
checkSquare(0, 0, N)
console.log(white)
console.log(blue)