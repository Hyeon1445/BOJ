const [[n, m], ...inputs] = require('fs').readFileSync('Q11660/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const testCase = inputs.splice(n)
const results = []
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    if(i === 0 && j === 0) { continue }
    else if(i === 0) {
      inputs[i][j] += inputs[i][j - 1]
    } else if(j === 0) {
      inputs[i][j] += inputs[i - 1][j]
    } else {
      inputs[i][j] += inputs[i][j - 1] + inputs[i - 1][j] - inputs[i - 1][j - 1]
    }
  }
}
testCase.forEach(([x1, y1, x2, y2]) => {
  let result = inputs[x2 - 1][y2 - 1]
  if(x1 >= 2) { result -= inputs[x1 - 2][y2 - 1] }
  if(y1 >= 2) { result -= inputs[x2 - 1][y1 - 2] }
  if(x1 >= 2 && y1 >= 2) { result += inputs[x1 - 2][y1 - 2] }
  results.push(result)
})

console.log(results.join('\n'))