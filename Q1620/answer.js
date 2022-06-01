const inputs = require('fs').readFileSync('Q1620/input.txt').toString().trim().split('\r\n')
const [n, m] = inputs[0].split(' ').map(num => +num)
const pokemon = inputs.splice(1, n)
const pokemonObj = {}
pokemon.forEach((monster, index) => { pokemonObj[monster] = index })
const questions = inputs.splice(1, m)
const answers = []
questions.forEach(question => { answers.push(isNaN(+question) ? +pokemonObj[question] + 1 : pokemon[+question - 1]) })
console.log(answers.join('\n'))