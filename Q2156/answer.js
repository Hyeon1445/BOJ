const [count, ...arr] = require('fs').readFileSync('Q2156/input.txt').toString().trim().split('\r\n').map(Number)
const result = [arr[0]]
if(count > 1) { result.push(arr[0] + arr[1]) }
if(count > 2) { result.push(Math.max(arr[0] + arr[2], arr[1] + arr[2])) }
for(let i = 3; i < count; i++) {
  result.push(Math.max(
    result[i - 2] + arr[i],
    Math.max(result[i - 3], result[i - 4] || 0) + arr[i - 1] + arr[i]
    )
  )
}
console.log(Math.max(...result))