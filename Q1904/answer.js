const n = +require('fs').readFileSync('Q1904/input.txt').toString()

const arr = [1, 2]
for(i = 2; i < n; i++) {
  arr.push((arr[i- 1] + arr[i - 2]) % 15746)
}
console.log(arr[n-1])
