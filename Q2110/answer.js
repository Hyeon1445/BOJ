const [nc, ...arr] = require('fs').readFileSync('Q2110/input.txt').toString().trim().split('\r\n')
const [N, C] = nc.split(' ').map(Number)
const wifi = arr.map(Number)
wifi.sort((a, b) => a - b)

const getCount = (gap) => {
  let count = 1
  let selectedWifi = wifi[0]
  for(let i = 1; i < N; i++) {
    if(wifi[i] - selectedWifi >= gap) {
      selectedWifi = wifi[i]
      count++
    }
  }
  return count
}

const getAnswer = (min, max) => {
  if(min === max) { return min }
  const mid = parseInt((min + max) / 2)
  const count = getCount(mid)
  if(count >= C && getCount(mid + 1) < C) {
    return mid
  }
  return count < C ? getAnswer(min, mid) : getAnswer(mid + 1, max)
}

console.log(getAnswer(1, wifi[N - 1] - wifi[0]))