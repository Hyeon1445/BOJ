const [nk, ...arr] = require('fs').readFileSync('Q1654/input.txt').toString().trim().split('\r\n')
const [N, K] = nk.split(' ')

const getCount = (len) => {
  return arr.map(input => BigInt(input) / BigInt(len)).reduce((a, b) => BigInt(a) + BigInt(b))
}

const getAnswer = (left, right) => {
  const mid = `${((BigInt(left) + BigInt(right)) / BigInt(2))}`
  if(left === right) { return left }
  const midCount = getCount(mid)
  if(midCount >= BigInt(K) && getCount(`${BigInt(mid) + BigInt(1)}`) < BigInt(K)) { return mid }
  return midCount < BigInt(K) ? getAnswer(left, mid) : getAnswer(`${BigInt(mid) + BigInt(1)}`, right)
}

arr.sort((a, b) => BigInt(a) < BigInt(b) ? 1 : -1)
const answer = getAnswer('1', arr[0])
console.log(parseInt(answer))