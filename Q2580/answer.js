const sdoku = require('fs').readFileSync('Q2580/input.txt').toString().trim().split('\r\n').map(line => line.split(' ').map(num => +num))
const arr = []
for(let i = 0; i < 9; i++) {
  for(let j = 0; j < 9; j++) {
    if(sdoku[i][j] === 0) {
      arr.push([i, j])
    } else {

    }
  }
}
const hasNumberInRow = (x, y, num) => {
  for(let i = 0; i < 9; i++) {
    if(x !== i && sdoku[y][i] === num) { return true }
  }
  return false
}

const hasNumberInColumn = (x, y, num) => {
  for(let i = 0; i < 9; i++) {
    if(y !== i && sdoku[i][x] === num) { return true }
  }
  return false
}

const hasNumberInSquare = (x, y, num) => {
  const squareXIndex = parseInt(x / 3)
  const squareYIndex = parseInt(y / 3)
  for(let i = squareYIndex * 3; i < squareYIndex * 3 + 3; i++) {
    for(let j = squareXIndex * 3; j < squareXIndex * 3 + 3; j++) {
      if((x !== j || y !== i) && sdoku[i][j] === num) { return true }
    }
  }
  return false
}

const solveSdoku = () => {
  let index = 0
  while(index < arr.length) {
    const [y, x] = arr[index]
    let isFilled = false
    for(let i = sdoku[y][x] + 1; i <= 9; i++) {
      if(!hasNumberInRow(x, y, i) && !hasNumberInColumn(x, y, i) && !hasNumberInSquare(x, y, i)) {
        sdoku[y][x] = i
        index++
        isFilled = true
        break
      }
    }
    if(!isFilled) {
      sdoku[y][x] = 0
      index--
    }
  }
  console.log(sdoku.map(numbers => numbers.join(' ')).join('\n'))
}
solveSdoku()