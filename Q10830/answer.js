const [[N, B], ...inputs] = require('fs').readFileSync('Q10830/input.txt').toString().trim().split('\r\n').map(input => input.split(' ').map(Number))

const multiplyMatrix = (matrix1, matrix2) => {
  const matrix = Array.from(Array(N), () => Array(N))
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      let sum = 0
      for(let k = 0; k < N; k++) {
        sum = (sum + matrix1[i][k] * matrix2[k][j]) % 1000
      }
      matrix[i][j] = sum
    }
  }
  return matrix
}

let num = B
let answer = Array.from(Array(N), () => Array(N).fill(0))
let matrix = inputs
for(let i = 0; i < N; i++) {
  answer[i][i] = 1
}
while(num >= 1) {
  if(num % 2 === 1) {
    answer = multiplyMatrix(answer, matrix)
  }
  num = parseInt(num / 2)
  matrix = multiplyMatrix(matrix, matrix)
}
console.log(answer.map(val => val.join(' ')).join('\n'))