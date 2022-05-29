const inputs = require('fs').readFileSync('Q9020/input.txt').toString().trim().split('\r\n').map(num => +num).splice(1)
const getResults = (inputs) => {
  const max = 10000
  const primeNumers = new Array(max).fill(false)
  for(let i = 0; i < max; i++) {
    for(let j = 2; j <= i; j++) {
      if(j * j > i) {
        primeNumers[i - 1] = true
        break
      } else if (i % j === 0) { break }
    }
  }
  return inputs.map(input => {
    const half = input / 2
    for(let sub = 0; sub < half; sub++) {
      if(primeNumers[half + sub - 1] && primeNumers[half - sub - 1]) {
        return [half - sub, half + sub].join(' ')
      }
    }
    return '-1'
  })
}
console.log(getResults(inputs).join('\n'))