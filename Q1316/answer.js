const inp = require('fs').readFileSync('Q1316/input.txt').toString().trim().split('\n')
// const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const wordCnt = parseInt(inp[0])
let result = 0

for(let i = 1; i <= wordCnt; i++) {
  let alphabet = {}
  for(let j = 0; j < inp[i].length; j++) {
    if(j !== inp[i].length - 1 && inp[i][j] === inp[i][j+1]) { continue }
    if(!alphabet[inp[i][j]]) { 
      alphabet[inp[i][j]] = true
    } else { break }
    if(j === inp[i].length -1) { result = result + 1}
  }
}

console.log(result)