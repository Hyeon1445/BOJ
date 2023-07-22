let input = require("fs")
  .readFileSync("Q1644/input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let primes = [];
let check = new Array(n + 1).fill(true);
for (let i = 2; i * i <= n; i++) {
  if (!check[i]) continue;
  for (let j = i * i; j <= n; j += i) {
    check[j] = false;
  }
}
for (let i = 2; i <= n; i++) {
  if (check[i]) primes.push(i);
}

let left = (sum = count = 0);
for (let right = 0; right < primes.length; right++) {
  sum += primes[right];
  while (sum > n) {
    sum -= primes[left];
    left++;
  }
  if (sum === n) count++;
}
console.log(count);
