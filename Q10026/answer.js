const [size, ...RGB] = require('fs').readFileSync('Q10026/input.txt').toString().trim().split('\r\n')
const N = +size
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < N && y < N
}

const isSameColor = (color1, color2) => {
  if(color1 === color2) { return true }
  const newColor1 = color1 === 'G' ? 'R' : color1
  const newColor2 = color2 === 'G' ? 'R' : color2
  if(newColor1 === newColor2) { return true }
  return false
}


let count1 = 0
let count2 = 0
const visited1 = Array.from({ length: N }, () => Array(N).fill(false))
const visited2 = Array.from({ length: N }, () => Array(N).fill(false))
const queue1 = []
const queue2 = []
let qStart1 = 0
let qStart2 = 0

for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    if(!visited1[i][j]) {
      count1++
      queue1.push([j, i])
      while(qStart1 !== queue1.length) {
        const [x, y] = queue1[qStart1]
        const color = RGB[y][x]
        qStart1++
        for(let d = 0; d < direction.length; d++) {
          const [a, b] = direction[d]
          const nextX = x + a
          const nextY = y + b
          if(isInRange(nextX, nextY) && !visited1[nextY][nextX] && color === RGB[nextY][nextX]) {
            visited1[nextY][nextX] = true
            queue1.push([nextX, nextY])
          }
        }        
      }
    }
    if(!visited2[i][j]) {
      count2++
      queue2.push([j, i])
      while(qStart2 !== queue2.length) {
        const [x, y] = queue2[qStart2]
        const color = RGB[y][x]
        qStart2++
        for(let d = 0; d < direction.length; d++) {
          const [a, b] = direction[d]
          const nextX = x + a
          const nextY = y + b
          if(isInRange(nextX, nextY) && !visited2[nextY][nextX] && isSameColor(color, RGB[nextY][nextX])) {
            visited2[nextY][nextX] = true
            queue2.push([nextX, nextY])
          }
        }        
      }
    }
  }
}

console.log(count1, count2)



