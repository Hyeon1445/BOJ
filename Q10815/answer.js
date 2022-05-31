const [count1, sgCards, count2, cardsToCompare] = require('fs')
  .readFileSync('Q10815/input.txt')
  .toString()
  .trim()
  .split('\r\n')
  .map(input => input.split(' ').map(num => +num))

const answer = []
const sgCardsObj = {}
sgCards.forEach(card => { sgCardsObj[card] = true })
cardsToCompare.forEach(card => { answer.push(sgCardsObj[card] ? 1 : 0) })
console.log(answer.join(' '))