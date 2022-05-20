const inputs = require('fs').readFileSync('Q4344/input.txt').toString().trim().split('\r\n').splice(1)
const results = new Array(inputs.length).fill(0)
inputs.forEach((inp, index) => {
  const input = inp.split(' ')
  const count = +input[0]
  const arr = input.splice(1)
  const avg = arr.reduce((a, b) => +a + +b) / count
  arr.forEach(num => { if(+num > avg) { results[index] ++ }})
  results[index] = (results[index] / count * 100).toFixed(3) + '%'
})
console.log(results.join('\n'))