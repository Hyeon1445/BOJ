const { dir } = require('console')

const inp = require('fs').readFileSync('Q14503/input.txt').toString().trim().split('\r\n')
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split('\r\n')
const arr = inp.slice(2, inp.length).map(a => (a.split(' ').map(Number)))
const [row, column] = inp[0].split(' ').map(Number)
let [x, y, direction] = inp[1].split(' ').map(Number)
let cnt = 1
let isCompleted = false
//     북0
// 서3     동1
//     남2


while(1) {
  arr[y][x] = 2
  cnt = cnt + 1
  let nextDir = [
    {
      x: x,
      y: y - 1,
      // North(0)
    },
    {
      x: x + 1,
      y: y,
      // East(1)
    },
    {
      x: x,
      y: y + 1,
      // South(2)
    },
    {
      x: x - 1,
      y: y,
      // West(3)
    },
  ]
  direction = direction + 4
  for(let i = 1; i <= 4; i++) {
    // console.log('dir', (direction - i) % 4)
    // console.log(nextDir[(direction - i) % 4].y, nextDir[(direction - i) % 4].x)
    if(!arr[nextDir[(direction - i) % 4].y][nextDir[(direction - i) % 4].x]) {
      direction = (direction - i) % 4
      y = nextDir[direction].y
      x = nextDir[direction].x
      console.log(x,y,cnt)
      break
    }
    if(i === 4) {
      // 조건 c, d 추가!
      isCompleted = true
      break
    }
  }
  if(isCompleted) { break }
}

console.log(cnt)