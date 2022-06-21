const [A, B, C] = require('fs').readFileSync('Q1629/input.txt').toString().trim().split(' ').map(Number)
const binaryArr = []
let value = BigInt(A) % BigInt(C)
let result = BigInt(1)
let num = B
while(num >= 1) {
  binaryArr.push(num % 2)
  num = parseInt(num / 2)
}
binaryArr.forEach(binary => {
  if(binary) { result = result * BigInt(value) % BigInt(C)}
  value = (value * value) % BigInt(C)
})
console.log(result.toString())