const input = require("fs").readFileSync('Q9184/input.txt').toString().trim().split('\r\n')
// const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n')

const inp = input.map(a => a.split(' '))
const arr = []

const w = (a,b,c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1
  }else if (a < b && b < c) {
    if(!arr[a][b][c]) { arr[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c) }
  } else {
    if(!arr[a][b][c]) { arr[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1)}
  }
  return arr[a][b][c]
}

for(let i = 0; i < 21; i++) {
  arr[i] = []
  for(let j = 0; j < 21; j++) {
    arr[i][j] = []
    for (let k = 0; k < 21; k++) {
      arr[i][j][k] = w(i, j, k)
    }
  }
}

let idx = a = b = c = ans = 0
while(1) {
  a = +inp[idx][0]
  b = +inp[idx][1]
  c = +inp[idx][2]
  if(a === -1 && b === -1 && c === -1) { return }
  else if (a <= 0 || b <= 0 || c <= 0) { ans = 1 }
  else if (a > 20 || b > 20 || c > 20) { ans = arr[20][20][20] }
  else { ans = arr[a][b][c] }
  console.log(`w(${a}, ${b}, ${c}) = ${ans}`)
  idx++
}
