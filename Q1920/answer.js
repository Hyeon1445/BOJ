const [N, input1, M, input2] = require('fs').readFileSync('Q1920/input.txt').toString().trim().split('\r\n').map((input) => input.split(' '))
const answer = []
input1.sort((a, b) => BigInt(a) > BigInt(b) ? 1 : - 1)

const findValue = (value, left, right) => {
  if(left === right) { return value === input1[left] ? 1 : 0 }
  const mid = Math.floor((left + right) / 2)
  return BigInt(input1[mid]) >= BigInt(value) ? 
    findValue(value, left, mid) : findValue(value, mid + 1, right)
}

input2.forEach((value) => answer.push(findValue(value, 0, +N[0] - 1)))
console.log(answer.join('\n'))