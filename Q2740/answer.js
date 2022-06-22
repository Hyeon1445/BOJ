const inputs = require('fs').readFileSync('Q2740/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))
const [[N, M]] = inputs.splice(0, 1)
const matrix1 = inputs.splice(0, N)
const [[_, K]] = inputs.splice(0, 1)
const matrix2 = inputs
const result = Array.from(Array(N), () => Array(K))
for(let i = 0; i < N; i++) {
  for(let j = 0; j < K; j++) {
    let sum = 0
    for(let k = 0; k < M; k++) {
      sum += matrix1[i][k] * matrix2[k][j]
    }
    result[i][j] = sum
  }
}
console.log(result.map(matrix => matrix.join(' ')).join('\n'))