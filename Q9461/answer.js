const inputs = require('fs').readFileSync('Q9461/input.txt').toString().trim().split('\r\n').splice(1).map(num => +num)
const arr = [1, 1, 1]
const result = []
for(let i = 3; i < 100; i++) {
  arr[i] = arr[i - 2] + arr[i - 3]
}
inputs.forEach(input => {
  result.push(arr[input - 1])
})
console.log(result.join('\n'))