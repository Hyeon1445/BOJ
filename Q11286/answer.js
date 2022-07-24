const [N, ...inputs] = require('fs').readFileSync('Q11286/input.txt').toString().trim().split('\r\n')

const heap = []
const output = []

const abs = (value) => {
  return value.replace('-', '')
}

const isSwapNeeded = (value1, value2) => {
  const absValue1 = abs(value1)
  const absValue2 = abs(value2)
  return (absValue1 !== absValue2 && BigInt(absValue1) < BigInt(absValue2))
   || absValue1 === absValue2 && BigInt(value1) < BigInt(value2)
}

const insertValue = (value) => {
  heap.push(value)
  let currentIndex = heap.length
  while(currentIndex > 1) {
    const currentValue = heap[currentIndex - 1]
    const parentValue = heap[parseInt(currentIndex / 2) - 1]
    if(isSwapNeeded(currentValue, parentValue)) {
      const temp = heap[parseInt(currentIndex / 2) - 1]
      heap[parseInt(currentIndex / 2) - 1] = heap[currentIndex - 1]
      heap[currentIndex - 1] = temp
      currentIndex = parseInt(currentIndex / 2)
    } else { break }
  }
}

const deleteValue = () => {
  if(!heap.length) { output.push('0') }
  else if(heap.length === 1) {
    const value = heap.pop()
    output.push(value)
  } else {
    output.push(heap[0])
    const value = heap.pop()
    heap[0] = value
    let currentIndex = 1
    while(1) {
      const currentValue = heap[currentIndex - 1]
      const leftChild = heap[currentIndex * 2 - 1]
      const rightChild = heap[currentIndex * 2]
      if(rightChild && isSwapNeeded(rightChild, currentValue) && isSwapNeeded(rightChild, leftChild)) {
        const temp = heap[currentIndex * 2]
        heap[currentIndex * 2] = heap[currentIndex - 1]
        heap[currentIndex - 1] = temp
        currentIndex = currentIndex * 2 + 1
      } else if(leftChild && isSwapNeeded(leftChild, currentValue)) {
        const temp = heap[currentIndex * 2 - 1]
        heap[currentIndex * 2 - 1] = heap[currentIndex - 1]
        heap[currentIndex - 1] = temp
        currentIndex = currentIndex * 2
      } else {
        break
      }
    }
  }
}

inputs.forEach(input => {
  if(input === '0') { deleteValue() }
  else { insertValue(input) }
})

console.log(output.join('\n'))