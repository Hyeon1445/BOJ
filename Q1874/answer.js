const [count, ...inputs] = require('fs').readFileSync('Q1874/input.txt').toString().trim().split('\r\n').map(Number)
const result = []
const stack = []
let index = 1
let isPossible = true
inputs.forEach(input => {
  if(input >= index) {
    for(let i = index; i <= input; i++) {
      result.push('+')
      stack.push(index)
      index++
    }
    result.push('-')
    stack.pop()
  } else {
    const number = stack.pop()
    result.push('-')
    if(input !== number) {
      isPossible = false
    }
  }
})
console.log(isPossible ? result.join('\n') : 'NO')