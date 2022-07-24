const [N, K] = require('fs').readFileSync('Q1300/input.txt').toString().split('\r\n').map(Number)

const getCount = (value) => {
  let count = 0
  for(let i = 1; i <= N; i++) {
    count += Math.min(parseInt(value / i), N)
  }
  return count
}

const getAnswer = (min, max) => {
  if(min === max) { return min }
  const mid = parseInt((min + max) / 2)
  const count = getCount(mid)
  return count >= K ? getAnswer(min, mid) : getAnswer(mid + 1, max)
}

console.log(getAnswer(1, Math.min(1000000000, N*N)))
