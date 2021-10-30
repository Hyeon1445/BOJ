const inp = require('fs').readFileSync('Q13241/input.txt').toString().trim().split(' ')
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

const num1 = parseInt(inp[0])
const num2 = parseInt(inp[1])

for(let i = num1; i > 0; i--) {
  if(num1%i === 0 && num2%i === 0) {
    console.log(i * (num1 / i) * (num2 / i))
    return
  }
}


