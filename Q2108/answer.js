const inputs = require('fs').readFileSync('Q2108/input.txt').toString().trim().split('\r\n').map(num => +num).splice(1)
inputs.sort((a, b) => a - b)
const sum = inputs.reduce((a, b) => a + b)
const count = inputs.length
const average = Math.round(sum / count)
const middleValue = inputs[parseInt(count / 2)]
const freq = {}
let maxFreq = 0
inputs.forEach(num => { 
  freq[num] ? freq[num]++ : freq[num] = 1 
  if(freq[num] > maxFreq) {maxFreq = freq[num]}
})
const freqValues = Object.keys(freq).filter(key => freq[key] === maxFreq).map(num => +num)
freqValues.sort((a, b) => a - b)
const freqValue = freqValues.length > 1 ? freqValues[1] : freqValues[0]
const range = inputs[count - 1] - inputs[0]

console.log([average, middleValue, freqValue, range].join('\n'))