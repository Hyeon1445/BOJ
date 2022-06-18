const [[count], ...inputs] = require('fs').readFileSync('Q10828/input.txt').toString().trim().split('\r\n').map(input => input.split(' '))
const stack = []
const result = []
inputs.forEach(input => {
  switch(input[0]) {
    case 'push':
      stack.push(+input[1])
      break
    case 'pop':
      const num = stack.pop()
      result.push(num === undefined ? -1 : num)
      break
    case 'size':
      result.push(stack.length)
      break
    case 'empty':
      result.push(stack.length ? 0 : 1)
      break
    case 'top':
      result.push(stack.length ? stack[stack.length - 1] : -1)
      break
  }
})
console.log(result.join('\n'))