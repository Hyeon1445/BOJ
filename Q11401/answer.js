const [N, K] = require('fs').readFileSync('Q11401/input.txt').toString().trim().split(' ').map(Number)
let numerator = BigInt(1)
let dinominator = BigInt(1)
const mod = BigInt(1_000_000_007)
for(let i = N - K + 1; i <= N; i++) { numerator = (numerator * BigInt(i)) % mod }
for(let i = 1; i <= K; i++) { dinominator = (dinominator * BigInt(i)) % mod }
let p = 1_000_000_005
const binaryArr = []
while(p >= 1) {
  binaryArr.push(p % 2)
  p = parseInt(p / 2)
}
let num = BigInt(dinominator)
let dinominator2 = BigInt(1)
for(let i = 0; i < binaryArr.length; i++) {
  if(binaryArr[i]){
    dinominator2 = (dinominator2 * num) % mod
  }
  num = (num * num) % mod
}
console.log(((numerator * dinominator2) % mod).toString())
