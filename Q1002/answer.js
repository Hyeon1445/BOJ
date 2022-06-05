const inputs = require('fs').readFileSync('Q1002/input.txt').toString().trim().split('\r\n').splice(1).map(input => input.split(' ').map(num => +num))
const result = inputs.map(input => {
  const [x1, y1, r1, x2, y2, r2] = input
  const distance = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2)
  if (x1 === x2 && y1 === y2 && r1 === r2) { return  -1 }
  else if(distance === r1 + r2 || distance === Math.abs(r1 - r2)) { return 1 }
  else if(distance < r1 + r2 && distance > Math.abs(r1 - r2)) { return 2 }
  else return 0
})
console.log(result.join('\n'))
