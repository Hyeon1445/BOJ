const [[N], [M], ...graph] = require('fs').readFileSync('Q1976/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const [plan] = graph.splice(N)
const way = Array.from({ length: N }, () => Array(N).fill(false))

const bfs = (start) => {
  const visited = Array(N).fill(false)
  const queue = [start]
  let qStart = 0
  while(qStart !== queue.length) {
    const city = queue[qStart]
    qStart++
    const nextCities = graph[city].map((_, index) => index).filter((_, index) => !!graph[city][index])
    for(let i = 0; i < nextCities.length; i++) {
      const nextCity = nextCities[i]
      if(!visited[nextCity]) {
        visited[nextCity] = true
        queue.push(nextCity)
        way[start][nextCity] = true
      }
    }
  }
}

for(let city = 0; city < N; city++) {
  bfs(city)
}

let isPossible = true
for(let i = 0; i < M - 1; i++) {
  const from = plan[i] - 1
  const to = plan[i + 1] - 1
  if(!way[from][to] && from !== to) {
    isPossible = false
  }
}

console.log(isPossible ? 'YES' : 'NO')

// 예외케이스: 출발 도시 = 도착 도시일 경우