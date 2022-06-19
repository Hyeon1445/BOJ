const { off } = require('process')

const [[count], ...inputs] = require('fs').readFileSync('Q1966/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const result = []

for(let i = 0; i < count; i++) {
  const [N, M] = inputs[2 * i]
  const queue = inputs[2 * i + 1]
  let firstIndex = 0
  let index = M
  while(firstIndex <= index) {
    let isMax = true
    for(let j = firstIndex + 1; j < queue.length; j++) {
      if(queue[firstIndex] < queue[j]) {
        isMax = false
        index = firstIndex === index ? queue.length - 1 : index-1
        queue.push(...queue.splice(firstIndex, 1))
        break
      }
    }
    if(isMax) { 
      firstIndex++
    }
  }
  result.push(firstIndex)
}
console.log(result.join('\n'))