let N = BigInt(require('fs').readFileSync('Q11444/input.txt').toString()) - 1n
const mod = 1_000_000_007n
let arr1 = [1n, 1n]
let arr2 = [1n, 1n]
while(N >= 1n) {
  if(N % 2n === 1n) {
    arr2 = [
      (((arr1[0] * arr2[0]) + (arr1[1] * arr2[1] * 5n)) / 2n) % (mod * 2n),
      (((arr1[0] * arr2[1]) + (arr1[1] * arr2[0])) / 2n) % (mod * 2n)
    ]
  }
  N = N / 2n
  arr1 = [
    (((arr1[0] ** 2n) + (arr1[1] ** 2n * 5n)) / 2n) % (mod * 2n),
    (arr1[0] * arr1[1]) % (mod * 2n)
  ]
}
console.log((arr2[1] % mod).toString())