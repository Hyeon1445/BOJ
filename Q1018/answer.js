const inputs = require('fs').readFileSync('Q1018/input.txt').toString().split('\r\n')
const [n, m] = inputs[0].split(' ').map(num => +num)
const boards = inputs.splice(1)
const results = []
for(let i = 0; i <= n - 8; i++) {
  for(let j = 0; j <= m - 8; j++) {
    let correct = 0
    for(let k = i; k < i + 8; k++) {
      for(let l = j; l < j + 8; l++) {
        if(((k + l) % 2 === 0 && boards[k][l] === 'W') || ((k + l) % 2 === 1 && boards[k][l] === 'B')){
          correct++
        }
      }
    }
    results.push(Math.min(correct, 64 - correct))
  }
}
console.log(Math.min(...results))


