const input = +require('fs').readFileSync('Q1676/input.txt').toString()
let numberOfTwo = 0
let numberOfFive = 0
for(let i = 1; i <= input; i++) {
  let num = i
  while(1) {
    if(num % 2 === 0) {
      num /= 2
      numberOfTwo++
    }
    if(num % 5 === 0){
      num /= 5
      numberOfFive++
    }
    if(num % 2 !== 0 && num % 5 !== 0) { break }
  }
}
console.log(Math.min(numberOfFive, numberOfTwo))