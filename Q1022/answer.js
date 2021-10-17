var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var input = fs.readFileSync('Q1022/input.txt').toString().split(' ');
var r1 = parseInt(input[0]);
var c1 = parseInt(input[1]);
var r2 = parseInt(input[2]);
var c2 = parseInt(input[3]);

const maxR = 0 - r1 > r2 - 0 ? 0 - r1 : r2 - 0
const maxC = 0 - c1 > c2 - 0 ? 0 - c1 : c2 - 0

const max = maxR > maxC ? maxR : maxC

// (-max, +max)   ...   (+max, +max)
//               (0, 0)
// (-max, -max)   ...   (+max, -max)

// 오위왼아오/오위왼아오
// 1 1 2 2 2/ 1 3 4 4 4/ 1 5 6 6 6/ 1 7 8 8 8
// 0        / 1        / 2        / 3

// 가장 큰 수 = (max * 2 + 1) * (max *2 + 1)

const arr = new Array(max * 2 + 1)
for (let i = 0; i < max * 2 + 1; i++) {
  arr[i] = new Array(max * 2 + 1)
}

// -3 -2 -1 0 1 2 3 -> 0 1 2 3 4 5 6

let x = max
let y = max 
let count = 1
arr[x][y] = count

for (let i = 0; i < max; i++) {
  // 오른쪽 한칸
  count = count + 1
  x = x + 1
  arr[x][y] = count
  for(let j = 0; j < (i + 1) * 2 - 1; j++ ) {
    // 위로
    count = count + 1
    y = y - 1
    arr[x][y] = count
  }
  for(let j = 0; j < (i + 1) * 2; j++ ) {
    // 왼쪽으로
    count = count + 1
    x = x - 1
    arr[x][y] = count
  }
  for(let j = 0; j < (i + 1) * 2; j++ ) {
    // 아래로
    count = count + 1
    y = y + 1
    arr[x][y] = count
  }
  for(let j = 0; j < (i + 1) * 2; j++ ) {
    // 오른쪽으로
    count = count + 1
    x = x + 1
    arr[x][y] = count
  }
}

const leftTop = arr[c1 + max][r1 + max]
const rightBottom = arr[c2 + max][r2 + max]
const maxLength = String(leftTop).length > String(rightBottom).length ? String(leftTop).length : String(rightBottom).length


for (let i = (r1 + max); i <= (r2 + max); i++) {
  for (let j = (c1 + max) ; j <= (c2 + max); j++) {
    let value = '                   ' + String(arr[j][i])
    process.stdout.write(value.slice(-maxLength) + ' ')
    //개행 없이 출력 
  }
  console.log()
}

// 메모리 초과 - 다시 풀기!