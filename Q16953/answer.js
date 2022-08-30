const [A, B] = require('fs').readFileSync('Q16953/input.txt').toString().trim().split(' ').map(Number)

const isInRange = (val) => {
  return val >= 0 && val <= B
}

// bfs
const bfs = () => {
  const queue = [[A, 1]]
  let qStart = 0
  while(qStart !== queue.length) {
    const [value, count] = queue[qStart]
    qStart++
    const nextValues = [value * 2, parseInt(`${value}1`)]
    for(let i = 0; i < nextValues.length; i++) {
      const nextValue = nextValues[i]
      if(nextValue === B) {
        return count + 1
      }
      if(isInRange(nextValue)) {
        queue.push([nextValue, count + 1])
      }
    }
  }
  return -1
}

console.log(bfs())