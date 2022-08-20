const [[N, M], ...inputs] = require('fs').readFileSync('Q16928/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const size = 10
const dice = 6
const start = 0
const destination = 99

const queue = []
let qStart = 0, qEnd = 0

const checkIfInRange = (value) => {
  return value >= 0 && value < size * size
}

// 게임 보드판
const board = Array.from({length: size * size}, () => ({ snake: -1, visited: 0 }))

// 뱀, 사다리 있는곳 체크
inputs.forEach(([x, y]) => {
  board[x - 1].snake = y - 1
})

// bfs
queue.push(start)
qEnd++
board[start].visited = 1

while(qStart !== qEnd) {
  const position = queue[qStart]
  qStart++
  if(!checkIfInRange(position)) { continue }
  if(position === destination) { break }
  for(let i = 1; i <= dice; i++) {
    let nextPosition = position + i
    if(checkIfInRange(nextPosition) && !board[nextPosition].visited) {
      const nextCount = board[position].visited + 1
      board[nextPosition].visited = nextCount
      const snakeEnd = board[nextPosition].snake
      if(board[nextPosition].snake === -1) { 
        queue.push(nextPosition)
        qEnd = queue.length
      } else if(!board[snakeEnd].visited) { 
        board[snakeEnd].visited = nextCount
        queue.push(snakeEnd)
        qEnd = queue.length
      }
    }
  }
}

console.log(board[destination].visited - 1)