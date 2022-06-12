const input = +require('fs').readFileSync('Q10844/input.txt')
let count = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
for(let i = 1; i < input; i++) {
  const newCount = Array(10).fill(null)
  for(let j = 0; j <= 9; j++) {
    newCount[j] = ((count[j - 1] || 0)+ (count[j + 1] || 0)) % 1_000_000_000
  }
  count = newCount
}
console.log(count.reduce((a, b) => (a + b) % 1_000_000_000))