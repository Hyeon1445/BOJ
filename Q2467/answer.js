const [[N], inputs] = require('fs').readFileSync('Q2467/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
let leftIndex = 0
let rightIndex = N - 1
let minSum = inputs[leftIndex] + inputs[rightIndex]
let minLeftIndex = leftIndex
let minRightIndex = rightIndex

while(1) {
  const value1 = inputs[leftIndex]
  const value2 = inputs[rightIndex]
  const sum = value1 + value2
  if(rightIndex - leftIndex === 1) {
    break
  } else if(sum < 0 && Math.abs(sum)) {
    leftIndex++
  } else if(sum > 0 && Math.abs(sum)) {
    rightIndex--
  } else {
    break
  }
  if(Math.abs(inputs[leftIndex] + inputs[rightIndex]) < Math.abs(minSum)) {
    minSum = inputs[leftIndex] + inputs[rightIndex]
    minLeftIndex = leftIndex
    minRightIndex = rightIndex
  }
}

console.log(inputs[minLeftIndex], inputs[minRightIndex])