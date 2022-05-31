const inputs = require('fs').readFileSync('Q14425/input.txt').toString().trim().split('\r\n')
const [n, m] = inputs[0].split(' ').map(num => +num)
const wordsSet = new Set(inputs.splice(1, n))
const wordsToCheck = inputs.splice(1)
let answer = 0
wordsToCheck.forEach(word => { if(wordsSet.has(word)) { answer++ }})
console.log(answer)