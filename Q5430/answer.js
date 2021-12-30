function solveAC(arr, AC) {
  let isReversed = false
  for (const j of AC) {
    if (j === 'R') {
      isReversed = !isReversed
    } else if (j === 'D') {
      if (arr.length < 1) {
        console.log('error')
        return
      } else {
        isReversed ? arr.pop() : arr.shift()
      }
    }
  }
  const result = isReversed ? arr.reverse() : arr
  console.log(JSON.stringify(result))
}

// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const inp = require('fs').readFileSync('Q5430/input.txt').toString().trim().split('\n')

const n = +inp[0]
for (let i = 1; i < inp.length; i += 3) {
  let AC = inp[i].split("")
  let arr = JSON.parse(inp[i + 2])
  solveAC(arr, AC)
}


// 오답 원인: 입력 시 '/r/n'