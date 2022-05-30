const inputs = require('fs')
  .readFileSync('Q7568/input.txt')
  .toString()
  .trim()
  .split('\r\n')
  .splice(1)
  .map(input => input.split(' ').map(num  => +num))

const count = inputs.length
const result = new Array(count).fill(1)
inputs.forEach(([w1, h1], index) => {
  inputs.forEach(([w2, h2]) => {
    if(w1 < w2 && h1 < h2) { result[index]++ }
  })
})
console.log(result.join(' '))