const [n, inp] = require("fs").readFileSync('Q2470/input.txt').toString().trim().split('\r\n')
// const [n, inp] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n')

input = inp.split(' ').map(a => +a)

const merge = (left, right) => {
  const sortedArr = []
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

const mergeSort = (arr) => {
  if(arr.length === 1) return arr
  const boundary = Math.ceil(arr.length / 2)
  const left = arr.slice(0, boundary)
  const right = arr.slice(boundary)
  return merge(mergeSort(left), mergeSort(right))
}

const searchResult = (arr) => {
  let num1 = arr[0]
  let num2 = arr[arr.length - 1]
  let leftIdx = 0
  let rightIdx = arr.length - 1
  while(1) {
    if(arr[leftIdx] + arr[rightIdx] === 0) {
      console.log(num1, num2)
      return
    } else if(arr[leftIdx] + arr[rightIdx] < 0) {
      leftIdx = leftIdx + 1
    } else {
      rightIdx = rightIdx - 1
    }
    if(leftIdx >= rightIdx){ break }
    if(Math.abs(arr[leftIdx] + arr[rightIdx]) < Math.abs(num1 + num2)) {
      num1 = arr[leftIdx]
      num2 = arr[rightIdx]
    }
  }
  console.log(num1, num2)
}

searchResult(mergeSort(input))