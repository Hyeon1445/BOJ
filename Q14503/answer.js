function answer () {
  const inp = require('fs').readFileSync('Q14503/input.txt').toString().trim().split('\n')
  // const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
  const arr = inp.slice(2, inp.length).map(a => (a.split(' ').map(Number)))
  // const [row, column] = inp[0].split(' ').map(Number)
  let [y, x, direction] = inp[1].split(' ').map(Number)
  
  //     북0
  // 서3     동1
  //     남2
  
  const status = {
    DIRTY: 0,
    WALL: 1,
    CLEAN: 2
  }
  
  let cnt = 1
  arr[y][x] = status.CLEAN

  while(1) {
    let nextDirection = [
      { x: x, y: y - 1 }, // NORTH(0)
      { x: x + 1, y: y }, // EAST(1)
      { x: x, y: y + 1 }, // SOUTH(2)
      { x: x - 1, y: y }, // WEST(3)
    ]
    for(let i = 1; i <= 4; i++) {
      // 조건 a, b
      if(arr[nextDirection[(direction - i + 4) % 4].y][nextDirection[(direction - i + 4) % 4].x] === status.DIRTY) {
        cnt = cnt + 1
        direction = (direction - i + 4) % 4
        x = nextDirection[direction].x
        y = nextDirection[direction].y
        arr[y][x] = status.CLEAN
        // console.log(cnt, y, x)
        break
      }
      if(i === 4) {
        // 조건 c
        if(arr[nextDirection[(direction + 2) % 4].y][nextDirection[(direction + 2) % 4].x] !== status.WALL) {
          x = nextDirection[(direction + 2) % 4].x
          y = nextDirection[(direction + 2) % 4].y
          // console.log('cd', cnt, y, x)
          break
        } else {
          console.log(cnt)
          return
        }
      }
    }
  }
}

answer()