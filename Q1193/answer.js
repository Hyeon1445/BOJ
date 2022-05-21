const input = +require('fs').readFileSync('Q1193/input.txt').toString()

const getFraction = (count) => {
  let i = 0
  let j = 0
  while(1) {
    i ++
    j += i
    if(count <= j) {
      return i % 2 === 1 ? 
      `${1 + j - count}/${i - (j - count)}` 
      : `${i + count - j}/${j - count + 1}`
    }
  }
}

console.log(getFraction(input))