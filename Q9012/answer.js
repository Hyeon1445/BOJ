const [[count], ...brackets] = require('fs').readFileSync('Q9012/input.txt').toString().trim().split('\r\n').map(input => input.split(''))
const result = []
for(let i = 0; i < brackets.length; i++) {
  let answer = 'YES'
  if(brackets[i].length % 2 === 1) {
    answer = 'NO'
  }
  let rightBracketCount = 0
  for(let j = brackets[i].length - 1; j >= 0; j--) {
    if(brackets[i][j] === ')') {
      rightBracketCount++
    } else if(!rightBracketCount) {
      answer = 'NO'
    } else {
      rightBracketCount--
    }
  }
  result.push(rightBracketCount ? 'NO' : answer)
}
console.log(result.join('\n'))