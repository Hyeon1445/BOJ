const [[N], ...inputs] = require('fs').readFileSync('Q10866/input.txt').toString().trim().split('\r\n').map(input => input.split(' '))
const deque = []
const result = []
for(let i = 0; i < N; i++) {
  switch(inputs[i][0]) {
    case 'push_front':
      deque.unshift(+inputs[i][1])
      break
    case 'push_back':
      deque.push(+inputs[i][1])
      break
    case 'pop_front':
      result.push(deque.shift() ?? -1)
      break
    case 'pop_back':
      result.push(deque.pop() ?? -1)
      break
    case 'size':
      result.push(deque.length)
      break
    case 'empty':
      result.push(deque.length ? 0 : 1)
      break
    case 'front':
      result.push(deque[0] ?? -1)
      break
    case 'back':
      result.push(deque[deque.length - 1] ?? -1)
      break
  }
}
console.log(result.join('\n'))