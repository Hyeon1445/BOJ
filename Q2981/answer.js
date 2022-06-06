const inputs = require('fs').readFileSync('Q2981/input.txt').toString().trim().split('\r\n').splice(1).map(num => +num)
const diff = []
const GCD = (n1, n2) => n1 % n2 === 0 ? n2 : GCD(n2, n1 % n2)
for(let i = 0; i < inputs.length - 1; i++) { diff.push(Math.abs(inputs[i + 1] - inputs[i])) }
const GCDValue = diff.reduce((a, b) => GCD(a, b))
const result = []
for(let i = 2; i <= GCDValue; i++) {
  if(GCDValue % i === 0) { result.push(i) }
}
console.log(result.join(' '))