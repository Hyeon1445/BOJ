function solveAC(arr, AC) {
  let isReversed = false
  const ACLength = AC.length
  for(let j = 0; j < ACLength; j++) {
    if(AC.shift() === 'R') {
      isReversed = !isReversed
    } else if (arr.length < 1) {
      console.log('error')
      return
    } else {
      isReversed ? arr.pop() : arr.shift()
    }
  }
  const result = isReversed ? arr.reverse() : arr
  console.log('[' + String(arr).trim() + ']')
}

const inp = require('fs').readFileSync('Q5430/input.txt').toString().trim().split('\r\n')
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split('\r\n')
const n = +inp[0]
for(let i = 0; i < n; i++) {
  let AC = inp[i * 3 + 1].split('')
  let num = +inp[i * 3 + 2]
  let arr = inp[i * 3 + 3].slice(1, -1).length ? inp[i * 3 + 3].slice(1, -1).split(',') : []
  arr = arr.map(a => +a)
  solveAC(arr, AC) 
}

// wrong answer