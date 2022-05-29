const input = +require('fs').readFileSync('Q1839/input.txt').toString()
const getNumberOfSugar = (input) => {
  const portion = parseInt(input / 5)
  const share = input % 5
  if(share === 0) { return input / 5 }
  else if((share === 1 && input >= 6) || (share === 3 && input >= 3)) { return portion + 1 }
  else if((share === 2 && input >= 12) || (share === 4 && input >= 9)) { return portion + 2 }
  else return -1
}
console.log(getNumberOfSugar(input))