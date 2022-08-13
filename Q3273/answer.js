const [[n], inputs, [x]] = require('fs').readFileSync('Q3273/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
let count = 0
inputs.sort((a, b) => a- b)
for(let i = 0; i < +n; i++) {
  for(let j = i + 1; j < +n; j++){
    const sum = inputs[i] + inputs[j]
    if(sum === x) { count++ }
    if(sum > x) { break }
  }
}
console.log(count)