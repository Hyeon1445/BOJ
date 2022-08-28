const [F, S, G, U, D] = require('fs').readFileSync('Q5014/input.txt').toString().trim().split(' ').map(Number)
// F: 건물의 총 층 수
// S: 지금 위치
// G: 목적지
// U: 위로 이동 층 수
// D: 아래로 이동 층 수
const status = {
  default: -1,
  visited: 0 // > -1
}

const isInRange = (stair) => {
  return stair >= 1 && stair <= F
}

const bfs = () => {
  const visited = Array(F + 1).fill(-1)
  const queue = [S]
  let qStart = 0
  visited[S] = 0
  while(qStart !== queue.length) {
    const position = queue[qStart]
    qStart++
    const nextStairs = [position + U, position - D]
    for(let i = 0; i < nextStairs.length; i++) {
      const nextStair = nextStairs[i]
      if(isInRange(nextStair) && visited[nextStair] === status.default) {
        queue.push(nextStair)
        visited[nextStair] = visited[position] + 1
        if(nextStair === G) {
          return visited[nextStair]
        }
      }
    }
  }
  return 'use the stairs'
}

console.log(S === G ? 0 : bfs())