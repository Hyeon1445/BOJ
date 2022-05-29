const inputs = require('fs').readFileSync('Q10250/input.txt').toString().trim().split('\r\n').splice(1)

const getRoomNumbers = (inputs) => {
  return inputs.map(input => {
    const [h, w, n] = input.split(' ').map(num => +num)
    const floor = `${n % h || h}`
    const room = `0${Math.ceil(n / h)}`.slice(-2)
    return +`${floor}${room}`
  }).join('\n')
}

console.log(getRoomNumbers(inputs))