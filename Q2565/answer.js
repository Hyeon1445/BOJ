const [[count], ...inputs] = require('fs').readFileSync('Q2565/input.txt').toString().trim().split('\r\n').map(inp => inp.split(' ').map(Number))
inputs.sort((a, b) => a[0] - b[0])
const arr = Array(count).fill(0)
arr[0] = 1
for(let i = 1; i < count; i++) {
  for(let j = i - 1; j >= 0; j--) {
    if(inputs[i][1] > inputs[j][1] && arr[i] < arr[j]) {
      arr[i] = arr[j]
    }
  }
  arr[i]++
}
console.log(count - Math.max(...arr))