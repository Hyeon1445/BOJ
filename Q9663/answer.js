const input = +require('fs').readFileSync('Q9663/input.txt').toString()
const findQueenPosition = () => {
  let result = 0
  const temp = []
  const isVisited = Array(input).fill(false)
  const dfs = () => {
    if (temp.length >= input) {
      result++
      return
    }
    for(let i = 0; i < input; i++) {
      if(!isVisited[i]) {
        let isAvailable = true
        for(let j = 0; j < temp.length; j++) {
          if(Math.abs(i - temp[j]) === Math.abs(temp.length - j)) {
            isAvailable = false
          }
        }
        if(isAvailable) {
          isVisited[i] = true
          temp.push(i)
          dfs()
          temp.pop()
          isVisited[i] = false
        }
      }
    }
  }
  dfs()
  console.log(result)
}

findQueenPosition()
