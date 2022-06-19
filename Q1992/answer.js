const [[N], ...inputs] = require('fs').readFileSync('Q1992/input.txt').toString().trim().split('\r\n').map(input => input.split('').map(Number))
const zipImage = (x, y, size) => {
  let sum = 0
  for(let i = y; i < y + size; i++) {
    for(let j = x; j < x + size; j++) {
      sum += inputs[i][j]
    }
  }
  if(sum === size * size) {
    return '1'
  } else if(sum === 0) {
    return '0'
  } else {
    const halfSize = size / 2
    const result = [
      zipImage(x, y, halfSize),
      zipImage(x + halfSize, y, halfSize),
      zipImage(x, y + halfSize, halfSize),
      zipImage(x + halfSize, y + halfSize, halfSize)
    ]
    return `(${result.join('')})`
  }
}
console.log(zipImage(0, 0, inputs.length))