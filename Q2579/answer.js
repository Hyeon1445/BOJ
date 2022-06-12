const [count, ...scores] = require('fs').readFileSync('Q2579/input.txt').toString().trim().split('\r\n').map(Number)
const results = []
results.push(scores[0])
if(count >= 2) { results.push(scores[0] + scores[1]) }
if(count >= 3) { results.push(Math.max(scores[0] + scores[2], scores[1] + scores[2])) }
for(let i = 3; i < count; i++) {
  let result
  result = Math.max(results[i - 3] + scores[i - 1], results[i - 2]) + scores[i]
  results.push(result)
}
console.log(results[count - 1])