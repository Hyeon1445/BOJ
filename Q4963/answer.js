const inputs = require('fs').readFileSync('Q4963/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
let index = 0
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1], [1 , 1], [-1, 1], [1, -1], [-1, -1]]
const area = { sea: 0, land: 1, visited: 2 }
const result = []

const isInRange = (x, y, w, h) => {
  return x >= 0 && y >= 0 && x < w && y < h
}


while(1) {
  let count = 0
  const [w, h] = inputs[index]
  if(w === 0 && h === 0) { break }
  const queue = []
  let qStart = 0
  for(let i = index +  1; i <= index + h; i++) {
    for(let j = 0; j < w; j++) {
      if(inputs[i][j] === area.land) {
        // bfs
        queue.push([j, i - index - 1])
        inputs[i][j] = area.visited
        count++
        while(qStart !== queue.length) {
          const [x, y] = queue[qStart]
          qStart++
          for(let d = 0; d < direction.length; d++){
            const [a, b] = direction[d]
            const nextX = x + a
            const nextY = y + b
            if(isInRange(nextX, nextY, w, h) && inputs[nextY + index + 1][nextX] === area.land) {
              queue.push([nextX, nextY])
              inputs[nextY + index + 1][nextX] = area.visited
            }
          }
        }
      }
    }
  }
  result.push(count)
  index += h + 1
}

console.log(result.join('\n'))