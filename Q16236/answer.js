const [[N], ...inputs] = require('fs').readFileSync('Q16236/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const direction = [[0, -1], [-1, 0], [1, 0], [0, 1]]
let time = 0

const isInRange = (x, y) => {
  return x >= 0 && y >= 0 && x < N && y < N
}


// find default shark position
const shark = { x: 0, y: 0, size: 2, count: 0 }
for(let y = 0; y < N; y++) {
  for(let x = 0; x < N; x++) {
    if(inputs[y][x] === 9) {
      shark.x = x
      shark.y = y
      break
    }
  }
}

const bfs = (xPos, yPos) => {
  const visited = Array.from({ length: N }, () => Array(N).fill(0))
  const queue = [[xPos, yPos]]
  let qStart = 0
  visited[yPos][xPos] = 1
  let distance = 0
  const sameDistanceFish = []
  const selectFishToEat = () => {
    sameDistanceFish.sort((a, b) => a[1] - b[1] === 0 ? a[0] - b[0] : a[1] - b[1])
    const [fishX, fishY] = sameDistanceFish[0]
    inputs[yPos][xPos] = 0
    inputs[fishY][fishX] = 9
    shark.x = fishX
    shark.y = fishY
    time += distance - 1
    shark.count++
    if(shark.count === shark.size) {
      shark.size++
      shark.count = 0
    }
  }
  while(qStart !== queue.length) {
    const [x, y] = queue[qStart]
    qStart++
    for(let d = 0; d < direction.length; d++) {
      const [a, b] = direction[d]
      const nextX = a + x
      const nextY = b + y
      if(isInRange(nextX, nextY) && !visited[nextY][nextX] && inputs[nextY][nextX] <= shark.size) {
        queue.push([nextX, nextY])
        visited[nextY][nextX] = visited[y][x] + 1
        const fishSize = inputs[nextY][nextX]
        if(fishSize > 0 && fishSize < shark.size && (!distance || distance === visited[nextY][nextX])) {
          // 같은 거리에 있는 물고기 잡아먹기 가능
          sameDistanceFish.push([nextX, nextY])
          distance = visited[nextY][nextX]
        }
        if(fishSize > 0 && fishSize < shark.size && visited[nextY][nextX] > distance && sameDistanceFish.length) {
          selectFishToEat()
          return true
        }
      }
    }
  }
  if(sameDistanceFish.length) {
    selectFishToEat()
    return true
  }
  return false
}

let hasSmallFish = true
while(hasSmallFish) {
  hasSmallFish = bfs(shark.x, shark.y)
}

console.log(time)