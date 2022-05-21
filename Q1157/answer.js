const input = require('fs').readFileSync('Q1157/input.txt').toString().trim()
const findMostUsedAlphabet = (str) => {
  const alphabet = {}
  let max = 0
  let answer
  str.split('').forEach(char => {
    if(alphabet[char]) { alphabet[char]++ }
    else { alphabet[char] = 1 }
    if(alphabet[char] > max) { 
      max = alphabet[char] 
      answer = char
    }
  })
  const result = Object.keys(alphabet).filter(key => alphabet[key] === max)
  return result.length === 1 ? answer : '?'
}
console.log(findMostUsedAlphabet(input.toUpperCase()))