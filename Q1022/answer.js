var fs = require('fs');
const { stdout } = require('process');
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const inp = require('fs').readFileSync('Q1022/input.txt').toString().trim().split(' ')
const r1 = parseInt(inp[0]);
const c1 = parseInt(inp[1]);
const r2 = parseInt(inp[2]);
const c2 = parseInt(inp[3]);

const arr = new Array(r2 - r1 + 1)
for(let i = 0; i < r2 - r1 + 1; i++) {
  arr[i] = new Array(c2 - c1 + 1)
}

let count = 1
let x = -c1
let y = -r1
if(x >= 0 && x <= c2 - c1 && y >= 0 && y <= r2 - r1) {
  arr[y][x] = String(count)
}

let lapsCount = 0
for(let i = 0; i < 4; i++) {
  if(Math.abs(parseInt(inp[i])) > lapsCount) {
    lapsCount = Math.abs(parseInt(inp[i]))
  }
}

for(let i = 1; i <= lapsCount; i++) {
  x = x + 1
  count = count + 1
  if(x >= 0 && x <= c2 - c1 && y >= 0 && y <= r2 - r1) {
    arr[y][x] = String(count)
  }
  for(let j = 0; j < i * 2 - 1; j++) {
    y = y - 1
    count = count + 1
    if(x >= 0 && x <= c2 - c1 && y >= 0 && y <= r2 - r1) {
      arr[y][x] = String(count)
    }
  }
  for(let j = 0; j < i * 2; j++) {
    x = x - 1
    count = count + 1
    if(x >= 0 && x <= c2 - c1 && y >= 0 && y <= r2 - r1) {
      arr[y][x] = String(count)
    }
  }
  for(let j = 0; j < i * 2; j++) {
    y = y + 1
    count = count + 1
    if(x >= 0 && x <= c2 - c1 && y >= 0 && y <= r2 - r1) {
      arr[y][x] = String(count)
    }
  }
  for(let j = 0; j < i * 2; j++) {
    x = x + 1
    count = count + 1
    if(x >= 0 && x <= c2 - c1 && y >= 0 && y <= r2 - r1) {
      arr[y][x] = String(count)
    }
  }
}


const maxLength = arr[0][0].length > arr[r2 - r1][c2 - c1].length ? arr[0][0].length : arr[r2 - r1][c2 - c1].length

for(let i = 0; i <= r2 - r1; i++) {
  for(let j = 0; j <= c2 - c1; j++) {
    process.stdout.write(arr[i][j].padStart(maxLength) + ' ')
  }
  console.log()
}