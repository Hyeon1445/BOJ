const input = require('fs').readFileSync('Q5622/input.txt').toString().trim().split('')
const getTime = (str) => {
  const dial = {}
  const arr = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
  let time = 0
  arr.forEach((val, index) => {
    const alphabets = val.split('')
    alphabets.forEach(alphabet => {
      dial[alphabet] = index + 3
    })
  })
  str.forEach(char => time += dial[char])
  return time
}
console.log(getTime(input))
