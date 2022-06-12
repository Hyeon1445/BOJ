const inputs = require('fs').readFileSync('Q11053/input.txt').toString().trim().split('\r\n')[1].split(' ').map(Number)
const arr = Array(inputs.length).fill(0)
arr[0] = 1

for(let i = 1; i < inputs.length; i++) {
  for(let j = i - 1; j >= 0; j--) {
    if(inputs[i] > inputs[j] && arr[i] < arr[j]) {
      arr[i] = arr[j]
    }
  }
  arr[i]++
}
console.log(Math.max(...arr))