const [N, ...inputs] = require("fs")
  .readFileSync("Q1725/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const getRectangleSize = (arr, left, right) => {
  if (left === right) {
    return arr[left];
  }
  const mid = Math.floor((left + right) / 2);
  let result = Math.max(
    getRectangleSize(arr, left, mid),
    getRectangleSize(arr, mid + 1, right)
  );
  let low = mid;
  let high = mid + 1;
  let height = Math.min(arr[low], arr[high]);
  result = Math.max(result, height * 2);
  while (low > left || high < right) {
    if (high < right && (low === left || arr[low - 1] < arr[high + 1])) {
      high++;
      height = Math.min(height, arr[high]);
    } else {
      low--;
      height = Math.min(height, arr[low]);
    }
    result = Math.max(result, height * (high - low + 1));
  }
  return result;
};

console.log(getRectangleSize(inputs, 0, N - 1));
