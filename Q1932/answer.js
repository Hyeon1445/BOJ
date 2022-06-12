const inputs = require('fs').readFileSync('Q1932/input.txt').toString().trim().split('\r\n').splice(1).map(inp => inp.split(' ').map(Number))
for(let i = inputs.length - 2; i >= 0; i--) {
  for(let j = 0; j < inputs[i].length; j++) {
    inputs[i][j] += Math.max(inputs[i + 1][j], inputs[i + 1][j + 1])
  }
}
console.log(inputs[0][0])