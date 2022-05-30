const input = +require("fs").readFileSync("Q11729/input.txt").toString()

const getHanoiResult = (from, by, to, input) => {
  if(input === 1) { return [[from, to]] }
  return [
    ...getHanoiResult(from, to, by, input - 1),
    ...getHanoiResult(from, by, to, 1),
    ...getHanoiResult(by, from, to, input - 1)
  ]
}
const result = getHanoiResult(1, 2, 3, input)
console.log(result.length)
console.log(result.map(position => position.join(' ')).join('\n'))
