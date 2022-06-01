const inputs = require('fs').readFileSync('Q10816/input.txt').toString().trim().split('\r\n')
const sgCards = inputs[1].split(' ').map(num => +num)
const cards = inputs[3].split(' ').map(num => +num)
const counts = {}
sgCards.forEach(card => { counts[card] ? counts[card]++ : counts[card] = 1 })
const answers = []
cards.forEach(card => { answers.push(counts[card] ?? 0) })
console.log(answers.join(' '))