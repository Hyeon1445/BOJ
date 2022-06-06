const inputs = require('fs').readFileSync('Q5086/input.txt').toString().trim().split('\r\n').map(testCase => testCase.split(' ').map(num => +num))
const result = []
let i = 0
while(1) {
  const [n1, n2] = inputs[i]
  if(n1 === 0 && n2 === 0) { break }
  else if(n2 % n1 === 0) { result.push('factor') }
  else if(n1 % n2 === 0) { result.push('multiple') }
  else { result.push('neither') }
  i++
}
console.log(result.join('\n'))