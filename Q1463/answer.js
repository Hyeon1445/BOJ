const input = +require("fs").readFileSync('Q1463/input.txt')
const arr = Array(input).fill(null)
arr[0] = 0
for(let i = 1; i < input; i++) {
  const result = [arr[i - 1] + 1]
  if((i + 1) % 2 === 0) { result.push(arr[(i + 1) / 2 - 1] + 1) }
  if((i + 1) % 3 === 0) { result.push(arr[(i + 1) / 3 - 1] + 1) }
  arr[i] = Math.min(...result)
}
console.log(arr[input - 1])