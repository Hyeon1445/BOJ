// let inp = parseInt(require('fs').readFileSync('/dev/stdin'))
let inp = parseInt(require('fs').readFileSync('Q1094/input.txt'))

// 이진수

let stick = 64
let result = 0

while (stick >= 1) {
  if(stick <= inp) {
    inp = inp - stick
    result = result + 1
  }
  stick = stick / 2
}

console.log(result)