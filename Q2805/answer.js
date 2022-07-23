const [[N, M], arr] = require('fs').readFileSync('Q2805/input.txt').toString().split('\r\n').map(input => input.split(' ').map(Number))

const getHeight = (len) => {
  let height = 0
  arr.forEach((tree) => height += (tree > len ? tree - len : 0))
  return height
}

const getAnswer = (left, right) => {
  if(left === right) { return left }
  const mid = parseInt((left + right) / 2)
  if(getHeight(mid) >= M && getHeight(mid + 1) < M) { return mid }
  return getHeight(mid) <= M ? getAnswer(left, mid) : getAnswer(mid + 1, right)
}

console.log(getAnswer(0, Math.max(...arr)))