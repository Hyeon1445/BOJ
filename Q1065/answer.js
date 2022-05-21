const input = +require("fs").readFileSync('Q1065/input.txt').toString()
const getAnswer = (n) => {
  let result = 99
  if(n < 100) { return n }
  else {
    for(let i = 100; i <= n; i++) {
      const nums = i.toString().split('').map(num => +num)
      const sub = nums[1] - nums[0]
      for(let j = 1; j < nums.length; j++) {
        if(nums[j] - nums[j - 1] !== sub) { break }
        if(j === nums.length - 1) { result++ }
      }
    }
  }
  return result
}

console.log(getAnswer(input))