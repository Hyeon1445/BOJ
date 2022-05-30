const [info, cardsList] = require('fs').readFileSync('Q2798/input.txt').toString().trim().split('\r\n')
const [n, m] = info.split(' ').map(num => +num)
const cards = cardsList.split(' ').map(num => +num)
const findMaxValue = (n, m, cards) => {
  let max = 0
  for(let i = 0; i < n - 2; i++) {
    for(let j = i + 1; j < n - 1; j++) {
      for(let k = j + 1; k < n; k++) {
        const sum = cards[i] + cards[j] + cards[k]
        if(sum > max && sum < m) { max = sum }
        else if(sum === m) { return sum }
      }
    }
  }
  return max
}
console.log(findMaxValue(n, m, cards))