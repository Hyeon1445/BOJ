const [[count], ...inputs] = require('fs').readFileSync('Q18258/input.txt').toString().trim().split('\r\n').map(input => input.split(' '))
const arr = []
const result = []
let queueLength = 0
inputs.forEach(input => {
  switch(input[0]) {
    case 'push':
      queueLength++
      arr.push(+input[1])
      break
    case 'pop':
      if(queueLength > 0) {
        result.push(arr[arr.length - queueLength])
        queueLength--
      } else {
        result.push(-1)
      }
      break
    case 'size':
      result.push(queueLength)
      break
    case 'empty':
      result.push(queueLength ? 0 : 1)
      break
    case 'front':
      result.push(queueLength ? arr[arr.length - queueLength] : -1)
      break
    case 'back':
      result.push(queueLength ? arr[arr.length - 1] : -1)
      break
  }
})
console.log(result.join('\n'))