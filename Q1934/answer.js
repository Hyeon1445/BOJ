const inputs = require('fs').readFileSync('Q1934/input.txt').toString().trim().split('\r\n').splice(1).map(testCase => testCase.split(' ').map(num => +num))
const GCD = (n1, n2) => n1 % n2 === 0 ? n2 : GCD(n2, n1 % n2)
const LCM = (n1, n2) => n1 * n2 / GCD(n1, n2)
const results = []
for(const numbers of inputs) {
  const [n1, n2] = numbers
  results.push(LCM(n1, n2))
}
console.log(results.join('\n'))