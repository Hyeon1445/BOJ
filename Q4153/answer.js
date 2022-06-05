const inputs = require('fs').readFileSync('Q4153/input.txt').toString().trim().split('\r\n').map(inp => inp.split(' ').map(num => +num))
const result = []
inputs.forEach(triangle => {
  triangle.sort((a, b) => a - b)
  result.push(triangle[0]**2 + triangle[1]**2 === triangle[2]**2 ? "right" : "wrong")
})
console.log(result.splice(0, inputs.length - 1).join('\n'))