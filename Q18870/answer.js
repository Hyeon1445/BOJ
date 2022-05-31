const inputs = require('fs')
  .readFileSync('Q18870/input.txt')
  .toString()
  .trim()
  .split('\r\n')[1]
  .split(' ')
  .map(num => +num)

const inputsSet = [...new Set(inputs)]
inputsSet.sort((a, b) => a - b)
const answer = {}
inputsSet.forEach((num, index) => { answer[num] = index })
console.log(inputs.map(num => answer[num]).join(' '))