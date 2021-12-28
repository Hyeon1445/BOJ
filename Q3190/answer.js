function calculateSeconds() {
  const inp = require('fs').readFileSync('Q3190/input.txt').toString().trim().split('\n')
  // const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

  const n = +inp[0]
  const k = +inp[1]
  const l = +inp[2 + k]
  const applesPosition = inp.slice(2, 2 + k).map(apple => apple.split(' '))
  const directionChange = inp.slice(3 + k).map(dir => dir.split(' '))

  const status = { NONE: 0, SNAKE: 1, APPLE: 2 }
  const arr = []
  for(let i = 0; i < n; i++) { arr.push(new Array(n).fill(0)) }
  for (const apple of applesPosition) { arr[apple[0] - 1][apple[1] - 1] = status.APPLE }
  arr[0][0] = status.SNAKE
  const snakePosition = [[0, 0]]
  // 앞이 머리, 뒤가 꼬리 [행, 열]

  let snakeDirection = 1
  let seconds = 0
  while(1) {
    let nextHeadPosition = [
      { y: snakePosition[0][0] - 1, x: snakePosition[0][1] }, // 위
      { y: snakePosition[0][0], x: snakePosition[0][1] + 1 }, // 오른
      { y: snakePosition[0][0] + 1, x: snakePosition[0][1] }, // 아래
      { y: snakePosition[0][0], x: snakePosition[0][1] - 1 }, // 왼
    ]
    seconds = seconds + 1
    const isOutOfRange = (num) => num < 0 || num >= n
    if(isOutOfRange(nextHeadPosition[snakeDirection].x) || isOutOfRange(nextHeadPosition[snakeDirection].y)) {
      // 조건1: 벽에 닿는 경우
      console.log(seconds)
      return
    }
    snakePosition.unshift([nextHeadPosition[snakeDirection].y, nextHeadPosition[snakeDirection].x])
    if(arr[snakePosition[0][0]][snakePosition[0][1]] === status.SNAKE) {
      // 조건2: 뱀에 닿는 경우
      console.log(seconds)
      return
    } else if (arr[snakePosition[0][0]][snakePosition[0][1]] === status.APPLE) {
      // 조건3: 사과를 먹는 경우
      arr[snakePosition[0][0]][snakePosition[0][1]] = status.SNAKE
    } else {
      // 조건4: 사과가 없는 경우
      arr[snakePosition[0][0]][snakePosition[0][1]] = status.SNAKE
      arr[snakePosition[snakePosition.length - 1][0]][snakePosition[snakePosition.length - 1][1]] = status.NONE
      snakePosition.pop()
    }
    
    if(directionChange.length && seconds === +directionChange[0][0]) {
      // 조건5: 방향을 바꾸는 경우
      directionChange[0][1] === 'L' ? snakeDirection = (snakeDirection + 3) % 4 : snakeDirection = (snakeDirection + 1) % 4
      directionChange.shift()
    }
  }
}

calculateSeconds()