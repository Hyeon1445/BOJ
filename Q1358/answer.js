const inputs = require('fs').readFileSync('Q1358/input.txt').toString().trim().split('\r\n')
const [W, H, X, Y, P] = inputs.splice(0, 1)[0].split(' ').map(num => +num)

const R = H / 2
const isInSquareArea = (px, py) => px >= X && px <= X + W  && py >= Y && py <= Y + H
const isInLeftCircle = (px, py) => (px - X)**2 + (py - (Y + R))**2 <= R**2
const isInRightCircle = (px, py) => (px - (X + W))**2 + (py - (Y + R))**2 <= R**2

let count = 0
inputs.forEach(player => {
  const [px, py] = player.split(' ').map(num => +num)
  if(isInLeftCircle(px, py) || isInRightCircle(px, py) || isInSquareArea(px, py)) { count++ }
})
console.log(count)