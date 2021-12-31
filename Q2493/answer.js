const inp = require('fs').readFileSync('Q2493/input.txt').toString().trim().split('\r\n')
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split('\r\n')

const n = +inp[0]
const arr = inp[1].split(' ').map(a => +a)

const stack = [{ idx: 0, val: 0 }]
const result = []

for (let i = 0; i < n; i++) {
  while (stack[stack.length - 1].val > 0 && stack[stack.length - 1].val <= arr[i]) {
    stack.pop()
  }
  result.push(stack[stack.length - 1].idx)
  stack.push({ idx: i + 1, val: arr[i] })
}

console.log(result.join(' '))

