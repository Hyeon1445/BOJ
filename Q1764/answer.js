const inputs = require('fs').readFileSync('Q1764/input.txt').toString().trim().split('\r\n')
const [n, m] = inputs[0].split(' ').map(num => +num)
const name1 = new Set(inputs.splice(1, n))
const name2 = new Set(inputs.splice(1, m))
const answers = []
name1.forEach(name => { if(name2.has(name)) { answers.push(name) } })
answers.sort()
console.log(answers.length)
console.log(answers.join('\n'))