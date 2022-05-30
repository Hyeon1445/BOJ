const input = +require('fs').readFileSync('Q2447/input.txt').toString()
const getStars = (input) => {
  if(input === 3) {
    return [["*", "*","*"],["*"," ","*"],["*","*","*"]]
  } else {
    const arr = Array.from(Array(input), x => Array(input).fill(null))
    const prevResult = getStars(input / 3)
    arr.forEach((line,y) => {
      line.forEach(((star, x) => {
        if(parseInt(y / input * 3) === 1 && parseInt(x / input * 3) === 1) {
          arr[y][x] = " "
        } else {
          arr[y][x] = prevResult[y % (input / 3)][x % (input / 3)]
        }
      }))
    })
    return arr
  }
}
console.log(getStars(input).map((stars => stars.join(''))).join("\n"))