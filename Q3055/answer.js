const [size, ...inputs] = require('fs').readFileSync('Q3055/input.txt').toString().trim().split('\r\n')
const [R, C] = size.split(' ').map(Number)
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
const status = {
  empty: 0,
  water: -1, // < 0
  position: 1 // > 0
}

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < C && y < R
}
const isFirstPosition = (x, y) => {
  return inputs[y][x] === 'S'
}
const isWaterPosition = (x, y) => {
  return inputs[y][x] === '*'
}
const isDestination = (x, y) => {
  return inputs[y][x] === 'D'
}
const isRock = (x, y) => {
  return inputs[y][x] === 'X'
}

const bfs = () => {
  const area = Array.from({ length: R }, () => Array(C).fill(status.empty))
  const positionQueue = []
  const waterQueue = []
  let positionQStart = 0
  let waterQStart = 0
  let positionDistance = status.position
  let waterDistance = status.water
  for(let y = 0; y < R; y++) {
    for(let x = 0; x < C; x++) {
      if(isFirstPosition(x, y)) {
        area[y][x] = status.position
        positionQueue.push([x, y])
      } else if(isWaterPosition(x, y)) {
        area[y][x] = status.water
        waterQueue.push([x, y])
      }
    }
  }
  while(positionQStart !== positionQueue.length) {
    while(waterQStart !== waterQueue.length) {
      const [wx, wy] = waterQueue[waterQStart]
      waterQStart++
      if(area[wy][wx] < waterDistance) {
        waterDistance = area[wy][wx]
        waterQStart--
        break
      }
      for(let d = 0; d < direction.length; d++) {
        const [a, b] = direction[d]
        const nextWX = a + wx
        const nextWY = b + wy
        if(isInRange(nextWX, nextWY) && area[nextWY][nextWX] === status.empty && !isRock(nextWX, nextWY) && !isDestination(nextWX, nextWY)) {
          waterQueue.push([nextWX, nextWY])
          area[nextWY][nextWX] = area[wy][wx] - 1
        }
      }
    }
    while(positionQStart !== positionQueue.length) {
      const [px, py] = positionQueue[positionQStart]
      positionQStart++
      if(area[py][px] > positionDistance) { 
        positionQStart--
        positionDistance = area[py][px]
        break
      }
      for(let d = 0; d < direction.length; d++) {
        const [a, b] = direction[d]
        const nextPX = a + px
        const nextPY = b + py
        if(isInRange(nextPX, nextPY) && isDestination(nextPX, nextPY)) {
          return area[py][px]
        }
        if(isInRange(nextPX, nextPY) && area[nextPY][nextPX] === status.empty && !isRock(nextPX, nextPY)) {
          positionQueue.push([nextPX, nextPY])
          area[nextPY][nextPX] = area[py][px] + 1
        }
      }
    }
  }
  return 'KAKTUS'
}

console.log(bfs())