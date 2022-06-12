const inputs = require('fs').readFileSync('Q11054/input.txt').toString().trim().split('\r\n')[1].split(' ').map(Number)
const length = inputs.length
const increasingValueCount = Array(length).fill(0)
const decreasingVallueCount = Array(length).fill(0)
const arr = Array(length)
increasingValueCount[0] = 1
decreasingVallueCount[length - 1] = 1

for(let i = 1; i < length; i++) {
  for(let j = i - 1; j >= 0; j--) {
    if(inputs[i] > inputs[j] && increasingValueCount[i] < increasingValueCount[j]) {
      increasingValueCount[i] = increasingValueCount[j]
    }
    if(inputs[length - 1 - i] > inputs[length - 1 - j] && decreasingVallueCount[length - 1 - i] < decreasingVallueCount[length - 1 - j]) {
      decreasingVallueCount[length - 1 - i] = decreasingVallueCount[length - 1 - j]
    }
  }
  increasingValueCount[i]++
  decreasingVallueCount[length - 1 - i]++
}

for(let i = 0; i < length; i++) {
  arr[i] = increasingValueCount[i] + decreasingVallueCount[i] - 1
}

console.log(Math.max(...arr))
