const inputs = require('fs')
  .readFileSync('Q3009/input.txt')
  .toString()
  .split('\r\n').map(dot => dot.split(' ').map(num => +num))

const getPosition = (arr) => {
  if(arr[0] === arr[1]) { return arr[2] }
  else if(arr[0] === arr[2]) { return arr[1] }
  else return arr[0]
}

console.log(getPosition(inputs.map(dot => dot[0])), getPosition(inputs.map(dot => dot[1])))