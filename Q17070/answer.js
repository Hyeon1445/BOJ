const [[N], ...inputs] = require('fs').readFileSync('Q17070/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const wall = 1
let count = 0
const pipeline = {
  right: 0,
  diagonal: 1,
  down: 2,
}

const isInRange = (x, y) => {
  return x < N && y < N
}

const dfs = (x, y, direction) => {
  if(x === N - 1 && y === N - 1) {
    count++
    return
  }
  if(isInRange(x + 1, y) && direction !== pipeline.down && inputs[y][x + 1] !== wall) {
    dfs(x + 1, y, pipeline.right)
  }
  if(isInRange(x + 1, y + 1) && inputs[y + 1][x + 1] !== wall && inputs[y][x + 1] !== wall && inputs[y + 1][x] !== wall) {
    dfs(x + 1, y + 1, pipeline.diagonal)
  }
  if(isInRange(x, y + 1) && direction !== pipeline.right && inputs[y + 1][x] !== wall) {
    dfs(x, y + 1, pipeline.down)
  }
}

dfs(1, 0, pipeline.right)
console.log(count)