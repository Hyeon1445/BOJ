const inputs = require('fs').readFileSync('Q9375/input.txt').toString().split('\r\n')
const count = +inputs[0]
const allTestCases = inputs.splice(1)
const result = []
for(let i = 0; i < count; i++) {
  const fashions = {}
  const testCase = allTestCases.splice(0, +allTestCases[0] + 1).splice(1).map(fashion => fashion.split(' '))
  testCase.forEach(([cloth, type]) => {
    if(!fashions[type]) { fashions[type] = new Set() }
    fashions[type].add(cloth)
  })
  let count = 1
  for(const fashionType in fashions) {
    count *= (fashions[fashionType].size + 1)
  }
  result.push(count - 1)
}
console.log(result.join('\n'))