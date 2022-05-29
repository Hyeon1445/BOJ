const [count, input] = require('fs').readFileSync('Q1978/input.txt').toString().split('\r\n')
const inputs = input.split(' ')
const getNumberOfPrimeNumber = (inputs) => {
  let numberOfPrimeNumber = 0
  for(const input of inputs) {
    for(let i = 2; i <= input; i++) {
      if(input <= i) { numberOfPrimeNumber++ }
      else if(input % i === 0) { break }
    }
  }
  return numberOfPrimeNumber
}
console.log(getNumberOfPrimeNumber(inputs))