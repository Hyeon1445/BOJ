const [N, K] = require('fs').readFileSync('Q11866/input.txt').toString().trim().split(' ').map(Number)
const result = []
const circle = Array.from(Array(N), (_, index) => index + 1)
let index = K - 1
for(let i = 0; i < N; i++) {
  result.push(circle.splice(index, 1)[0])
  index = (index + K - 1) % circle.length
}
console.log(`<${result.join(', ')}>`)