const inp = require("fs").readFileSync("Q1003/input.txt").toString().trim().split('\r\n')
// const inp = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const arr = new Array(41).fill(0)
arr[0] = 0
arr[1] = 1
for(let i = 2; i < 41; i++) {
  arr[i] = arr[i - 1] + arr[i - 2]
}

for(let j = 1; j <= +inp[0]; j++) {
  if(+inp[j] === 0) {
    console.log(1, 0)
  } else {
    console.log(arr[+inp[j] - 1], arr[+inp[j]])
  }
}