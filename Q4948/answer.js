const inputs = require('fs').readFileSync('Q4948/input.txt').toString().trim().split('\r\n').map(num => +num)
const getNumberOfPrimeNumber = (inputs) => {
  const results = []
  let i = 0
  while(1) {
    const n = inputs[i]
    let count = 0
    if(!n) { break }
    for(let j = n + 1; j <= 2 * n; j++) {
      for(let k = 2; k <= j; k++) {
        if(k * k > j) {
          count++
          break
        } else if(j % k === 0) {
          break
        }
      }
    }
    i++
    results.push(count)
  }
  return results
}
console.log(getNumberOfPrimeNumber(inputs).join('\n'))
