const [N, K] = require('fs').readFileSync('Q1697/input.txt').toString().trim().split(' ').map(Number)
const queue = []
const maxDistance = 200000
const arr = Array(maxDistance + 1).fill(0)
const distance = Math.abs(N - K)

arr[N] = 1
queue.unshift(N)

while(queue.length) {
  const position = queue.pop()
  if(position === K) { break }
  if(!arr[position + 1] && Math.abs((position + 1) - K) < distance * 2) {
    arr[position + 1] = arr[position] + 1
    queue.unshift(position + 1)
  }
  if(!arr[position - 1] && position > 0 && Math.abs((position - 1) - K) < distance * 2) {
    arr[position - 1] = arr[position] + 1
    queue.unshift(position - 1)
  }
  if(!arr[position * 2] && Math.abs((position * 2) - K) < distance * 2) {
    arr[position * 2] = arr[position] + 1
    queue.unshift(position * 2)
  }
}
console.log(arr[K] - 1)