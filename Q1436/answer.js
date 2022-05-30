const input = +require('fs').readFileSync('Q1436/input.txt').toString()
const getMovieSeriesNumber = (input) => {
  let i = 666, count = 0
  while(1) {
    if(i.toString().includes('666')) { count++ }
    if(count === input) { return i }
    i++
  }
}
console.log(getMovieSeriesNumber(input))