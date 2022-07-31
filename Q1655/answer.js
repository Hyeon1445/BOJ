const [N, ...inputs] = require('fs').readFileSync('Q1655/input.txt').toString().trim().split('\r\n').map(Number)
const maxHeap = []
let mid = inputs[0]
const minHeap = []

const insertMaxHeap = (value) => {
  maxHeap.push(value)
  let currentIndex = maxHeap.length
  while(currentIndex > 1) {
    const currentValue = maxHeap[currentIndex - 1]
    const parentValue = maxHeap[Math.floor(currentIndex / 2) - 1]
    if(currentValue > parentValue) {
      maxHeap[Math.floor(currentIndex / 2) - 1] = currentValue
      maxHeap[currentIndex - 1] = parentValue
      currentIndex = Math.floor(currentIndex / 2)
    } else {
      break
    }
  }
}

const insertMinHeap = (value) => {
  minHeap.push(value)
  let currentIndex = minHeap.length
  while(currentIndex > 1) {
    const currentValue = minHeap[currentIndex - 1]
    const parentValue = minHeap[Math.floor(currentIndex / 2) - 1]
    if(currentValue < parentValue) {
      minHeap[currentIndex - 1] = parentValue
      minHeap[Math.floor(currentIndex / 2) - 1] = currentValue
      currentIndex = Math.floor(currentIndex / 2)
    } else {
      break
    }
  }
}

const deleteMaxHeap = () => {
  if(maxHeap.length === 1) {
    return maxHeap.pop()
  }
  const maxValue = maxHeap[0]
  const value = maxHeap.pop()
  maxHeap[0] = value
  let currentIndex = 1
  while(currentIndex < maxHeap.length) {
    const currentValue = maxHeap[currentIndex - 1]
    const leftChild = maxHeap[currentIndex * 2 - 1]
    const rightChild = maxHeap[currentIndex * 2]
    if(rightChild !== undefined && rightChild > currentValue && rightChild > leftChild) {
      maxHeap[currentIndex - 1] = rightChild
      maxHeap[currentIndex * 2] = currentValue
      currentIndex = currentIndex * 2 + 1
    } else if(leftChild !== undefined && leftChild > currentValue){
      maxHeap[currentIndex - 1] = leftChild
      maxHeap[currentIndex * 2 - 1] = currentValue
      currentIndex = currentIndex * 2
    } else {
      break
    }
  }
  return maxValue
}

const deleteMinHeap = () => {
  if(minHeap.length === 1) {
    return minHeap.pop()
  }
  const minValue = minHeap[0]
  const value = minHeap.pop()
  minHeap[0] = value
  let currentIndex = 1
  while(currentIndex < minHeap.length) {
    const currentValue = minHeap[currentIndex - 1]
    const leftChild = minHeap[currentIndex * 2 - 1]
    const rightChild = minHeap[currentIndex * 2]
    if(rightChild !== undefined && rightChild < currentValue && rightChild < leftChild) {
      minHeap[currentIndex - 1] = rightChild
      minHeap[currentIndex * 2] = currentValue
      currentIndex = currentIndex * 2 + 1
    } else if(leftChild !== undefined && leftChild < currentValue){
      minHeap[currentIndex - 1] = leftChild
      minHeap[currentIndex * 2 - 1] = currentValue
      currentIndex = currentIndex * 2
    } else {
      break
    }
  }
  return minValue
}

const output = []
output.push(mid)
for(let i = 1; i < N; i++) {
  const input = inputs[i]
  if(mid > input) {
    if(maxHeap.length === minHeap.length) {
      insertMinHeap(mid)
      insertMaxHeap(input)
      mid = deleteMaxHeap()
    } else {
      insertMaxHeap(input)
    }
  } else {
    if(maxHeap.length + 1 === minHeap.length) {
      insertMaxHeap(mid)
      insertMinHeap(input)
      mid = deleteMinHeap()
    } else {
      insertMinHeap(input)
    }
  }
  output.push(mid)
}

console.log(output.join('\n'))