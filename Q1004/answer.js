const inputs = require('fs').readFileSync('Q1004/input.txt').toString().trim().split('\r\n')
const t = +inputs.splice(0, 1)[0]
const result = []
for(let i = 0; i < t; i++) {
  let count = 0
  const [x1, y1, x2, y2] = inputs.splice(0, 1)[0].split(' ').map(num => +num)
  const n = +inputs.splice(0, 1)[0]
  const planetarySystem = inputs.splice(0, n).map(ps => ps.split(' ').map(num => +num))
  planetarySystem.forEach(ps => {
    const [cx, cy, r] = ps
    const distanceFromStart = Math.sqrt((x1 - cx)**2 + (y1 - cy)**2)
    const distanceFromEnd = Math.sqrt((x2 - cx)**2 + (y2 - cy)**2)
    if((distanceFromStart < r && distanceFromEnd > r) || (distanceFromStart > r && distanceFromEnd < r)) { count++ } 
  })
  result.push(count)
}
console.log(result.join('\n'))