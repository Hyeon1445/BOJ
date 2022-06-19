const [[N], ...inputs] = require('fs').readFileSync('Q1780/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const result = [0, 0, 0]
const checkPaper = (x, y, size) => {
  const count = [0, 0, 0]
  for(let i = y; i < y + size; i++) {
    for(let j = x; j < x + size; j++) {
      count[inputs[i][j] + 1]++
    }
  }
  for(let i = 0; i < 3; i++) {
    if(count[i] === size * size) {
      result[i]++
      return
    }
  }
  const nextSize = size / 3
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      checkPaper(x + (nextSize * j), y + (nextSize * i), nextSize)
    }
  }
}
checkPaper(0, 0, inputs.length)
console.log(result.join('\n'))