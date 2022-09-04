const startNumber = +require('fs').readFileSync('Q12852/input.txt')

const bfs = (start) => {
  const queue = []
  let qStart = 0
  queue.push({ value: start, arr: [start] })
  const visited = Array(start + 1).fill(false)
  visited[start] = true
  while(qStart !== queue.length) {
    const { value, arr } = queue[qStart]
    qStart++
    if(value === 1) {
      return arr
    }
    if(value % 3 === 0 && !visited[value / 3]) {
      queue.push({ value: value / 3, arr: [...arr, value / 3]})
      visited[value / 3] = true
    }
    if(value % 2 === 0 && !visited[value / 2]) {
      queue.push({ value: value / 2, arr: [...arr, value / 2] })
      visited[value / 2] = true
    }
    if(!visited[value - 1]) {
      queue.push({ value: value - 1, arr: [...arr, value - 1]})
    }
  }
}

const result = bfs(startNumber)
console.log(result.length - 1)
console.log(result.join(' '))