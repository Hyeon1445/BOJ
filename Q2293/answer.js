const inp = require("fs").readFileSync("Q2293/input.txt").toString().split('\r\n')
// const inp = require("fs").readFileSync("/dev/stdin").toString().split('\n')

const num = inp[0].split(' ')
const arr = Array(+num[1] + 1).fill(0)
arr[0] = 1
for (let i = 1; i <= +num[0]; i++) {
  for (let j = +inp[i]; j <= +num[1]; j++) {
    arr[j] += arr[j - (+inp[i])]
  }
}
console.log(arr[+num[1]])

// python answer 과 같은 방법이지만, 맞은 사람 없음.(메모리 초과)