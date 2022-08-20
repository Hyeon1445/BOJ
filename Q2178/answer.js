const [size, ...inputs] = require('fs').readFileSync('Q2178/input.txt').toString().trim().split('\r\n')
const [N, M] = size.split(' ').map(Number)
const arr = inputs.map(input => input.split('').map(Number))
const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]

const queue = []
const bfs = (x, y) => {
  arr[y][x] = 2
  queue.unshift([x, y])
  while(queue.length) {
    const [xPosition, yPosition] = queue.pop()
    for(let i = 0; i < direction.length; i++){
      const [a, b] = direction[i]
      if(arr[yPosition + b] && arr[yPosition + b][xPosition + a] === 1) {
        arr[yPosition +  b][xPosition + a] = arr[yPosition][xPosition] + 1
        queue.unshift([xPosition + a, yPosition + b])
      }
    }
  }
}

bfs(0, 0, 1)
console.log(arr[N - 1][M - 1] - 1)

// 시간복잡도: dfs >>> bfs