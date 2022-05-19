const inputs = require('fs').readFileSync('Q0000/input.txt').toString().trim().split('\r\n').splice(1)
// const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').splice(1)
const result = inputs.map((input) => {
  const score = []
  input.split('').forEach((value, index) => {
    if (value === 'X') { score.push(0) }
    else { score.push(index === 0 ? 1 : score[index - 1] + 1) }
  })
  return score.reduce((a, b) => a + b)
})
console.log(result.join('\n'))