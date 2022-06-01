const input = require('fs').readFileSync('Q11478/input.txt').toString().trim()
const obj = {}
for(let i = 1; i <= input.length; i++) {
  for(let j = 0; j <= input.length - i; j++) {
    obj[input.slice(j, j + i)] = true
  }
}
console.log(Object.keys(obj).length)