const inputs = require('fs').readFileSync('Q3036/input.txt').toString().trim().split('\r\n')[1].split(' ').map(num => +num)
const GCD = (n1, n2) => n1 % n2 === 0 ? n2 : GCD(n2, n1 % n2)
const result = []
for(let i = 1; i < inputs.length; i++) {
  const GCDValue = GCD(inputs[0], inputs[i])
  result.push(`${inputs[0] / GCDValue}/${inputs[i] / GCDValue}`)
}
console.log(result.join('\n'))