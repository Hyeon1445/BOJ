const words = require('fs').readFileSync('Q1181/input.txt').toString().trim().split('\r\n').splice(1)
const wordsSet = [...new Set(words)]
wordsSet.sort((a, b) => a.length === b.length ? (a > b ? 1 : -1 ) : a.length - b.length)
console.log(wordsSet.join('\n'))
