const [[N, M], ...inputs] = require('fs').readFileSync('Q1389/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))

const friends = new Map()
for(let i = 1; i <= N; i++) {
  friends.set(i, [])
}
for(let i = 0; i < M; i++) {
  const [a, b] = inputs[i]
  friends.get(a).push(b)
  friends.get(b).push(a)
}

const bfs = (start) => {
  const queue = [start]
  let qStart = 0
  const visited = Array(N + 1).fill(0)
  visited[start] = 1
  while(qStart !== queue.length) {
    const person = queue[qStart]
    qStart++
    const nodes = friends.get(person)
    for(let i = 0; i < nodes.length; i++) {
      const friend = nodes[i]
      if(!visited[friend]) {
        visited[friend] = visited[person] + 1
        queue.push(friend)
      }
    }
  }
  return visited.reduce((a, b) => a + b)
}

let minValue = Infinity
let answer = null
for(let i = 1; i <= N; i++) {
  const value = bfs(i)
  if(value < minValue) {
    minValue = value
    answer = i
  }
}

console.log(answer)