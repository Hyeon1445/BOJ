const [[N, M], inputs] = require('fs').readFileSync('Q1021/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
let arr = Array.from(Array(N), (_, index) => N - index)
let result = 0
for(let i = 0; i < inputs.length; i++) {
  for(let j = 0; j < arr.length; j++) {
    if(inputs[i] === arr[arr.length - 1 - j]) {
      const temp = arr.splice(arr.length - j)
      arr = [...temp, ...arr]
      result += j
      break
    }
    if(inputs[i] === arr[j]) {
      const temp = arr.splice(0, j + 1)
      arr = [...arr, ...temp]
      result += j + 1
      break
    }
  }
  arr.pop()
}
console.log(result)