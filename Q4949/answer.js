const inputs = require('fs').readFileSync('Q4949/input.txt').toString().trim().split('\r\n')
const result = []
for(let i = 0; i < inputs.length - 1; i++) {
  let answer = 'yes'
  let stack = []
  for(let j = 0; j < inputs[i].length; j++) {
    if(inputs[i][j] === '[' || inputs[i][j] === '(') {
      stack.push(inputs[i][j])
    }
    if((inputs[i][j] === ']' && stack.pop() !== '[') || (inputs[i][j] === ')' && stack.pop() !== '(')) {
      answer = 'no'
      break
    }
  }
  result.push(stack.length ? 'no' : answer)
}
console.log(result.join('\n'))