const inputs = require('fs').readFileSync('Q1269/input.txt').toString().trim().split('\r\n')
const set1 = new Set(inputs[1].split(' '))
const set2 = new Set(inputs[2].split(' '))
const unionCount = [...new Set([...set1, ...set2])].length
console.log(unionCount * 2 - [...set1, ...set2].length)