const n = +require("fs")
  .readFileSync("Q1562/input.txt")
  .toString()
  .trim()
  .split("\n")[0];
const mod = 1_000_000_000;

const array = Array.from(Array(n + 1), () =>
  Array.from(Array(10), () => Array(1 << 10).fill(-1))
);

function solution(length, num, state) {
  if (length == n) return state == (1 << 10) - 1 ? 1 : 0;
  if (array[length][num][state] > -1) return array[length][num][state];

  let count = 0;
  if (num - 1 >= 0)
    count += solution(length + 1, num - 1, state | (1 << (num - 1)));
  if (num + 1 < 10)
    count += solution(length + 1, num + 1, state | (1 << (num + 1)));

  return (array[length][num][state] = count % mod);
}

let result = 0;
for (let i = 1; i < 10; i++) {
  result += solution(1, i, 1 << i);
  result %= mod;
}

console.log(result);

// DP, Bit Masking
