const [[R, C], ...inputs] = require('fs').readFileSync('Q2636/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let lastCount = 0
let time = 0
const status = {
  empty: 0,
  cheese: 1,
  melt: 2,
}

for(let i = 0; i < C; i++) {
  for(let j = 0; j < R; j++) {
    if(inputs[j][i] === status.cheese) {
      lastCount++
    }
  }
}


const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < C && y < R
}

const meltCheese = () => {
  time++
  const visited = Array.from({ length: R }, () => Array(C).fill(false))
  const startX = 0
  const startY = 0
  const queue = []
  queue.push([startX, startY])
  let qStart = 0
  while(qStart !== queue.length) {
    const [x, y] = queue[qStart]
    qStart++
    for(let d = 0; d < direction.length; d++) {
      const [a, b] = direction[d]
      const nextX = x + a
      const nextY = y + b
      if(isInRange(nextX, nextY) && !visited[nextY][nextX]) {
        visited[nextY][nextX] = true
        if(inputs[nextY][nextX] === status.cheese) {
          inputs[nextY][nextX] = status.melt
        } else if(inputs[nextY][nextX] === status.empty){
          queue.push([nextX, nextY])
        }
      }
    }
  }
  let count = 0
  for(let i = 0; i < C; i++) {
    for(let j = 0; j < R; j++) {
      if(inputs[j][i] === status.melt) {
        inputs[j][i] = status.empty
      } else if(inputs[j][i] === status.cheese) {
        count++
      }
    }
  }
  return count
}


while(1) {
  if(!lastCount) { break }
  const newCount = meltCheese()
  if(newCount) {
    lastCount = newCount
  } else {
    break
  }
}
console.log(time)
console.log(lastCount)
