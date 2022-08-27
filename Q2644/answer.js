const [[n], [A, B], [m], ...inputs] = require('fs').readFileSync('Q2644/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))

const family = new Map()
for(let i = 1; i <= n; i++) {
  family.set(i, [])
}
for(let i = 0; i < m; i++) {
  const [p1, p2] = inputs[i]
  family.get(p1).push(p2)
  family.get(p2).push(p1)
}
const bfs = () => {
  const queue = [A]
  const visited = Array.from(n + 1).fill(0)
  visited[A] = 1
  let qStart = 0
  while(qStart !== queue.length) {
    const person = queue[qStart]
    qStart++
    const nodes = family.get(person)
    for(let i = 0; i < nodes.length; i++) {
      const next = nodes[i]
      if(next === B) {
        return visited[person]
      }
      if(!visited[next]) {
        visited[next] = visited[person] + 1
        queue.push(next)
      }
    }
  }
  return -1
}

console.log(bfs())