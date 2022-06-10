const [num, numberInput, operatorsInput] = require('fs').readFileSync('Q14888/input.txt').toString().trim().split('\r\n').map(inp => inp.split(' ').map(num => +num))
const n = num[0]

let min = null
let max = null
const isVisited = Array(n - 1).fill(false)
const temp = []

const plus = Array(operatorsInput[0]).fill('+')
const minus = Array(operatorsInput[1]).fill('-')
const multiply = Array(operatorsInput[2]).fill('*')
const divide = Array(operatorsInput[3]).fill('/')
const operators = [...plus, ...minus, ...multiply, ...divide]

const setMinMaxValue = (operatorsArr) => {
  let calcResult = numberInput[0].toString()
  for(let i = 0; i < n - 1; i++) {
    if(operatorsArr[i] === '+') { calcResult = (Number(calcResult) + numberInput[i + 1]).toString() }
    else if(operatorsArr[i] === '-') { calcResult = (Number(calcResult) - numberInput[i + 1]).toString() }
    else if(operatorsArr[i] === '*') { calcResult = (Number(calcResult) * numberInput[i + 1]).toString() }
    else if(operatorsArr[i] === '/') { calcResult = (parseInt(Number(calcResult) / numberInput[i + 1])).toString() }
  }
  if(Number(calcResult) < Number(min) || min === null) { min = calcResult }
  if(Number(calcResult) > Number(max) || max === null) { max = calcResult }
}

const getOperatorArray = (count) => {
  if(count >= n - 1) {
    setMinMaxValue(temp)
    return
  }
  for(let i = 0; i < n - 1; i++) {
    if(!isVisited[i]) {
      isVisited[i] = true
      temp.push(operators[i])
      getOperatorArray(count + 1)
      temp.pop()
      isVisited[i] = false
    }
  }
}
getOperatorArray(0)
console.log(max)
console.log(min)