const N = +require('fs').readFileSync('Q2164/input.txt')
const arr = Array.from(Array(N), (_, index) => index + 1)
let startIndex = 0
while(startIndex !== arr.length - 1) {
  arr.push(arr[startIndex + 1])
  startIndex += 2
}
console.log(arr[startIndex])
