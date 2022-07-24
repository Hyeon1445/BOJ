const [N, ...inputs] = require('fs').readFileSync('Q11279/input.txt').toString().trim().split('\r\n')

const heap = []
const output = []

const insertValue = (value) => {
  heap.push(value)
  let currentIndex = heap.length
  while(currentIndex > 1 && BigInt(heap[currentIndex - 1]) < BigInt(heap[parseInt(currentIndex / 2) - 1])) {
    const temp = heap[parseInt(currentIndex / 2) - 1]
    heap[parseInt(currentIndex / 2) - 1] = heap[currentIndex - 1]
    heap[currentIndex - 1] = temp
    currentIndex = parseInt(currentIndex / 2)
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
      if(rightChild && BigInt(currentValue) > BigInt(rightChild) && BigInt(leftChild) > BigInt(rightChild)) {
        const temp = heap[currentIndex * 2]
        heap[currentIndex * 2] = heap[currentIndex - 1]
        heap[currentIndex - 1] = temp
        currentIndex = currentIndex * 2 + 1
      } else if(leftChild && BigInt(leftChild) < BigInt(currentValue)) {
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