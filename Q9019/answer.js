const [[T], ...inputs] = require('fs').readFileSync('Q9019/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))

// D: 2n mod 10000
// S: n - 1
// L: d1, d2, d3, d4 -> d2, d3, d4, d1
// R: d1, d2, d3, d4 -> d4, d1, d2, d3

const bfs = (startValue, endValue) => {
  const visited = Array(10000).fill("")
  const queue = []
  let qStart = 0
  queue.push(startValue)
  while(qStart !== queue.length) {
    const value = queue[qStart]
    const orderList = visited[value]
    qStart++
    if(value === endValue) {
      return visited[endValue]
    }
    const nextValue1 = (2 * value) % 10000
    if(nextValue1 !== startValue && !visited[nextValue1]) {
      visited[nextValue1] = `${orderList}D`
      queue.push(nextValue1)
    }
    const nextValue2 = value === 0 ? 9999 : value - 1
    if(nextValue2 !== startValue && !visited[nextValue2]) {
      visited[nextValue2] = `${orderList}S`
      queue.push(nextValue2)
    }
    const nextValue3 = (value % 1000) * 10 + parseInt(value / 1000)
    if(nextValue3 !== startValue && !visited[nextValue3]) {
      visited[nextValue3] = `${orderList}L`
      queue.push(nextValue3)
    }
    const nextValue4 = (value % 10) * 1000 + parseInt(value / 10)
    if(nextValue4 !== startValue && !visited[nextValue4]) {
      visited[nextValue4] = `${orderList}R`
      queue.push(nextValue4)
    }
  }
  return visited[endValue]
}

const result = []
for(let i = 0; i < T; i++) {
  const [start, end] = inputs[i]
  result.push(bfs(start, end))
}

console.log(result.join('\n'))