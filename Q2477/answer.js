const inputs = require('fs').readFileSync('Q2477/input.txt').toString().trim().split('\r\n')
const field = inputs.splice(1).map(vector => vector.split(' ').map(num => +num))
const direction = [0, 0, 0, 0]
let dotIndex = 5
field.forEach(inp => { direction[inp[0] - 1]++ })
if(direction[field[5][0] - 1] !== 1 || direction[field[4][0] - 1] === 1) {
  for(let i = 0; i < field.length; i++) {
    if(direction[field[i][0] - 1] === 1) {
      dotIndex = i
      break
    } 
  }
}
const bigSquareSize = field[dotIndex][1] * field[(dotIndex + 1) % 6][1]
const smallSquareSize = field[(dotIndex + 3) % 6][1] * field[(dotIndex + 4) % 6][1]
const fieldSize = bigSquareSize - smallSquareSize
console.log(fieldSize * +inputs[0])