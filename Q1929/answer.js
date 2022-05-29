const [m, n] = require('fs').readFileSync('Q1929/input.txt').toString().split(' ')
const getPrimeNumbers = (m, n) => {
  const result = []
  for(let i = m; i <= n; i++) {
    for(let j = 2; j <= i; j++) {
      if(j * j > i) { 
        result.push(i)
        break
      }
      else if(i % j === 0) { break }
    }
  }
  return result
}
console.log(getPrimeNumbers(+m, +n).join('\n'))