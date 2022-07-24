const [[N], arr] = require('fs').readFileSync('Q12015/input.txt').toString().split('\r\n').map(input => input.split(' ').map(Number))

lis = [arr[0]]

for(let i = 1; i < N; i++) {
  if(arr[i] > lis[lis.length - 1]) {
    lis.push(arr[i])
  } else {
    let left = 0
    let right = lis.length - 1
    let mid = parseInt((left + right) / 2)
    while(left < right) {
      if(lis[mid] === arr[i]) {
        break
      } else if (lis[mid] > arr[i]) {
        right = mid
      } else {
        left = mid + 1
      }
      mid = parseInt((left + right) / 2)
    }
    lis[mid] = arr[i]
  }
}
console.log(lis.length)