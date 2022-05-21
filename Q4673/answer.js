const getSelfNumbers = () => {
  const max = 10000
  result = new Array(max).fill(0).map((el, idx) => idx + 1)
  for(let i = 1; i <= max; i++) {
    const dnum = i > 9 ? i + i.toString().split('').reduce((a, b) => +a + +b): i * 2
    if(max > dnum - 1) { result[dnum - 1] = 0 }
  }
  return result
}
console.log(getSelfNumbers().filter(a => a).join('\n'))