const input = require('fs')
    .readFileSync('Q2675/input.txt')
    .toString()
    .trim()
    .split('\r\n')
    .splice(1)
    .map(inp => inp.split(' '))
const result = []
input.forEach((inp) => {
  const count = +inp[0]
  const splittedStr = inp[1].split('')
  splittedStr.forEach((alphanumeric, index) => splittedStr[index] = alphanumeric.repeat(count))
  result.push(splittedStr.join(''))
})
console.log(result.join('\n'))