const [[count], ...inputs] = require('fs').readFileSync('Q1931/input.txt').toString().trim().split('\r\n').map(inp => inp.split(' '))
inputs.sort((a, b) => +a[0] === +b[0] ? +a[1] - +b[1] : +a[0] - +b[0])
let result = 1
let selectedTime = inputs[0]
for(let i = 1; i < +count; i++) {
  if(+selectedTime[1] <= +inputs[i][0]) {
    result++
    selectedTime = inputs[i]
  } else if(+selectedTime[1] >= +inputs[i][1]) {
    selectedTime = inputs[i]
  }
}
console.log(result)