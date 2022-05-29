const inputs = require('fs').readFileSync('Q2775/input.txt').toString().trim().split('\r\n').splice(1)

const getNumberOfResident = (inputs) => {
  const count = inputs.length / 2
  const arr = []
  const result = []
  for(let i = 0; i < 15; i++) {
    arr.push(new Array(15))
    for(let j = 0; j < 15; j++) {
      if(i === 0 || j === 0) { arr[i][j] = j }
      else { arr[i][j] = arr[i - 1][j] + arr[i][j - 1] }
    }
  }
  for(let i = 0; i < count; i++) {
    const k = inputs[2 * i]
    const n = inputs[2 * i + 1]
    result.push(arr[k][n])
  }
  return result.join('\n')
}

console.log(getNumberOfResident(inputs))