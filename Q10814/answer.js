const inputs = require('fs')
  .readFileSync('Q10814/input.txt')
  .toString()
  .trim()
  .split('\r\n')
  .splice(1)
  .map((member, index) => {
    const [age, name] = member.split(' ')
    return {age: +age, name, index}
  })

inputs.sort((a, b) => a.age === b.age ? a.index - b.index : a.age - b.age)
console.log(inputs.map(member => [member.age, member.name].join(' ')).join('\n'))
