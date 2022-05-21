const input = require('fs').readFileSync('Q10809/input.txt').toString().trim()
const getAlphabetPosition = (str) => {
  const result = new Array(26).fill(-1)
  str.split('').forEach((alphabet, index) => {
    const allphabetIndex = (alphabet.charCodeAt() - 'a'.charCodeAt())
    if(result[allphabetIndex] === -1) { result[allphabetIndex] = index }
  })
  return result.join(' ')
}
console.log(getAlphabetPosition(input))