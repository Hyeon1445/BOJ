const [word, _, ...inputs] = require('fs').readFileSync('Q16139/input.txt').toString().trim().split('\r\n')
const questions = inputs.map(input => input.split(' '))
const count = []
const alphabet = Array(26).fill(0)
const results = []
for(let i = 0; i < word.length; i++) {
  alphabet[word.charCodeAt(i) - 'a'.charCodeAt(0)]++
  count.push([...alphabet])
}
questions.forEach(([char, from, to]) => {
  const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0)
  if(+from === 0) {
    results.push(count[+to][charIndex])
  } else {
    results.push(count[+to][charIndex] - count[+from - 1][charIndex])
  }
})
console.log(results.join('\n'))