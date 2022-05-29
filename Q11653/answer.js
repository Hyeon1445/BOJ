const input = +require('fs').readFileSync('Q11653/input.txt').toString()

const getFactorization = (input) => {
  let currentNum = input
  let primeNumber = 2
  const result = []
  while(1) {
    if(currentNum === 1) { break } 
    else if(currentNum % primeNumber === 0) { 
      result.push(primeNumber)
      currentNum /= primeNumber
    } 
    else { primeNumber++ }
  }
  return result
}

console.log(getFactorization(input).join(' '))