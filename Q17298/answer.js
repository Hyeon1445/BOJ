const [n, inp] = require("fs").readFileSync('Q17298/input.txt').toString().trim().split('\r\n')
// const [n, inp] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = inp.split(' ')
const result = []
const stack = []

for(let i = +n - 1; i >= 0; i--) {
  while(stack.length && stack[stack.length - 1] <= +arr[i]) { stack.pop() }
  result.push(stack.length ? stack[stack.length - 1] : -1)
  stack.push(+arr[i])
}

console.log(result.reverse().join(' '))