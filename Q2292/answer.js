const input = +require('fs').readFileSync('Q2292/input.txt').toString()
const getHoneycomCount = (target) => {
  let i = 0
  let currentHoneyComb = 1
  while(1) {
    if(currentHoneyComb >= target) { return i + 1 }
    i++
    currentHoneyComb += i * 6
  }
}
console.log(getHoneycomCount(input))